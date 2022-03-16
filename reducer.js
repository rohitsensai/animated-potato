import { act } from "react-dom/test-utils";

export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    // token:
    // "BQCXhuWyE3hApEtNlzSLLHbSw_8qm9lN0QlYz0V5VXyK6tD4SZ6QhvLLB4iWzu2eaDR9vc1XqzvWed3eG3aSHt-WGL0AyJ2jxOH85F1Ofq8R7w6C4UbMMyL4F9D4H8qxk9cCz8BooEVmX9s6xGbuN4EEEO6OiOL476vhStRi_VdPQagxWQkD",
};

const reducer=(state,action)=>{
console.log(action);

//Action->type,[payload]
 switch(action.type){
     case "SET_USER":
         return {
             ...state,
             user:action.user
         }
         case "SET_TOKEN":
             return{
                 ...state,
                 token:action.token
             }
         case "SET_PLAYLISTS":
             return{
                 ...state,
                 playlists:action.playlists,
             }; 
             case "SET_DISCOVER_WEEKLY":
                 return{
                     ...state,
                     discover_weekly:action.discover_weekly,
                 };
         default:
             return state;
 }
};

export default reducer;