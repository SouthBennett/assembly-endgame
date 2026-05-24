import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
// import LanguageChips from './components/LanguageChips'
import { languages } from './languages'
import LanguageChips from './components/LanguageChips'
import Keyboard from './components/Keyboard'
import Button from './components/Button'



export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetter] =  useState([]);
  
  // Derived values
  const wrongGuessesCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameLost = wrongGuessesCount >= languages.length - 1
  // console.log("Game Over! You Lose!: " + isGameOver)

  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  // console.log("You Win!: " + isGameWon)

  const isGameOver = isGameWon || isGameLost

  const splitCurrentWord = currentWord.split("")

  const letters = splitCurrentWord.map((letter, index) => (
    <span 
      key={index}> 
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ))

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

  return (
    <main>
      <Header />
      <Status 
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
      />
      <section className="language-chips">
        {languageChips}
        {/* {wrongGuessesCount} */}
      </section>
      <section className="word">
        {letters}
      </section>
      <section className="keyboard">
        <Keyboard 
            chosenLetter={addGuessedLetter}
            guessedLetters={guessedLetters}
            currentWord={currentWord}
        />
      </section>
      {isGameOver && <Button />}
    </main>
    
  )
}

