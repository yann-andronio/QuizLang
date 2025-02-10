import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// Déclaration des types pour les questions
type Question = {
  id: number;
  type: "qcm" | "phrase";
  question: string;
  options?: string[];
  answer?: string;
  words?: string[];
  correctOrder?: string[];
};

const questions: Question[] = [
  {
    id: 1,
    type: "qcm",
    question: "Quelle est la traduction de 'Bonjour' en anglais ?",
    options: ["Hello", "Goodbye", "Thank you", "Please"],
    answer: "Hello",
  },
  {
    id: 2,
    type: "phrase",
    question: "Comment dire 'Je veux manger' en anglais ?",
    words: ["to", "eat", "I", "want"],
    correctOrder: ["I", "want", "to", "eat"],
  },
  {
    id: 3,
    type: "qcm",
    question: "Comment dire 'Merci' en anglais ?",
    options: ["Hello", "Goodbye", "Thank you", "Please"],
    answer: "Thank you",
  },
];

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (option: string) => {
    const correct = questions[currentQuestion].answer === option;
    setSelectedAnswer(option);
    setIsCorrect(correct);
    setScore((prevScore) => (correct ? prevScore + 1 : prevScore));
    setLives((prevLives) => (correct ? prevLives : prevLives - 1));
    setShowResult(true);
  };

  const addSelectedWord = (word: string) => {
    setSelectedWords([...selectedWords, word]);
  };

  const removeSelectedWord = (index: number) => {
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
  };

  const checkSentenceAnswer = () => {
    const correctOrder = questions[currentQuestion].correctOrder;
    const correct =
      JSON.stringify(selectedWords) === JSON.stringify(correctOrder);
    setIsCorrect(correct);
    setScore((prevScore) => (correct ? prevScore + 1 : prevScore));
    setLives((prevLives) => (correct ? prevLives : prevLives - 1));
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setSelectedWords([]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz terminé ! Score: " + score);
    }
  };

  return (
    <div className="relative bg-[#F8FAF5] flex h-screen flex-col items-center justify-center px-6">
      {/* Bouton de retour */}
      <Link to="/home" className="absolute top-4 left-4 ml-4">
        <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg hover:scale-105 hover:shadow-2xl">
          <RiArrowGoBackFill className="text-lg" />
        </button>
      </Link>

      {/* Affichage des vies */}
      <div className="absolute top-4 right-10 flex items-center space-x-3">
        <div className="flag flex gap-8 justify-center items-center">
          <div className="langue">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <img
                src="./assets/images/firstpage/francais.png"
                alt="drapeau de langue"
                width={50}
              />
            </div>
          </div>
          <div className="hearth flex gap-4 justify-center items-center">
            <img src="./assets/images/firstpage/vie.png" width={47} alt="" />
            <h1 className="text-2xl font-medium">{lives}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-xl font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>

        {/* Contenu du quiz */}
        {questions[currentQuestion].type === "qcm" ? (
          <div className="space-y-3">
            {questions[currentQuestion].options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-3 rounded-lg text-lg font-semibold shadow-md flex items-center justify-between 
                ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={showResult}
              >
                {option}
                {selectedAnswer === option &&
                  (isCorrect ? (
                    <FaCheckCircle className="text-white" />
                  ) : (
                    <FaTimesCircle className="text-white" />
                  ))}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="mb-4 flex flex-wrap justify-center border-b pb-2 min-h-[40px]">
              {selectedWords.map((word, index) => (
                <button
                  key={index}
                  className="px-3 py-2 bg-blue-400 text-white rounded-lg mx-1"
                  onClick={() => removeSelectedWord(index)}
                >
                  {word}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center space-x-2">
              {questions[currentQuestion].words?.map((word) => (
                <button
                  key={word}
                  className="px-3 py-2 bg-gray-200 rounded-lg"
                  onClick={() => addSelectedWord(word)}
                  disabled={selectedWords.includes(word)}
                >
                  {word}
                </button>
              ))}
            </div>

            <button
              onClick={checkSentenceAnswer}
              className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg"
              disabled={
                selectedWords.length !==
                questions[currentQuestion].correctOrder?.length
              }
            >
              Valider
            </button>
          </div>
        )}

        {showResult && !gameOver && (
          <div
            className={`absolute bottom-0 left-0 w-full py-5 px-6 flex flex-col items-center justify-center 
          ${
            isCorrect ? "bg-green-500" : "bg-red-500"
          } text-white shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-3 text-2xl font-semibold">
              {isCorrect ? (
                <>
                  <FaCheckCircle className="text-3xl animate-pulse" /> Bonne
                  réponse !
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-3xl animate-pulse" /> Mauvaise
                  réponse !
                </>
              )}
            </div>

            <button
              onClick={nextQuestion}
              className="mt-3 bg-white text-black px-6 py-3 rounded-full shadow-lg 
            hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
            >
              Question Suivante
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
