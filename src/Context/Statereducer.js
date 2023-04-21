export const initialzevalue ={
    
    newarr:[],
    isLoggedin : JSON.parse(localStorage.getItem("Login")) || false,
    
}


export const stateReducer=(state, action)=>{
    console.log("state",state, "action", action);
    switch(action.type){

        case "UPDATE_FORM":
            return{
                ...state,
                newarr: action.payload,
            }

        case "LOGIN":
            return{
                ...state,
                isLoggedin: action.payload,
            }

            case "LOGOUT":
                return{
                    ...state,
                    isLoggedin: action.payload,
                }
        default:
            return state
    }
}