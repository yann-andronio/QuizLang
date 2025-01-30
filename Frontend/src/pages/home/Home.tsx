import { Fragment } from "react/jsx-runtime";
import Lefthome from "../../layout/lefthome/Lefthome";
import Centerhome from "../../layout/centerhome/Centerhome";
import Rigthhome from "../../layout/rigthhome/Rigthhome";

const Home: React.FC = () => {
  return (
    <Fragment>
      <div className="parents flex h-screen">
        <div className={`bg-[#4B0082] fixed top-0 left-0 min-h-screen flex flex-col items-center p-7  `} >
          <h1>QUIZLANG</h1>
          <Lefthome />
        </div>

        <div className={`center p-8 ml-60 bg-[#E6E6FA] w-[100%] flex flex-1  `}>
          <Centerhome />
        </div>

        <div className={`rigth p-8 bg-[#E6E6FA] w-[100%] flex-1 flex  `}>
          <Rigthhome />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
