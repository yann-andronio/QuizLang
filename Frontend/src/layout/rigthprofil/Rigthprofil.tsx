import { Fragment } from "react/jsx-runtime";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaGamepad,
  FaMedal,
  FaTrophy,
  FaUser,
} from "react-icons/fa";

const Rigthprofil: React.FC = () => {
  return (
    <Fragment>
      <div className="header flex w-full">
        <div className="parents md:ml-10  flex w-full justify-center lg:justify-between md:justify-between  lg:border-b-2 lg:border-[#B0BEC5] pb-8">
          <div className="box1 flex gap-5">
            <div className="level md:flex  justify-center items-center hidden lg:flex">
              <h1 className="text-6xl w-36 h-36 font-bold border-2 border-dashed border-[#B0BEC5] rounded-full flex justify-center text-[#B0BEC5] items-center">
                0
              </h1>
            </div>

            <div className="userinforem p-4 flex flex-col gap-8 items-start max-w-xs text-start">
              <div className="nameandemail">
                <p className="text-2xl font-bold text-gray-800">
                  Yann Andronio
                </p>
                <p className="text-lg text-gray-500">yannAndeonio@gmail.com</p>
              </div>

              <div className="langue">
                <img
                  src="./assets/images/firstpage/francais.png"
                  alt="drapeau de langue"
                  width={30}
                />
              </div>
            </div>
          </div>
          {/* <div className="box2">
            <Link to="/Login" className="relative ml-4">
              <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                <FiLogIn className="text-lg" />
                <span>modifier</span>
              </button>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Statistique */}
      <div className="statistique p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Statistique
        </h2>

        <div className="grid grid-cols-2 gap-6">
       
          <div className="border-2 border-red-500 rounded-2xl p-6 bg-gradient-to-r from-red-100 to-red-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center">
              <FaMedal size={30} className="text-red-600" />
              <h1 className="text-3xl font-semibold text-gray-800">125</h1>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Total XP
            </h3>
          </div>

          <div className="border-2 border-blue-500 rounded-2xl p-6 bg-gradient-to-r from-blue-100 to-blue-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center">
              <FaGamepad size={30} className="text-blue-600" />
              <h1 className="text-3xl font-semibold text-gray-800">50</h1>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Parties Jouées
            </h3>
          </div>

      
          <div className="border-2 border-green-500 rounded-2xl p-6 bg-gradient-to-r from-green-100 to-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center">
              <FaTrophy size={30} className="text-green-600" />
              <h1 className="text-3xl font-semibold text-gray-800">2000</h1>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Meilleur Score
            </h3>
          </div>

         
          <div className="border-2 border-yellow-500 rounded-2xl p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center">
              <FaChartLine size={30} className="text-yellow-600" />
              <h1 className="text-3xl font-semibold text-gray-800">75%</h1>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Taux de Victoire
            </h3>
          </div>
        </div>
      </div>

      {/* Section des progrès d'apprentissage */}
      <div className="progression p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Progrès d'apprentissage
        </h2>
        <div className="grid grid-cols-2 gap-6">
      
          <div className="border-2 border-blue-500 rounded-2xl p-6 bg-gradient-to-r from-blue-100 to-blue-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center justify-center">
              <FaUser size={30} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2 text-center">
              Français - Niveau 3
            </h3>
            <div className="progress-bar mt-4 h-2 bg-gray-300 rounded-full">
              <div className="progress w-3/4 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>

       
          <div className="border-2 border-green-500 rounded-2xl p-6 bg-gradient-to-r from-green-100 to-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex gap-4 items-center justify-center">
              <FaChartLine size={30} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2 text-center">
              Leçons terminées
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 text-center">
              45/50
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Rigthprofil;
