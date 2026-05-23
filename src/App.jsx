import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
// import LanguageChips from './components/LanguageChips'
import { languages } from './languages'
import LanguageChips from './components/LanguageChips'
import Keyboard from './components/Keyboard'
import Button from './components/Button'



export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState("react")

  const splitCurrentWord = currentWord.split("")
  console.log(splitCurrentWord)

  const letters = splitCurrentWord.map((letter, index) => (
    <span key={index}> {letter.toUpperCase()}</span>
  ))
  console.log(letters)

  const languageChips = languages.map(lang => (
    <LanguageChips
      key={lang.name}
      name={lang.name}
      backgroundColor={lang.backgroundColor}
      color={lang.color}
    />
  ))
  console.log(languageChips)

  

  return (
    <main>
      <Header />
      <Status />
      <section className="language-chips">
        {languageChips}
      </section>
      <section className="word">
        {letters}
      </section>
      <section className="keyboard">
        <Keyboard />
      </section>
      <Button />
    </main>
    
  )
}

