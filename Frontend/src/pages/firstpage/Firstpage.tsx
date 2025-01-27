import { Fragment } from "react/jsx-runtime";
import Headerfirstpage from "../../components/headerfirstpage/Headerfirstpage";
import Herofirstpage from "../../components/herofirstpage/Herofirstpage";
import Footerfirstpage from "../../components/footerfirstpage/Footerfirstpage";

const Firstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="firstpage relative lg:h-screen   overflow-hidden bg-custom-gradient">
        <div className="header">
          <Headerfirstpage />
        </div>
        <main className=" mb-14 lg:mb-0 mx-6 lg:mx-0 ">
          <Herofirstpage />
        </main>
        <div className="footer lg:absolute w-full bottom-0  ">
          <Footerfirstpage />
        </div>
      </div>
    </Fragment>
  );
};

export default Firstpage;
