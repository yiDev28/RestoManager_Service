import { Request, Response } from "express";
import UserModel from "./user.model";
import { UserService } from "./user.service";

const _userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
    const userData : UserModel = req.body;
    const user = await _userService.createUser(userData);
 
    return res.json(user);
};


