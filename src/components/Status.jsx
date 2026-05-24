import clsx from "clsx"
export default function Status(props) {

  const gameStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost
  })
  return (
    <section className={gameStatusClass}>
      {props.isGameOver ? (
        props.isGameWon ? (
          <>
            <h2>You Win!</h2>
            <p>Well Done! 🎉</p>
          </>
        ) : (
          <>
            <h2>You Lose</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
          )
      ) : (
          null
        )
      }
</section>
  )
}