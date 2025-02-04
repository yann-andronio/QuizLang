import { Fragment } from "react/jsx-runtime";
import Lefthome from "../../layout/lefthome/Lefthome";
import Rigthmessage from "../../layout/rigthmessage/Rigthmessage";

const Message: React.FC = () => {
  return (
    <Fragment>
      <div className="parents relative bg-[#F8FAF5] flex h-screen overflow-hidden ">
        <div
          className={`  fixed top-0 left-0 min-h-screen  bg-[#F8FAF5]   flex flex-col items-center p-5  border-r-2   `}
        >
          <h1 className="text-3xl font-semibold tracking-wider font-quizlang text-green-500  ">
            QUIZLANG
          </h1>
          <Lefthome />
        </div>

        <div
          className={`  rigthmessage p-8 py-1  ml-60 h-fit   w-[100%]  bg-[#F8FAF5]  `}
        >
          <Rigthmessage />
        </div>
      </div>
    </Fragment>
  );
};
export default Message;
