import { Fragment } from 'react';
import s from "./App.module.css";
import Message from './components/message/Message';

function App() {
  return (
    <Fragment>
      <div className={`${s.titre}`}>
      
      </div>
      <Message name="Koto" age={10} arme={["Épée", "Bouclier"]} />
    </Fragment>
  );
}

export default App;
