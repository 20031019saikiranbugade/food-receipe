import React from 'react'
import LoginComp from './components/LoginComp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/MainPages/Home';
import AuthComp from './components/AuthPages/AuthComp';
import AuthComp2 from './components/AuthPages2/AuthComp2';
import Receipes from './components/ReceipeDetails/Receipes';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/login" element={<LoginComp />}/>
          <Route path="/receipe/:id" element={<Receipes />}/>
          <Route path="/auth">
            <Route path='home' element={<AuthComp />}/>
            <Route path='addproduct' element={<AuthComp2 />}/>
          </Route>
          <Route path="*" element={<h2>Page Not found</h2>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App