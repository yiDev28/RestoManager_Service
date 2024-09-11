import { getErrorMessage } from "../../helpers/errorHandler";
import { ApiResponse } from "../../interfaces/response.interface";
import UserModel from "./user.model";
import { IUserService } from "./user.service.interface";
import bcrypt from "bcrypt";

export class UserService implements IUserService {
  async createUser(userData: UserModel): Promise<ApiResponse<UserModel>> {
    const userDb = await UserModel.findOne({
      where: {
        clientId: userData.clientId,
        identityNumber: userData.identityNumber,
      },
    });
    if (userDb) {
      return {
        code: 40910,
        msg: getErrorMessage(40910)
      };
    }
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 12);
      userData.password = hashedPassword;
      var _r = await UserModel.create({...userData});
      return {
        code: 20110,
        msg: getErrorMessage(20110),
        object: userData,
      };
    } catch (error) {
      console.error(error)
      return {
        code: 50010,
        msg: getErrorMessage(50010),
      };
    }
  }
}

