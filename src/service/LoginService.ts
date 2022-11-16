import { IUser } from '../interfaces/User';
import LoginModel from '../models/LoginModel';
import HttpException from '../shared/http.exception';
import JwtShared from '../shared/jwt';

export default class LoginService {
  private model: LoginModel;

  private jwtShared: JwtShared; 

  constructor() {
    this.model = new LoginModel();
    this.jwtShared = new JwtShared();
  }

  public async login(body: IUser) {
    const user = await this.model.getLoginInfo(body);

    if (!user || user.password !== body.password) { 
      throw new HttpException(401, 'Username or password invalid');
    }

    const token = this.jwtShared.generateJwt(user);

    return token;
  }
}