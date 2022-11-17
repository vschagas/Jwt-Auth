import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/User';
import connection from './connection';

export default class LoginModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getLoginInfo(body: IUser): Promise<IUser> {
    const { email } = body;

    const [[user]] = await this.connection.execute<(
    IUser & RowDataPacket[])>(
      'SELECT email, password FROM Trybesmith.Users WHERE (email = ?)',
      [email],
      );
      
    return user as IUser;
  }
}