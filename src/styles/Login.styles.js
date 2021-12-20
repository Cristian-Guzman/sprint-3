import styled from "styled-components";

export const ContenedorLogin = styled.article`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    
    .google-fb {
     display: flex;
     gap: 1rem;
     margin-top: 2rem;
     width: 8%;
     margin-top: 20px;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     height: 50px;
     padding: 5px 0px;

    .fb {
        font-size: 25px;
        background-color: rgb(6, 150, 246);
        color: rgb(255, 255, 255);
        padding: 5px;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 3px;
        cursor: pointer;
    }
    .google {
        height: 2.5rem;
        width: 2.5rem;
        cursor: pointer;
    }
}
    h4 {
        color: rgb(118, 118, 118);
        font-size: 13px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .link-registro {
        width:25%;
    }
`

export const Logo = styled.img`
    /* width: 100%; */
    margin: 1rem 0 1rem 0;
`

export const ContenedorIniciarSesion = styled.section`
    border: 1px #ddd solid;
    width: 25%;
    height: 25%;
    padding: 20px 26px;
    div {
        display: flex;
        flex-direction: column;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0 0 10px 0;
        padding-bottom: 4px;
    }
    p {
        margin: 0 0 4px 0;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        color: #0066c0;
        cursor: pointer;
        &:first-of-type {
            color: #000;
            &:hover {
                cursor: context-menu;
                text-decoration: none;
                color: #000;
            }
        }
        &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #c45500;
        }
    }
    span {
        color: #0066c0;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
            color: #c45500;
        }
    }
    label {
        font-size: 12px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 4px;
    }
    input {
        border: 1px solid #a6a6a6;
        outline: none;
        font-size: 12px;
        background-color: #fff;
        height: 22px;
        padding: 3px 7px;
        border-radius: 4px;
        margin-bottom: 1rem;
        &:focus {
            border: 1px solid #f08804;
            box-shadow: 0 0 5px 1px #f08804;
        }
    }
    button {
        width: 100%;
        background: linear-gradient(rgb(247, 223, 165), rgb(240, 193, 75));
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        border-color:rgb(168, 135, 52) rgb(156, 126, 49) rgb(132, 106, 41);
        padding: 5px 6px;
        color: black;
        margin-bottom: 1rem;
        &:hover {
            background: rgb(240, 196, 87);
        }
        &:focus {
        border: 1px solid #f08804;
        box-shadow: 0 0 5px 1px #f08804;
    }
}
`
export const BotonCrearCuenta = styled.button`
    width: 100%;
    background: linear-gradient(rgb(247, 248, 250), rgb(231, 233, 236));
    box-shadow: rgb(255 255 255 / 60%) 0px 1px 0px inset;
    padding: 4px;
    border-radius: 3px;
    border-color: rgb(173, 177, 184) rgb(162, 166, 172) rgb(141, 144, 150);
    border-style: solid;
    border-width: 1px;
    font-family: Amazonas, Arial, sans-serif;
    font-size: 14px;
    color: rgb(17, 17, 17);
    cursor: pointer;
    &:hover {
        background: rgb(224, 227, 233);
    }
`

export const RegresarInicio = styled.p`
    margin: 1.2rem 0 4px 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    color: #0066c0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #c45500;
    }
`