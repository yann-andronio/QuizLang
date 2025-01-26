import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { FiLogIn, FiHelpCircle } from "react-icons/fi";

const Headerfirstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <header>
        <nav className={` w-full z-50`}>
          <div className="  bg-[#e0e5df]  ">
            <div className="flex  items-center justify-between text-center px-3 lg:px-8 py-4 lg:py-0">
              <div className="flex items-center ">
                <img
                  src="./assets/images/firstpage/logo.png"
                  className="hidden lg:block "
                  alt="logo"
                  width={90}
                />
                <h1 className="text-3xl font-semibold tracking-wider font-quizlang text-green-500 ">
                  QUIZLANG
                </h1>
              </div>

              <div className=" flex items-center  ">
                <Link to="/helps" className="relative hidden lg:block">
                  <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                    <FiHelpCircle className="text-xl" aria-hidden="true" />
                    <span>Aide</span>
                  </button>
                </Link>

                <div className="relative ml-4">
                  <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                    <FiLogIn className="text-lg" />
                    <span>Connexion</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Headerfirstpage;
