export default function Keyboard(props) {

  function mapAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const splitAlphabet = alphabet.split("");
    const mapSplitAlphabet = splitAlphabet.map((letter, index) => (

    <button
      key={index}
      letter={letter}
      onClick={() => props.chosenLetter(letter)}
    >
    {letter.toUpperCase()}  
    </button>  
    ))
    return mapSplitAlphabet
  }
  return mapAlphabet()
}