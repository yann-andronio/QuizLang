import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Cerclebuttonlevel: React.FC = () => {
  interface Level {
    path: string;
  }

  const levelbutton: Level[] = [
    { path: "/" },
    { path: "/profile" },
    { path: "/settings" },
    { path: "/dashboard" },
 
  ];

  return (
    <Fragment>
      <div className="bigbox w-full flex flex-col items-center mt-10 gap-10 relative">
        {levelbutton.map((level, index) => {
          let translateX = index % 2 === 0 ? "-translate-x-6" : "translate-x-6";
          return (
            <Link key={index} to={level.path} className={`relative ${translateX}`}>
              <button className="flex items-center justify-center bg-green-500 text-white rounded-full w-20 h-20 text-sm font-medium shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                <FaStar size={40} />
              </button>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Cerclebuttonlevel;
