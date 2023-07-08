import React, { useState } from 'react'
import Parent from './Parent'
import Forms from './Forms'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QnA from './QnA';

function App() {

  return (
      <div>
        {/* <Parent/>
        <Forms/> */}
        <Router>
        <Routes>
          <Route path="form" element={<Forms/>}/>
          <Route path='/' element={<Parent/>}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App
