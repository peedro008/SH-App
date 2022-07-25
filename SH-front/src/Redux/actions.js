
export const USER_ID = "USER";
export const USER_ROLE = "USER_ROLE";
export const USER_NAME = "USER_NAME";
export const PACIENTE_ID = "PACIENTE_ID";


export function PacienteId(PacienteId) {
  return {
    type: PACIENTE_ID,
    payload: PacienteId,
  };
}
export function userRole(userRole) {
  return {
    type: USER_ROLE,
    payload: userRole,
  };
}


export function userName(userName) {
  return {
    type: USER_NAME,
    payload: userName,
  };
}
export function userId(userId) {
  return {
    type: USER_ID,
    payload: userId,
  };
}
