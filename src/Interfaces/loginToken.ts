export interface LoginToken {
  payload: {
    username: string,
    password: string
  };
  iat: number,
  exp: number
}

export default LoginToken;