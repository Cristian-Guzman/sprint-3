import { types } from "../types/types";
import { getDocs, collection } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig'

const getProductos = (productos) => {
    return {
        type: types.obtener,
        payload: productos,
    };
};

export const getProductosFirebase = () => {
    return async (dispatch) => {
        let docRef = collection(db, 'productos');
        let getData = await getDocs(docRef);

        const productos = [];

        getData.forEach((doc) => {
            //console.log(doc.data());
            productos.push(doc.data());
        });

        dispatch(getProductos(productos));
    };
};