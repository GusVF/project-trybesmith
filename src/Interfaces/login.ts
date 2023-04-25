export interface LoginData {
  username: string,
  password: string,
}

export interface LoginUser extends LoginData{
  id: number,
}

export default LoginUser;