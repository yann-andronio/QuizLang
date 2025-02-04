import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Cerclebuttonlevel: React.FC = () => {
  interface Level {
    title: string;
    lesson: string;
    path: string;
  }

  const levelbutton: Level[] = [
    { title: "Commande au café", lesson: "Leçon 2 sur 4", path: "/levelpage" },
    { title: "Acheter un ticket", lesson: "Leçon 3 sur 4", path: "/levelpage" },
    { title: "Réserver un hôtel", lesson: "Leçon 1 sur 4", path: "/levelpage" },
    { title: "Trouver un taxi", lesson: "Leçon 4 sur 4", path: "/levelpage" },
    { title: "Commande au café", lesson: "Leçon 2 sur 4", path: "/levelpage" },
    { title: "Acheter un ticket", lesson: "Leçon 3 sur 4", path: "/levelpage" },
    { title: "Réserver un hôtel", lesson: "Leçon 1 sur 4", path: "/levelpage" },
    { title: "Trouver un taxi", lesson: "Leçon 4 sur 4", path: "/levelpage" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center mt-10 gap-10 relative">
      {levelbutton.map((level, index) => {
        let translateX = index % 2 === 0 ? "-translate-x-6" : "translate-x-6";

        return (
          <div key={index} className="relative flex flex-col items-center">
            <button
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className={`relative z-0 flex items-center justify-center bg-[#58CC02] text-white rounded-full w-20 h-20 text-sm font-medium shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#46A302] ${translateX}`}
            >
              <FaStar size={40} />
            </button>

            {/* Tooltip Card en bas */}
            {activeIndex === index && (
              <div className=" z-50 absolute top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-xl p-4 shadow-xl w-64 text-center transform transition-all duration-300 animate-fadeIn">
                {/* Petit triangle vers le haut */}
                <div className="absolute left-1/2 -top-2 w-4 h-4 bg-green-500 rotate-45"></div>
                <h2 className="text-lg font-semibold">{level.title}</h2>
                <p className="text-sm">{level.lesson}</p>
                <Link
                  to={level.path}
                  className="mt-3 inline-block bg-white text-green-600 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-gray-100 transition"
                >
                  Commencer +10 XP
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cerclebuttonlevel;
