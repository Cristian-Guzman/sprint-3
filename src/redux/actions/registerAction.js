import { types } from "../types/types"

export const register = (email, password, name) => {
    return {
        type: types.registro,
        payload: {
            email, password, name
        }
    }
}