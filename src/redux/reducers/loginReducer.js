
export const loginReducer = (state = {}, action) => {
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