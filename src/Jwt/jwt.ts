import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';
import HttpException from '../validation/http.exception';

export default class JwtShared {
  private jwt;

  constructor() {
    this.jwt = jwt;
  }

  generateJwt({ email, password, id }: IUser) {
    const SECRET = process.env.JWT_SECRET as string;

    const token = this.jwt.sign({ email, password, id }, SECRET, {
      expiresIn: "1d",
      algorithm: "HS256"
    });

    return token;
  }

  verifyToken(token: string): string | jwt.JwtPayload {
    try {
      const decoded = this.jwt.verify(token, process.env.JWT_SECRET as string);
      return decoded;
    } catch (error) {
      throw new HttpException(401, 'Invalid token');
    }
  }
}