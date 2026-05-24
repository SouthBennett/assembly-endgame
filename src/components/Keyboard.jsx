import clsx from "clsx";

export default function Keyboard(props) {

  function mapAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const splitAlphabet = alphabet.split("");
    const mapSplitAlphabet = splitAlphabet.map((letter, index) => {
      const isGuessed = props.guessedLetters.includes(letter)
      const isCorrect = isGuessed && props.currentWord.includes(letter)
      const isWrong = isGuessed && !props.currentWord.includes(letter)
      const className = clsx({
        correct: isCorrect,
        wrong: isWrong
      })

      console.log(className)

      return (
        <button
          className={className}
          key={index}
          letter={letter}
          disabled={props.isGameOver}
          aria-disabled={props.guessedLetters.includes(letter)}
          aria-label={`Word ${letter}`}
          onClick={() => props.chosenLetter(letter)}
        >
        {letter.toUpperCase()}  
        </button>  
      )
    })
    return mapSplitAlphabet
  }
  return mapAlphabet()
}