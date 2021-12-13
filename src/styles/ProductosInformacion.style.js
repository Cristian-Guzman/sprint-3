import styled from "styled-components";

export const TituloInformacionProductosStyle = styled.h1`
    font-size: 1rem;
    margin-left: 2rem;
`

export const ContenedorInformacionProductosStyles = styled.article`
    margin: 0 auto;
    width: 97%;
    max-width: 100rem;
`

export const GrillaInformacionProductosStyles = styled.h1`
    display: flex;
    gap: 1rem;
`

export const GaleriaInformacionProductosStyles = styled.aside`
    width: 5%;
`

export const ImagenesGaleriaInformacionProductosStyles = styled.img`
    width: 100%;
`

export const ImagenInformacionProductosStyles = styled.img`
    width: 35%;
    max-height: 30rem;
    object-fit: contain;
`

export const DetallesContenedorInformacionProductosStyles = styled.div`
    width: 35%;
    h1 {
        font-size: 1.2rem;
        font-weight: 500;
    }
    div {
        display: flex;
        gap: 2rem;
        h2 {
            font-size: 1rem;
            span {
                color: ${props => props.theme.red}
            }   
        }
    }
    h3 {
        font-size: 1rem;
        font-weight: 700;
    }
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.7;
        text-align: justify;
    }
`

export const EnvioContenedorInformacionProductosStyles = styled.aside`
    width: 20%;
    max-height: 20rem;
    font-size: 1rem;
    padding: 1rem;
    h1 {
        color: ${props => props.theme.red};
        margin: .5rem 0;
        font-size: 1rem;
    }
    h2 {
        margin: 0;
        font-size: inherit;
    }
    h3 {
        font-weight: 500;
        font-size: inherit;
        span {
            font-weight: 700;
        }
    }
    p {
        font-size: inherit;
        text-align: justify;
        color: ${props => props.theme.red};
    }
    div {
        display: flex;
        flex-direction: column;
        select {
            width: 80%;
            outline: none;
            border-radius: 7px;
        }
        .btn {
            padding:1rem 1.4rem;
            box-sizing: border-box;
            width: 80%;
            border: none;
            border-radius: 10px;
            margin-top: 1rem;
        }
        .btn-primary {
            background-color: ${props => props.theme.primary};
        }
        .btn-secondary {
            background-color: ${props => props.theme.secondary};
        }
    }
`