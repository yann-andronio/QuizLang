import { useState } from "react";
import {
  FaArrowLeft,
  FaHeart,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "Quelle est la traduction de 'Bonjour' en anglais ?",
    options: ["Hello", "Goodbye", "Thank you", "Please"],
    answer: "Hello",
  },
  {
    id: 2,
    question: "Comment dit-on 'Merci' en anglais ?",
    options: ["Sorry", "Please", "Thank you", "Welcome"],
    answer: "Thank you",
  },
  {
    id: 3,
    question: "Que signifie 'Cat' en français ?",
    options: ["Chien", "Chat", "Oiseau", "Poisson"],
    answer: "Chat",
  },
];

const Levelpage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    const isAnswerCorrect = option === questions[currentQuestion].answer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (lives === 0) {
      setGameOver(true);
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(5);
    setShowResult(false);
    setGameOver(false);
    setSelectedAnswer(null);
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

      {/* Barre de progression */}
      <div className="absolute top-16 w-full max-w-lg bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Contenu du quiz */}
      {!gameOver ? (
        <div className="mt-20 bg-white shadow-xl p-6 rounded-xl w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
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
        </div>
      ) : (
        <div className="bg-white shadow-xl p-6 rounded-xl w-full max-w-lg text-center mt-20">
          <h2 className="text-2xl font-bold mb-6">Quiz Terminé !</h2>
          <p className="text-lg font-medium mb-4">
            Score : {score} / {questions.length}
          </p>

          <button
            onClick={handleRetry}
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            <RiArrowGoBackFill className="text-xl" /> Ressayer
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
            onClick={handleNextQuestion}
            className="mt-3 bg-white text-black px-6 py-3 rounded-full shadow-lg 
            hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
          >
            Question Suivante
          </button>
        </div>
      )}
    </div>
  );
};

export default Levelpage;
