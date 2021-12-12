import React, { useState } from 'react'
import { AddressStyle, BarraBusquedaStyle, ContenedorCarrito, ContenedorCuenta, ContenedorImg, ContenedorTodoStyle, ImgMore, LogoAmazonas, NavBarBasicStyle, NavBarMoreStyle, TextMore } from '../styles/NavBar.style'

export const NavBar = () => {
    const [search, setSearch] = useState('')
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        console.log(search)
    }
    const handleClickSearch = (e) => {
        console.log(e)
    }
    return (
        <>
            <NavBarBasicStyle>
                <LogoAmazonas src={'https://res.cloudinary.com/workshop-principe/image/upload/v1639205447/Amazon%20Icons/menu_jcml3u.png'} />
                <AddressStyle>
                        <h1>Hola</h1>
                    <div>
                        <img src="https://res.cloudinary.com/workshop-principe/image/upload/v1639244996/Amazon%20Icons/ubicacion_jacm9m.png" alt="ubicacion logo" />
                        <h1>Elige tu dirección</h1>
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
                    <p>Cuenta</p>
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
                <TextMore>Tarjetas de regalo</TextMore>
                <TextMore>Prime</TextMore>
                <TextMore>Los Más Vendidos</TextMore>
                <TextMore>AmazonBasics</TextMore>
                <TextMore>Cómputo y Tabletas</TextMore>
                <TextMore>Los Más Regalados</TextMore>
            </NavBarMoreStyle>
        </>
    )
}
