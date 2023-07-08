import React from 'react'
import Home from './Home'
import About from './About'
import Immerse from './Immerse'
import Directory from './Directory'
import QnA from './QnA'
import Footer from './Footer'




function Parent() {
  return (
    <div>
        <Home/>
        <About/>
        <Immerse/>
        <Directory/>
        <QnA/>
        <Footer/>
    </div>
  )
}

export default Parent
