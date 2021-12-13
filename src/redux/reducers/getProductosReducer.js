import { types } from "../types/types";

const initialState = {
    productos: [],
};

export const reducerProductos = (state = initialState, action) => {
    switch (action.type) {
        case types.obtener:
            return {
                productos: action.payload,
            };

        default:
            return state;
    }
};