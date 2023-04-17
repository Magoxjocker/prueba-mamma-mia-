import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Information from '../../pages/Information'
import Cart from '../../pages/Cart'


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/pizza/:id' element={<Information />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default AppRouter

//1.32.43//