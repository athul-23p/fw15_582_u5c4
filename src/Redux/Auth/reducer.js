import { LOGIN, LOGOUT } from "./actions"

const authReducer = (state,{type,payload}) => {
    switch(type){
        case LOGIN:
            return {isLoggedIn:true,user:payload};
        case LOGOUT:
            return {isLoggedIn:false,user:false};
    }
}

export default authReducer;