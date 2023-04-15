import React, { useState } from "react";
import { Container } from "react-bootstrap";

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript framework for building user interfaces",
      "A server-side scripting language",
      "A database management system",
      "A programming language",
    ],
    answer: "A JavaScript framework for building user interfaces",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A markup syntax extension for JavaScript",
      "A programming language",
      "A database management system",
      "A server-side scripting language",
    ],
    answer: "A markup syntax extension for JavaScript",
  },
  {
    id: 3,
    question: "What is a component in React?",
    options: [
      "A function that returns HTML",
      "A function that returns JavaScript",
      "A function that returns CSS",
      "A function that returns JSON",
    ],
    answer: "A function that returns HTML",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option, index) => (
              <section key={`${index}app`} className='m-2'>
                <button
                  variant='primary'
                  onClick={() => handleAnswerOptionClick(option)}
                  className='btn btn-primary btn-custom'
                >
                  {option}
                </button>
              </section>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Quiz;
