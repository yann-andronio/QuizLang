import { Fragment } from "react/jsx-runtime"
import Headerfirstpage from "../../components/headerfirstpage/Headerfirstpage"

const Firstpage : React.FC<{}> = () => {
    return (
        <Fragment>
            <div className="header">
                <Headerfirstpage />
            </div>

        </Fragment>
    )
}

export default Firstpage