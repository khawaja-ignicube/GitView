import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Repository from './components/Repository';
import Branch from './components/Branch';
import Commit from './components/Commit';
import Comment from './components/Comment';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/repository' element={<Repository />}/>
        <Route path='/branch' element={<Branch />} />
        <Route path='/commit' element={<Commit />} />
        <Route path='/comment' element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
