import { Fragment } from "react/jsx-runtime";
import Lefthome from "../../layout/lefthome/Lefthome";
import Centerhome from "../../layout/centerhome/Centerhome";
import Rigthhome from "../../layout/rigthhome/Rigthhome";

const Home: React.FC = () => {
  return (
    <Fragment>
      <div className="parents relative bg-[#F8FAF5] flex h-screen ">
        <div
          className={`  fixed top-0 left-0 min-h-screen  bg-[#F8FAF5]   flex flex-col items-center p-5  border-r-2   `}
        >
          <h1 className="text-3xl font-semibold tracking-wider font-quizlang text-green-500  ">
            QUIZLANG
          </h1>
          <Lefthome />
        </div>

        <div className={` center p-8 ml-60 h-fit   w-[100%] flex-1 bg-[#F8FAF5]  mr-[40rem]  `}>
          <Centerhome />
        </div>

        <div className={`  fixed top-0 right-0 min-h-screen bg-[#F8FAF5]    p-8 w-[640px]  flex-1  `}>
          <Rigthhome />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
