
export const USER_ID = "USER";
export const USER_SESSION = "USER_SESSION";




export function userSession(userSession) {
  return {
    type: USER_SESSION,
    payload: userSession,
  };
}


export function userId(UserId) {
  return {
    type: USER_ID,
    payload: UserId,
  };
}
