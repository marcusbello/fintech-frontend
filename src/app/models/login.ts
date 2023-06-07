

export class Login {
  constructor(
    public email: string,
    public password: string
  ) {
  }
}


export class LoginResp {
  constructor(
    public accessToken: string
  ) {
  }
}
