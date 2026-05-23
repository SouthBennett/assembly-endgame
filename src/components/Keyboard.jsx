export default function Keyboard() {

  function mapAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const splitAlphabet = alphabet.split("");
    const mapSplitAlphabet = splitAlphabet.map((letter, index) => (

    <button
      key={index}
      letter={letter}
    >
    {letter.toUpperCase()}  
    </button>  
    ))
    return mapSplitAlphabet
  }
  return mapAlphabet()
}