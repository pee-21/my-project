import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "Python", "Java"],
      answer: "CSS",
    },
    {
      question: "What year was JavaScript created?",
      options: ["1995", "2005", "2015", "1989"],
      answer: "1995",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div>
          <h2>Quiz Finished!</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          <div>
            {questions[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
