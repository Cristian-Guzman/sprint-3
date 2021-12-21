import { Formik } from 'formik'
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
                    <Formik
                            validate={(valores) => {
                                let errores = {};
                                if (!valores.nombre) {
                                    errores.nombre = 'Por favor ingresa un nombre'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                    errores.nombre = 'El nombre sólo puede contener letras y espacios'
                                }
                                return errores
                            }}
                            initialValues={{
                                nombre: '',
                                email: '',
                                contraseña1: '',
                                contraseña2: ''
                            }}
                            onSubmit={() => {
                                console.log('registro enviado')
                            }}
                        >
                            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="casilla-nombre">Tu nombre</label>
                                    <input name='nombre' type="text" id="casilla-nombre" value={values.nombre} onChange={handleChange} onBlur={handleBlur} />

                                    <label htmlFor="casilla-email">Dirección de correo electrónico</label>
                                    <input name='email' type="email" id="casilla-email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                                    <label htmlFor="casilla-contraseña">Contraseña</label>
                                    <input name='contraseña1' type="password" id="casilla-contraseña" placeholder='Como mínimo 6 carácteres' value={values.contraseña1} onChange={handleChange} onBlur={handleBlur} />

                                    <label htmlFor="casilla-contraseña2">Vuelve a escribir la contraseña</label>
                                    <input name='contraseña2' type="password" id="casilla-contraseña2" placeholder='Como mínimo 6 carácteres' value={values.contraseña2} onChange={handleChange} onBlur={handleBlur} />

                                    <button type='submit'>Continuar</button>
                                </form>
                        )}
                    </Formik>
                    <p>¿Ya tienes una cuenta? <span>Iniciar sesión</span></p>
                    </div>
                </ContenedorIniciarSesion>
            </ContenedorLogin>
        </>
    )
}
