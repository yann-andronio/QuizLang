import { Fragment } from "react/jsx-runtime";
import { FaUser } from "react-icons/fa";
const Chapitrecenterhome: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="bigbox w-full">
        <div className="flex items-center justify-between space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl  border-b-4 border-[#3db168]">
          <div className="tittle flex flex-col gap-4">
            <h3 className="text-xl">Chapitre 1 </h3>
            <h1 className="text-2xl">Les salutations</h1>
          </div>
          <div className="icone p-4 bg-red-400 rounded-lg">
            <FaUser size={30} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chapitrecenterhome;
