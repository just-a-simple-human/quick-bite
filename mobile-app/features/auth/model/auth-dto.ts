export interface IRegisterDto {
  email: string;
  username: string;
  password: string;
}

export interface ILoginDto {
  email: string;
  password: string;
}

export interface IResetPasswordDto {
  newPassword: string;
  reset_token: string;
}

export interface IAuthResponse {
  email: string;
  auth_token: string;
}
