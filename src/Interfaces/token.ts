export interface UserToken {
  payload: {
    id: number,
    username: string,
    vocation: string, 
    level: number,
    password: string,
  };
  iat: number,
  exp: number
}

export default UserToken;
