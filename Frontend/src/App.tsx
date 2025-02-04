import { Fragment } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Firstpage from './pages/firstpage/Firstpage';
import Languageselection from './pages/languageselection/Languageselection';
import Login from './auth/Login';
import Register from './auth/Register';
import Help from './pages/help/Help';
import Home from './pages/home/Home';
import Profil from './pages/profil/Profil';
import Message from './pages/message/Message';
import Levelpage from './pages/levelpage/Levelpage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/selectlanguage" element={<Languageselection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/levelpage" element={<Levelpage />} />
          
        </Routes>
      </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
