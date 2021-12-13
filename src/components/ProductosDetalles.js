import React from 'react'
import { useParams } from 'react-router-dom'
import { ImagenBanner } from '../styles/Home.styles';

export const ProductosDetalles = () => {
    const {id} = useParams();
    return (
        <>
            <ImagenBanner src="https://m.media-amazon.com/images/I/61uIjme4x8L._SX3000_.jpg" />
            <ProductosDetalles>Lista de productos</ProductosDetalles>
            <h1>{id}</h1>
        </>
    )
}
