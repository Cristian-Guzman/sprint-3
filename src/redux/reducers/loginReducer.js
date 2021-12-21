import { types } from "../types/types";

const initialState = {
    id: '',
    name: '',
    logged: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.name,
                logged: true,
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
};