import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Registro } from '../components/Registro'
import { AnotherRoutes } from './AnotherRoutes'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<AnotherRoutes />} />

                <Route path="login" element={<Login />}/>
                <Route path="registro" element={<Registro />}/>
                {/* <Route
                    path="registro"
                    element={
                        <PublicRoutes>
                            <Registro />
                        </PublicRoutes>
                    }
                />

                <Route
                    path="crear-producto"
                    element={
                        <PrivateRoutes>
                            <CreateProduct />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="form-productos"
                    element={
                        <PrivateRoutes>
                            <FormProducts />
                        </PrivateRoutes>
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
