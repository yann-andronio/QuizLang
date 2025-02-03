import { Fragment } from "react/jsx-runtime";
import Headerhome from "../../components/headerhome/Headerhome";
import { FaLightbulb, FaChartLine, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rigthhome: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="header w-full">
        <Headerhome />
      </div>

      <div className="boxcardparents flex flex-col mt-14 gap-6 px-4">
        {/* Conseils */}
        <div className="p-6 rounded-lg border bg-gray-100 flex flex-col gap-6 shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-yellow-500">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaLightbulb className="text-yellow-500" size={30} />
            Conseils
          </h1>
          <p className="text-gray-700">Termine toutes les leçons pour t'améliorer progressivement.</p>
        </div>

        {/* Expérience */}
        <div className="p-6 rounded-lg border bg-gray-100 flex flex-col gap-6 shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-blue-500">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaChartLine className="text-blue-500" size={30} />
            Expérience
          </h1>
          <p className="text-gray-700">Accumule de l'expérience en complétant des exercices pratiques.</p>
        </div>

        {/* Boutique */}
        <div className="p-6 rounded-lg border bg-gray-100 flex flex-col gap-6 shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-green-500">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaShoppingCart className="text-green-500" size={30} />
            Plus de vies ?
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Achète des vies dans la boutique pour continuer à apprendre.</p>
            <Link to="/Login">
              <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-5 py-2 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-green-700">
                <span>GO</span>
                <FaArrowRight className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Rigthhome;
