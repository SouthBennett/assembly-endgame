import clsx from "clsx"
export default function Status(props) {

  const gameStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    farewell: !props.isGameOver && props.isLastGuessIncorrect
  })

  function renderGameStatus() {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return (
      <p 
        className="farewell-message"
      >
        {props.getFarewellText(props.languages[props.wrongGuessesCount - 1].name)}
      </p>
      )
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well Done! 🎉</p>
        </>
      )
    } 
    if (props.isGameLost) {
      return (
        <>
          <h2>You Lose</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

    return null
  }
  return (
    <section 
      aria-live="polite" 
      role="status" 
      className={gameStatusClass}
    >
      {renderGameStatus()}
    </section>
  )
}