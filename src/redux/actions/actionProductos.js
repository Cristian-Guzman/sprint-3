import { types } from "../types/types";
import { getDocs, collection } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig'

const getProductos = (products) => {
    return {
        type: types.obtener,
        payload: products,
    };
};

export const getProductosFirebase = (coleccionName) => {
    return async (dispatch) => {
        let docRef = collection(db, coleccionName);
        let getData = await getDocs(docRef);

        const products = [];

        getData.forEach((doc) => {
            //console.log(doc.data());
            products.push(doc.data());
        });

        dispatch(getProductos(products));
    };
};