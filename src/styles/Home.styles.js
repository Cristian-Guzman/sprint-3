import styled from "styled-components";

export const ImagenBanner = styled.img`
 width: 100%;   
`
export const Cards = styled.article`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    top: -10rem;
    gap: 2rem;
    margin: 0 auto;
`

export const ContenedorBanner = styled.div`
    padding: 2rem 1rem;
    width: 300px;    
    background-color: ${props => props.theme.white};
`

export const ContenedorBannerTitulo = styled.h1`
    font-size: 1rem;
`

export const CardBannerImagen = styled.div`
    display: ${props => props.display};
    flex-wrap: wrap;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
`
export const CardImagen = styled.img`
    width: 100%;
`

// export const 