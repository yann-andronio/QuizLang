import { useState } from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
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
  const [lives, setLives] = useState(5); // Vies max = 5
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
      alert("Game Over ! Tu n'as plus de vies.");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      alert(`Quiz terminé ! Score : ${score + 1}/${questions.length}`);
    }
  };

  return (
    <div className="relative bg-[#F8FAF5] flex h-screen flex-col items-center justify-center px-6">
      {/* Bouton de retour */}
      <Link to="/home" className="absolute top-4 left-4 ml-4">
        <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
          <RiArrowGoBackFill className="text-lg" />
        </button>
      </Link>

      {/* Affichage des vies */}
      <div className="absolute top-4 right-10 flex items-center space-x-1">
        <div className="flag flex gap-8 justify-center items-center">
          <div className="langue">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <img
                src="./assets/images/firstpage/francais.png"
                alt="drapeau de langue "
                width={50}
              />
            </div>
          </div>
          <div className="hearth flex gap-4 justify-center items-center">
            <img src="./assets/images/firstpage/vie.png" width={47} alt="" />
            <h1 className="text-2xl font-medium">3</h1>
          </div>
        </div>
      </div>

      {/* Contenu du quiz */}
      <div className="mt-10 bg-white shadow-xl p-6 rounded-xl w-full max-w-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          {questions[currentQuestion].question}
        </h2>
        <div className="mt-4 space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full py-3 px-4 rounded-xl text-lg font-medium border-2 border-gray-300 hover:bg-gray-100 transition"
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Affichage du résultat */}
      {showResult && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-md text-center">
          {isCorrect ? (
            <p className="text-green-500 font-semibold">✅ Bonne réponse !</p>
          ) : (
            <p className="text-red-500 font-semibold">
              ❌ Mauvaise réponse ! La bonne réponse était :
              <span className="font-bold">
                {" "}
                {questions[currentQuestion].answer}
              </span>
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="mt-3 bg-[#22C55E] text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Continuer
          </button>
        </div>
      )}
    </div>
  );
};

export default Levelpage;
