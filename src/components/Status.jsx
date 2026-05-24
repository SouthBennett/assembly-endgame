import clsx from "clsx"
export default function Status(props) {

  const gameStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost
  })

  function renderGameStatus() {
    if (!props.isGameOver) {
      return null
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well Done! 🎉</p>
        </>
      )
    } else {
      return (
        <>
          <h2>You Lose</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }
  return (
    <section className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  )
}