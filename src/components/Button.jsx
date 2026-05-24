export default function Button(props) {
  return (
    <button 
    className="new-game"
    onClick={props.startNewGame}
    >
      New Game
    </button>
  )
  
}