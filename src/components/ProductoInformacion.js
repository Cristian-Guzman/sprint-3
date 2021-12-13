import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductoInformacion = () => {
    const id = useParams();
    console.log(id)
    return (
        <>
            <h1>Información Producto</h1>   
        </>
    )
}
