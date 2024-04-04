import { useRef } from "react";

export default function Answers({
  answers,
  answerState,
  onSelect,
  selectedAnswer,
}) {
  const shuffledAnswers = useRef([...answers].sort(() => 0.5 - Math.random()));

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (isSelected && answerState === "answered") {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" && isSelected) ||
          (answerState === "wrong" && isSelected)
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClasses}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
