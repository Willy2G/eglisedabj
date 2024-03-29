import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage';

const Routers = () => {
  return (
    <Routes>
        <Route exact  path='/' element={ <Navigate to='/home' /> } />
        <Route exact  path='' element={ <Navigate to='/home' /> } />
        <Route path='/home' element={ <HomePage /> } />
    </Routes>
  )
}

export default Routers;