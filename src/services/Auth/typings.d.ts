declare module Login {
  export interface User {
    username: string;
    password: string;
  }

  export interface Auth {
    user: User;
    accessTokens: string;
  }
}
