import styled from 'styled-components'

/* Sección del navBar alta */
export const NavBarBasicStyle = styled.article`
    background-color: ${props => props.theme.blue1};
    max-width: 100%;
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: row;
`

export const LogoAmazonas = styled.img`
    width: 150px;
    height: 100%;
    &:hover {
        border: 1px solid white;
    }
    `

export const AddressStyle = styled.div`
    display:flex;
    flex-direction: column;
    height: 50px;
    color: #fff;
    h1 {
        margin: .2rem 0 0 2rem;
        font-size: 0.8rem
    }
    div {
        display: flex;
        width: auto;
        align-items: center;
        gap: .3rem;
        img {
            height: 30px;
        }
        h1 {
            margin: 0;
            font-size: 0.8rem
        }
    }
    &:hover {
        border: 1px solid white;
    }
`
export const BarraBusquedaStyle = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    margin-left: 1rem;
    select {
        height: 36px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        margin: 0px;
        outline: 0;
        border-radius: 4px 0px 0px 4px;
        font-weight: 400;
        box-sizing: border-box;
        padding: 6px 10px;
        width: 200px;
    }
    input {
        height: 32px;
        width: 28rem;
        font-size: 14px;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-left-width: 0px;
        padding-left: 10px;
        outline: 0;
        margin: 0 -1px;
    }

`

export const ContenedorImg = styled.div`
    background-color: ${props => props.theme.secondary};
    width: 30px;
    box-sizing: border-box;
    padding: 6px;
    margin-left: -1px;
    cursor: pointer;
    img {
        width: 100%;
    }
`

export const ContenedorCuenta = styled.div`
    height: inherit;
    color: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    padding-bottom: 15px;
    width: 200px;
    box-sizing: border-box;
    padding: 10px;
    h2 {
        margin: 12px 0px 0px;
        font-size: 12px;
    }
    p {
        margin: 0 0 2px;
        font-size: 14px;
        cursor: pointer;
    }
    &:hover {
        border: 1px solid #fff;
    }
`

export const ContenedorCarrito = styled.div`
    cursor: pointer;
    border-radius: 2px;
    color: white;
    display:flex;
    flex-direction: row;
    width: 100px;
    padding: 10px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 38px;
        h1 {
            font-size: 14px;
            margin-top: 20px;
        }
    }
    &:hover {
        border: 1px solid #fff;
    }
`

/* Sección del navBar baja */
export const NavBarMoreStyle = styled.article`
    background-color: ${props => props.theme.blue2};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
`

export const TextMore = styled.h3`
    color: ${props => props.theme.white};
    font-size: 0.8rem;
    margin 4px 0;
    
    gap: .4rem;
    padding: .3rem;
    &:hover {
        border: 1px solid white;
    }
`
export const ImgMore = styled.img`
    width: 30px;
    height: 100%;
    margin-left: 1rem;
    color: ${props => props.theme.white};
`

export const ContenedorTodoStyle = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    h3 {
        margin: 0.4rem 0;
        &:hover {
        border: 0;
    }
    }
    img {
        margin: 0
    }
    &:hover {
        border: 1px solid white;
    }
`