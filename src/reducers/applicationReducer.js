import { HIDE_LOADER, SHOW_LOADER } from "../actions/types";

const intialState  = {
    data: {},
    isLoading : false
}

export default (state=intialState,action) => {

     switch(action.type){
         default: return state;

         case SHOW_LOADER : return {
             ...state,
             isLoading : true
         }

         case HIDE_LOADER : return {
            ...state,
            isLoading : false
        }
     }

}