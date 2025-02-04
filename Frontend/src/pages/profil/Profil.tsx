import { Fragment } from "react/jsx-runtime";
import Lefthome from "../../layout/lefthome/Lefthome";
import Rigthprofil from "../../layout/rigthprofil/Rigthprofil";

const Profil: React.FC = () => {
  return (
    <Fragment>
      <div className="parents relative bg-[#F8FAF5] flex h-screen ">
        <div
          className={` hidden lg:flex  fixed top-0 left-0 min-h-screen  bg-[#F8FAF5]    flex-col items-center p-5  border-r-2   `}
        >
          <h1 className="text-3xl font-semibold tracking-wider font-quizlang text-green-500  ">
            QUIZLANG
          </h1>
          <Lefthome />
        </div>

        <div
          className={` px-0 lg:px-44 rigthprofil p-8 ml-0  lg:ml-60 h-fit   w-[100%]  bg-[#F8FAF5]  `}
        >
          <Rigthprofil />
        </div>
      </div>
    </Fragment>
  );
};
export default Profil;
