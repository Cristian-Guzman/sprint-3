import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AddressStyle, BarraBusquedaStyle, ContenedorCarrito, ContenedorCuenta, ContenedorImg, ContenedorTodoStyle, ImgMore, LogoAmazonas, NavBarBasicStyle, NavBarMoreStyle, TextMore } from '../styles/NavBar.style'

export const NavBar = () => {
    const [search, setSearch] = useState('')
    const [ubicacion, setUbicacion] = useState("");
    const [ubicacion2, setUbicacion2] = useState("");
    useEffect(() => {
        if (localStorage.getItem('pais')) {
            setUbicacion(localStorage.getItem('pais'))
        }
    }, [])
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        console.log(search)
    }
    const handleClickSearch = (e) => {
        console.log(e)
    }
    const handleAddres = () => {
        console.log(navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI`
            const getUbicacion = async() => {
                const data = await fetch(url);
                const { results } = await data.json();
                setUbicacion(results[9].formatted_address);
                setUbicacion2(results[0].formatted_address);
                localStorage.setItem("pais", results[9].formatted_address);
                localStorage.setItem("direccion", results[0].formatted_address);
            }
            getUbicacion()
        }))
    }
    return (
        <>
            <NavBarBasicStyle>
                <Link to="/"><LogoAmazonas src={'https://res.cloudinary.com/workshop-principe/image/upload/v1639205447/Amazon%20Icons/menu_jcml3u.png'} /></Link>
                <AddressStyle>
                        <h1>Hola</h1>
                    <div>
                        <img src="https://res.cloudinary.com/workshop-principe/image/upload/v1639244996/Amazon%20Icons/ubicacion_jacm9m.png" alt="ubicacion logo" />
                        {ubicacion ? <h1>{ubicacion}</h1> :
                            <h1 style={{cursor: "pointer"}} onClick={() => handleAddres()}>Elige tu dirección</h1>}
                    </div>
                </AddressStyle>
                <BarraBusquedaStyle>
                    <select name="departamentos" id="">
                        <option value="false">Todos los departamentos</option>
                        <option value="Publico">Publico</option>
                        <option value="Privado">Privado</option>
                    </select>
                    <form onSubmit={handleSubmitSearch}>
                        <input type="text" onChange={({target}) => setSearch(target.value)} value={search}/>
                    </form>
                    <ContenedorImg onClick={() => handleClickSearch(search)}>
                        <img src="https://res.cloudinary.com/workshop-principe/image/upload/v1639263496/Amazon%20Icons/search_b6brg0.png" alt="" />
                    </ContenedorImg>
                </BarraBusquedaStyle>
                <ContenedorCuenta>
                    <h2>Hola, identificate</h2>
                    <Link to="/login"><p>Cuenta</p></Link>
                </ContenedorCuenta>
                <ContenedorCarrito>
                    <img src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638148907/Im%C3%A1genes%20Amazonas/shopping-cart_tc2egg.png" alt=" " />
                    <div>
                        <h1>Carrito</h1>
                    </div>
                </ContenedorCarrito>
            </NavBarBasicStyle>
            <NavBarMoreStyle>
                <ContenedorTodoStyle>
                    <ImgMore src={'https://res.cloudinary.com/workshop-principe/image/upload/v1639244767/Amazon%20Icons/menu_cmvrtw.png'} alt="menu logo" />
                    <TextMore>Todo</TextMore>
                </ContenedorTodoStyle>
                <Link to="/productos/electronicos"><TextMore>Electrónicos</TextMore></Link>
                <Link to="/productos/tenis"><TextMore>Moda</TextMore></Link>
                <Link to="/productos/juguetes"><TextMore>Juguetes</TextMore></Link>
                <Link to="/productos/belleza"><TextMore>Belleza</TextMore></Link>
                <Link to="/productos/monitores"><TextMore>Monitores</TextMore></Link>
                <Link to="/productos/videojuegos"><TextMore>videojuegos</TextMore></Link>
                <Link to="/productos/juegos"><TextMore>Juegos para niños</TextMore></Link>
            </NavBarMoreStyle>
        </>
    )
}
