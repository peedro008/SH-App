import {
  USER_SESSION,
  USER_ID,
  
} from "./actions";

const initialState = {
  
  
  UserRole: null,
  UserId: null,
 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  
    case USER_SESSION:
      return {
        ...state,
        userSession: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        UserId: action.payload,
      };
    
   
    default:
      return state;
  }
}
