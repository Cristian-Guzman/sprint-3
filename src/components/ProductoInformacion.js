import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductosFirebase } from '../redux/actions/actionProductos';
import { v4 as uuidv4 } from 'uuid';
import { ContenedorInformacionProductosStyles, DetallesContenedorInformacionProductosStyles, EnvioContenedorInformacionProductosStyles, GaleriaInformacionProductosStyles, GrillaInformacionProductosStyles, ImagenesGaleriaInformacionProductosStyles, ImagenInformacionProductosStyles, TituloInformacionProductosStyle } from '../styles/ProductosInformacion.style';

export const ProductoInformacion = () => {
    const parametros = useParams();
    const productos = useSelector(state => state.products.productos);
    const [productosInfo, setProductosInfo] = useState()
    let img
    const [Imagen, setImagen] = useState(' ')
    const dispatch = useDispatch();
    useEffect(() => {
        let productoNombre = productos.find(element => element.nombre === parametros.nombre)
        setImagen(productoNombre.imagen)
    }, [])
    
    if (productos.length === 0) {
        dispatch(getProductosFirebase());
    }

    useEffect(() => {
        setProductosInfo(productos.filter(element => element.seccion === parametros.id))
    }, [productos])

    const createImageName = (element) => {
        img = element;
        console.log(element)
    }
    // const createImageName = useMemo(element) => {
    //     img = element;
    //     setImagen(img)
    //     console.log(Imagen)
    // }
    
    useEffect(() => {
    // const createImageName = useCallback((element) => e => setImagen(e), [img]);
    console.log(Imagen)
    }, [img])
    // useEffect(() => {
    //     ;
    // }, [])

    return (
        <>
            <TituloInformacionProductosStyle>{parametros.id}</TituloInformacionProductosStyle>
            {
                productosInfo && productosInfo.map(({entrega, seccion, precio, imagen, imagen1, imagen2, imagen3, sobre, nombre}) => {
                    return parametros.nombre === nombre && (
                        <ContenedorInformacionProductosStyles key={uuidv4()}>
                            <GrillaInformacionProductosStyles>
                                <GaleriaInformacionProductosStyles>
                                    <ImagenesGaleriaInformacionProductosStyles onMouseOver={() => setImagen(imagen)} src={imagen}  alt={nombre}/>
                                    <ImagenesGaleriaInformacionProductosStyles onMouseOver={() => setImagen(imagen1)} src={imagen1}  alt={nombre}/>
                                    <ImagenesGaleriaInformacionProductosStyles onMouseOver={() => setImagen(imagen2)} src={imagen2}  alt={nombre}/>
                                    <ImagenesGaleriaInformacionProductosStyles onMouseOver={() => setImagen(imagen3)} src={imagen3}  alt={nombre}/>
                                </GaleriaInformacionProductosStyles> {/* contenedor 1 */}
                                <ImagenInformacionProductosStyles src={Imagen}  alt={nombre}/> {/* contenedor 2 */}
                                <DetallesContenedorInformacionProductosStyles>
                                    <h1>{parametros.nombre}</h1>
                                    <div>
                                        <h2>Precio: <span>${Number(precio).toFixed(2)}</span></h2>
                                        <h2>Envío GRATIS</h2>
                                    </div>
                                    <h3>Acerca de este artículo</h3>
                                    <p>{sobre}</p>
                                </DetallesContenedorInformacionProductosStyles> {/* contenedor 3 */}
                                <EnvioContenedorInformacionProductosStyles>
                                    <h1>${Number(precio).toFixed(2)}</h1>
                                    <h2>Envío GRATIS.</h2>
                                    <h3>Llega: <span>{entrega}</span></h3>
                                    <p>Puede que lo recibas después de Navidad.</p>
                                    <div>
                                        <select name="cantidad" >
                                            <option value="1">Cantidad: 1</option>
                                            <option value="2">Cantidad: 2</option>
                                            <option value="3">Cantidad: 3</option>
                                            <option value="4">Cantidad: 4</option>
                                            <option value="5">Cantidad: 5</option>
                                            <option value="6">Cantidad: 6</option>
                                            <option value="7">Cantidad: 7</option>
                                        </select>
                                        <button className='btn btn-primary'>Agregar al Carrito</button>
                                        <button className='btn btn-secondary'>Comprar ahora</button>
                                    </div>
                                </EnvioContenedorInformacionProductosStyles>{/* contenedor 4 */}
                            </GrillaInformacionProductosStyles>
                        </ContenedorInformacionProductosStyles>
                    )
                })
            }
            {
                
            }
        </>
    )
}
