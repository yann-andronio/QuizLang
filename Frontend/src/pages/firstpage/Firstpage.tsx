import { Fragment } from "react/jsx-runtime";
import Headerfirstpage from "../../components/headerfirstpage/Headerfirstpage";
import Herofirstpage from "../../components/herofirstpage/Herofirstpage";
import Footerfirstpage from "../../components/footerfirstpage/Footerfirstpage";

const Firstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="firstpage relative lg:h-screen md:h-screen  overflow-hidden bg-[#f5f5f5]">
        <div className="header">
          <Headerfirstpage />
        </div>
        <main className=" mb-8 lg:mb-0 ">
          <Herofirstpage />
        </main>
        <div className="footer  ">
          <Footerfirstpage />
        </div>
      </div>
    </Fragment>
  );
};

export default Firstpage;
