import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import About from './Pages/About'
import { Route,Routes,Link } from 'react-router-dom'
import Error from './Pages/404'

const MainRouter = () => {
  return (
    <div>
      <ul >
        <li >
        <Link to="/">Home </Link>
        </li>
        <li>
        <Link to="about">About </Link>
        </li>
        <li>
        <Link to="contact">Contact </Link>
        </li>
     
      </ul>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='services' element={<Services/>} />
            <Route path='*' element={<Error/>} />
            

        </Routes>
    </div>
  )
}

export default MainRouter