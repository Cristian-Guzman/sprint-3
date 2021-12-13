import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';
import { ContenedorBanner, CardBannerImagen, ContenedorBannerTitulo, ImagenBanner, CardImagen, Cards } from '../styles/Home.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductosFirebase } from '../redux/actions/actionProductos';

export const Home = () => {
    const dispatch = useDispatch()
    dispatch(getProductosFirebase())
    let categoriaDatos = [];
    const [banner, setBanner] = useState(undefined)
    useEffect(() => {
        const getDatos = async() => {
            const datos = await getDocs(collection(db, 'Categorias'));
            datos.docs.forEach(element => {
                categoriaDatos.push(element.data());
                /* setBanner({...banner,element.data()}); */
            });
            setBanner(categoriaDatos)
        }
        getDatos()
    }, [])

    return (
        <>
            <ImagenBanner src='https://m.media-amazon.com/images/I/71Ob3nbpDVL._SX3000_.jpg' alt=" " />
          <Cards>
            {
                banner && banner.map(element => { 
                    return element.nombre === "Ofertas y Promociones" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="flex">
                                <CardImagen src={element.imagen} alt=" " />
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                })
            }
            {
                banner ? banner.map(element => { 
                    return element.nombre === "Envío GRATIS a Colombia" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="flex">
                                <CardImagen src={element.imagen} alt=" " />
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                }) : <h1>Cargando...</h1>
            }
            {
                banner && banner.map(element => { 
                    return element.nombre === "Guía de Regalos Festivos" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="grid">
                                <Link to="/productos/electronicos" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="electronicos" src={element.imagen1} alt=" " />
                                </Link>
                                <Link to="/productos/tenis" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Moda" src={element.imagen} alt=" " />
                                </Link>
                                <Link to="/productos/juegosMesa" style={{ textDecoration: "none", color: "black" }}>
                                    <CardImagen title="Juguetes" src={element.imagen2} alt=" " />
                                </Link>
                                <Link to="/productos/belleza" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Belleza" src={element.imagen3} alt=" " />
                                </Link>
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                })
            }
            {
                banner && banner.map(element => { 
                    return element.nombre === "Ofertas épicas diarias" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="flex">
                                <CardImagen src={element.imagen} alt=" " />
                                
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                })
            }
            {
                banner && banner.map(element => { 
                    return element.nombre === "Compra por Categoría" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="grid">
                                <Link to="/productos/monitores" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Computadoras" src={element.imagen} alt=" " />
                                </Link>
                                <Link to="/productos/videojuegos" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Videojuegos" src={element.imagen1} alt=" " />
                                </Link>
                                <Link to="/productos/juguetes" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Bebé" src={element.imagen2} alt=" " />
                                </Link>
                                <Link to="/productos/juegos" style={{ textDecoration: "none", color: "black" }}> 
                                    <CardImagen title="Juguetes y Juegos" src={element.imagen3} alt=" " />
                                </Link>
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                })
            }
            {
                banner && banner.map(element => { 
                    return element.nombre === "AmazonBasics" && (
                        <ContenedorBanner key={uuidv4()}>
                            <ContenedorBannerTitulo>{element.nombre}</ContenedorBannerTitulo>
                            <CardBannerImagen display="flex">
                                <CardImagen src={element.imagen} alt=" " />
                            </CardBannerImagen>
                        </ContenedorBanner>
                    )
                   
                })
            }
          </Cards>
        </>
    )
}
