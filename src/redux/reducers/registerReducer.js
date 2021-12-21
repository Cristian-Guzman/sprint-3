import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registro:
            return {
                ...state
            }    
        default:
            return state
    }
}