import { Fragment } from 'react';
import s from "./App.module.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Firstpage from './pages/firstpage/Firstpage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          
        </Routes>
      </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
