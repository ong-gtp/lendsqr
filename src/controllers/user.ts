import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import config from '../config/config';
import * as userService from '../services/userService';
import UserPayload from '../domain/requests/UserPayload';

const { messages } = config;

/**
 * Handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function store(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userPayload = req.body as UserPayload;

    const response = await userService.insert(userPayload);

    res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      data: response,
      message: messages.users.insert
    });
  } catch (err) {
    next(err);
  }
}
