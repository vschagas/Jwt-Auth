import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public async loginAuthenticate(req: Request, res: Response) {
    // const { username, password }: IUser = req.body;

    const token = await this.service.login(req.body);

    return res.status(200).json({ token });
  }
}