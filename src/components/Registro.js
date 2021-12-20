import React from 'react'
import { Link } from 'react-router-dom'
import { ContenedorIniciarSesion, ContenedorLogin, Logo } from '../styles/Login.styles'

export const Registro = () => {
    return (
        <>
            <ContenedorLogin>
                <Link to="/">
                    <Logo src='https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png' />
                </Link>
                <ContenedorIniciarSesion>
                    <div>
                        <h1>Crear cuenta</h1>
                        <form >
                            <label htmlFor="casilla-nombre">Tu nombre</label>
                            <input type="text" id="casilla-nombre" />
                            <label htmlFor="casilla-email">Dirección de correo electrónico</label>
                            <input type="text" id="casilla-email" />
                            <label htmlFor="casilla-contraseña">Contraseña</label>
                            <input type="text" id="casilla-contraseña" placeholder='Como mínimo 6 carácteres'/>
                            <label htmlFor="casilla-contraseña2">Vuelve a escribir la contraseña</label>
                            <input type="text" id="casilla-contraseña2" placeholder='Como mínimo 6 carácteres'/>
                            <button>Continuar</button>
                        </form>
                        <p>¿Ya tienes una cuenta? <span>Iniciar sesión</span></p>
                    </div>
                </ContenedorIniciarSesion>
            </ContenedorLogin>
        </>
    )
}
