export interface IUser {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    roles: string[];
    avatar: string;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IRegisterData {
    email: string;
    username: string;
    password: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterResponse {
    status: string;
    message: string;
  }

  export interface ILoginResponse {
    access_token: string;
  
  }