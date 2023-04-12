import { ADD_FAV } from "./action-types";
import { REMOVE_FAV } from "./action-types";

const initialState={
    myFavorites: []
}

const reducer= (state= initialState, action)=>{
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload]}
        
        case REMOVE_FAV:
            return{...state, myFavorites: state.myFavorites.filter(favorite=> favorite.id !== action.payload)}
        
        default:
            return{...state}
    }
}

export default reducer;