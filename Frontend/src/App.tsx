import { Fragment } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Firstpage from './pages/firstpage/Firstpage';
import Languageselection from './pages/languageselection/Languageselection';
import Login from './auth/Login';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/selectlanguage" element={<Languageselection />} />
          
        </Routes>
      </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
