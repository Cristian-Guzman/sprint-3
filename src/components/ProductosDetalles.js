import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductosFirebase } from '../redux/actions/actionProductos';
import { ImagenBanner } from '../styles/Home.styles';
import { ContenedorCardProducto, ContenedorProductos, DetallesCardProducto, EstadoCardProducto, ImagenCardProducto, PrecioCardProducto, ProductosDetallesStyles, TituloCardProducto } from '../styles/ProductosDetalles.styles';

export const ProductosDetalles = () => {
    const [productosInfo, setProductosInfo] = useState()
    const dispatch = useDispatch();
    const {id} = useParams();
    const productos = useSelector(state => state.products.productos);
    if (productos.length === 0) {
        dispatch(getProductosFirebase());
    }
    useEffect(() => {
        setProductosInfo(productos.filter(element => element.seccion === id))
        console.log(productosInfo)
    }, [productos])
    return (
        <>
            <ImagenBanner src="https://m.media-amazon.com/images/I/61uIjme4x8L._SX3000_.jpg" />
            <ContenedorProductos>
                <ProductosDetallesStyles>Lista de productos</ProductosDetallesStyles>
                {
                    productosInfo ? productosInfo.map(element => {
                        console.log(element)
                        return(
                            <>
                                <ContenedorCardProducto>
                                    <ImagenCardProducto src={element.imagen} />
                                    <DetallesCardProducto>
                                        <TituloCardProducto>{element.nombre}</TituloCardProducto>
                                        <PrecioCardProducto>US${element.precio.toFixed(2)}</PrecioCardProducto>
                                        <EstadoCardProducto>Envío GRATIS</EstadoCardProducto>
                                    </DetallesCardProducto>
                                </ContenedorCardProducto>
                            </>
                        )
                    }) : <h1>Cargando...</h1>
                }
            </ContenedorProductos>
        </>
    )
}
