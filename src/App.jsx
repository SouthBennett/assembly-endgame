import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
// import LanguageChips from './components/LanguageChips'
import { languages } from './languages'
import LanguageChips from './components/LanguageChips'
import Keyboard from './components/Keyboard'
import Button from './components/Button'
import { getFarewellText, getRandomWord } from './components/utils'
import clsx from 'clsx'



export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetter] =  useState([]);
  
  // Derived values
  const numOfGuessesLeft = languages.length - 1
  const wrongGuessesCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = wrongGuessesCount >= numOfGuessesLeft
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter) 
  console.log(isLastGuessIncorrect)

  const splitCurrentWord = currentWord.split("")
  const letters = splitCurrentWord.map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    )
    return (
      <span 
        key={index} className={letterClassName}> 
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    )
  })

  const languageChips = languages.map((lang, index) => (
    <LanguageChips
      index={index}
      key={lang.name}
      name={lang.name}
      backgroundColor={lang.backgroundColor}
      color={lang.color}
      wrongGuessesCount={wrongGuessesCount}
    />
  ))
  console.log(languageChips)

  function addGuessedLetter(letter) {
    setGuessedLetter(prevLetters => 
      prevLetters.includes(letter) ? 
      prevLetters : 
      [...prevLetters, letter])
  }

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetter([])
  }

  return (
    <main>
      <Header />

      <Status 
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        getFarewellText={getFarewellText}
        wrongGuessesCount={wrongGuessesCount}
        languages={languages}
      />

      <section className="language-chips">
        {languageChips}
      </section>

      <section className="word">
        {letters}
      </section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section 
        className="sr-only" 
        aria-live="polite" 
        role="status"
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Correct! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }
          You have {numOfGuessesLeft} attempts left.
        </p>
        <p>Current word: {currentWord.split("").map(letter => 
          guessedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}
        </p>
      </section>

      <section className="keyboard">
        <Keyboard 
            chosenLetter={addGuessedLetter}
            guessedLetters={guessedLetters}
            currentWord={currentWord}
            isGameOver={isGameOver}
        />
      </section>

      {isGameOver && 
        <Button 
          startNewGame={startNewGame}
        />}

    </main>
    
  )
}

