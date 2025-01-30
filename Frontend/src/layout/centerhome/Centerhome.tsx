import { Fragment } from "react/jsx-runtime";
import Chapitrecenterhome from "../../components/chapitrecenterhome/Chapitrecenterhome";
import Cerclebuttonlevel from "../../components/cerclebuttonlevel/Cerclebuttonlevel";
const Centerhome: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className=" w-full bigboxcenter flex  flex-col">
        <div className="chapitre ">
          <Chapitrecenterhome />
        </div>
        <div className="level">
          <Cerclebuttonlevel />
        </div>
      </div>
    </Fragment>
  );
};

export default Centerhome;
