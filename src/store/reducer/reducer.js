const initialState = {
    islogin:false,
 }
 const addloginReducer = (state = initialState, action) => { //es6 arrow function
    switch (action.type) {
       case 'ADD_LOGIN_STATUS' :
          return {
             ...state,
             islogin: action.status,
          }
       default:
          return state;
    }
 }
 export default addloginReducer;  