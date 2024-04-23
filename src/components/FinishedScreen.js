function FinishedScreen({ points, totalPoints, highestScore, dispatch }) {
  const percentage = ((points / totalPoints) * 100).toFixed(0);
  return (
    <>
      <p className="result">
        You scored <strong> {points}</strong> out of {totalPoints} ({percentage}
        %)
      </p>
      <p className="highscore">Highest Score: {highestScore} points</p>
      <button
        className="btn btn-ui "
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
