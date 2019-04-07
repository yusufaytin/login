import {LOGIN} from "../constants";

const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            // console.log("LOG", state)
            return {type: action.type, user:action.user};
        // case INFO:
        //     return {type: action.type}
        default:
            return state;
    }
};

export default loginReducers;