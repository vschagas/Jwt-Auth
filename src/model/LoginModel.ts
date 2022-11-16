import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/User';
import connection from './connection';

export default class LoginModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getLoginInfo(body: IUser): Promise<IUser> {
    const { username } = body;

    const [[user]] = await this.connection.execute<(
    IUser & RowDataPacket[])>(
      'SELECT username, password FROM Trybesmith.Users WHERE (username = ?)',
      [username],
      );

    return user as IUser;
  }
}