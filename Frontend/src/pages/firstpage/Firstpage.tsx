import { Fragment } from "react/jsx-runtime"
import Headerfirstpage from "../../components/headerfirstpage/Headerfirstpage"
import Herofirstpage from "../../components/herofirstpage/Herofirstpage"

const Firstpage : React.FC<{}> = () => {
    return (
        <Fragment>
            <div className="header">
                <Headerfirstpage />
            </div>
            <main>
                <Herofirstpage/>
            </main>

        </Fragment>
    )
}

export default Firstpage