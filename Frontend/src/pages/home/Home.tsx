import { Fragment } from "react/jsx-runtime";
import Headerhome from "../../components/headerhome/Headerhome";


const Home: React.FC<{}> = () => {
  return (
    <Fragment>
    <div className="header">
        <Headerhome />
    </div>
     
    </Fragment>
  );
};

export default Home;
