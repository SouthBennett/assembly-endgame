export default function LanguageChips(props) {
  const isLanguageLost = props.index < props.wrongGuessesCount
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color 
  }
  return (
    <span 
      className={`chip ${isLanguageLost ? "lost" : ""}`} 
      style={styles}
    > {props.name}
    </span>
  )
}