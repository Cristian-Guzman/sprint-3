import { getAuth, signInWithPopup } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"
import { types } from "../types/types"


export const login = (id, name, log) => {
    return {
        type: types.login,
        payload: {
            id,
            name,
            log
        }
    }
}

export const loginGoogle = () => {
    return(dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user}) => {
            if (user.uid) {
                dispatch(login(user.uid, user.displayName, true))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(
                    login(user.displayName, user.email, true)
                );
            })
            .catch((error) => console.log(error));
    };
};