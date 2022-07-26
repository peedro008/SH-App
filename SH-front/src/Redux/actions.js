
export const USER_SESSION = "USER_SESSION";



export function userSession(userSession) {
  return {
    type: USER_SESSION,
    payload: userSession,
  };
}
