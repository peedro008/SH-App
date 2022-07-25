import { USER_ROLE,
  USER_ID,
  USER_NAME, PACIENTE_ID } from "./actions";

const initialState = {
  userRole: null,
  userId: null,
  userName: null,
  pacienteId: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PACIENTE_ID:
      return {
        ...state,
        pacienteId: action.payload,
      };
    case USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
}
