import styled from "styled-components";

export const ContenedorProductos = styled.article`
    position: relative;
    bottom: 50vh;
    margin: 0 auto;
    width: 95%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const ProductosDetallesStyles = styled.h1`
    font-size: 2rem;
    text-align:center;
    padding: 3rem;
    border-bottom: 3px solid rgb(221, 221, 221);
`

export const ContenedorCardProducto = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: .5rem 0;
    border-bottom: 3px solid rgb(221, 221, 221);
    color: black;
`

export const ImagenCardProducto = styled.img`
    width: 100%;
`
export const ContenedorImagenCard = styled.div`
    width: 20%;
`

export const DetallesCardProducto = styled.div`
    width: 80%;
`

export const TituloCardProducto = styled.h3`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const PrecioCardProducto = styled.p`
    font-weight: 600;
`

export const EstadoCardProducto = styled.p`
    font-weight: 600;
    font-size: .9rem;
`