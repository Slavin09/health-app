import React, { useState } from 'react'
import Parent from './Parent'
import Forms from './Forms'
import UserData from './UserData'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
      <div>
        {/* <Parent/>
        <Forms/> */}
        <Router>
        <Routes>
          <Route path="form" element={<UserData/>}/>
          <Route path='/' element={<Parent/>}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App