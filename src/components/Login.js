import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginFacebook, loginGoogle } from '../redux/actions/actionLogin'
import { BotonCrearCuenta, ContenedorIniciarSesion, ContenedorLogin, Logo, RegresarInicio } from '../styles/Login.styles'

export const Login = () => {
    const [VerMas, setVerMas] = useState(false)
    const dispatch = useDispatch()

    const state = useSelector(state => state.login)
    if(state.logged) {
        window.location.replace('/home')   
    }
    return (
        <>
            <ContenedorLogin>
                <Link to="/">
                    <Logo src='https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png' />
                </Link>
                <ContenedorIniciarSesion>
                    <div>
                        <h1>Iniciar sesión</h1>
                        <form >
                            <label htmlFor="casilla-email">Dirección de correo electrónico</label>
                            <input type="text" id="casilla-email"/>
                            <label htmlFor="casilla-contraseña">Contraseña</label>
                            <input type="text" id="casilla-contraseña"/>
                            <button>Continuar</button>
                        </form>
                        <p>Al continuar, aceptas las <span>Condiciones de uso</span> y el <span>Aviso de privacidad</span> de Amazon.</p>
                        <p onClick={() => setVerMas(!VerMas)}>¿Necesitas ayuda?</p>
                        {
                            VerMas && (
                            <>
                                <p>¿Olvidaste tu constraseña</p>
                                <p>Otros problemas con el inicio de sesión</p>
                            </>
                            )
                        }
                    </div>
                </ContenedorIniciarSesion>
                <div className="google-fb">
                    <svg onClick={() => dispatch(loginFacebook())} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10 fb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    <img onClick={() => dispatch(loginGoogle())} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" className="google"></img>
                </div>
                <h4>¿Eres nuevo en Amazon?</h4>
                <Link to="/registro" className='link-registro'>
                    <BotonCrearCuenta>Crea tu cuenta de Amazon</BotonCrearCuenta>
                </Link>
                <RegresarInicio>Regresar al inicio</RegresarInicio>
            </ContenedorLogin>
        </>
    )
}
