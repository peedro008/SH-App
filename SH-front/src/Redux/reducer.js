import { USER_SESSION } from "./actions";

const initialState ={
  userSession: {
  userRole: null,
  userId: null,
  userName: null,
  pacienteId: null
}};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_SESSION:
      return {
        ...state,
        userSession: action.payload,
      };
   

    default:
      return state;
  }
}
