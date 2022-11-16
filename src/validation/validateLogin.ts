import { NextFunction, Request, Response } from 'express';
// import Jwt from 'jsonwebtoken';
import HttpException from './http.exception';
import { loginSchema } from './schema';

export default (req:Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  
  if (error) throw new HttpException(400, error.message);

  next();
};