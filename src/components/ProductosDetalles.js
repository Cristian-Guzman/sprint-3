import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getProductosFirebase } from '../redux/actions/actionProductos';
import { ImagenBanner } from '../styles/Home.styles';
import { v4 as uuidv4 } from 'uuid';
import { ContenedorCardProducto, ContenedorImagenCard, ContenedorProductos, DetallesCardProducto, EstadoCardProducto, ImagenCardProducto, PrecioCardProducto, ProductosDetallesStyles, TituloCardProducto } from '../styles/ProductosDetalles.styles';

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
        console.log(productos)
    }, [productos])
    useEffect(() => {
        setProductosInfo(productos.filter(element => element.seccion === id))
    }, [id])
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
                                <div key={uuidv4()}>
                                <Link to={`/productos/${id}/${element.nombre}` }>
                                    <ContenedorCardProducto key={uuidv4()}>
                                            <ContenedorImagenCard>
                                                <ImagenCardProducto src={element.imagen} alt={element.nombre} />
                                            </ContenedorImagenCard>
                                            <DetallesCardProducto>
                                                <TituloCardProducto>{element.nombre}</TituloCardProducto>
                                                <PrecioCardProducto>US${Number(element.precio).toFixed(2)}</PrecioCardProducto>
                                                <EstadoCardProducto>Envío GRATIS</EstadoCardProducto>
                                            </DetallesCardProducto>
                                    </ContenedorCardProducto>
                                </Link>
                            </div>
                            </>
                        )
                    }) : <h1>Cargando...</h1>
                }
            </ContenedorProductos>
        </>
    )
}
