import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
// import LanguageChips from './components/LanguageChips'
import { languages } from './languages'
import LanguageChips from './components/LanguageChips'


export default function AssemblyEndgame() {

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
    </main>
    
  )
}

