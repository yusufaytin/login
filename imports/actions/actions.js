import {LOGIN, INFO} from "../constants";

export const login = (user) =>({type: LOGIN, user: user});
// export const info = (user) =>({type: INFO, user:user})