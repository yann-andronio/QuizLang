import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoHeartHalf } from "react-icons/io5";
const Headerhome: React.FC<{}> = () => {
  return (
    <Fragment>
      <header>
        <nav className={` w-full z-50`}>
          <div className="    ">
            <div className="flex  items-center justify-between text-center px-3 lg:px-8 py-4 lg:py-0">
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

              <div className=" flex items-center  ">
                <Link to="/Login" className="relative ml-4">
                  <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                    <FiLogIn className="text-lg" />
                    <span>Se deconnecter</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Headerhome;
