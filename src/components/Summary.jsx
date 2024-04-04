import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function ({ userAnswers }) {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswerShare = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Trophy img" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
