import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { NavBar } from '../components/NavBar'
import { ProductosDetalles } from '../components/ProductosDetalles'

export const AnotherRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} /> 
                <Route path="/" element={<Home/>} />
                <Route path="/productos/:id" element={<ProductosDetalles />} />
            </Routes>
        </>
    )
}


