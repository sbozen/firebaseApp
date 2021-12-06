import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './User/home.js';
import SignUp from './User/signUp.js';
import SignIn from './User/signIn.js';
import Header from './User/header/header';

import './style.css';

const App = () => {
  return (

    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>

      </div>

    </Router >

  );
};
export default App;