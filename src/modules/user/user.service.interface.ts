import { ApiResponse } from "../../interfaces/response.interface";
import UserModel from "./user.model";

export interface IUserService {
  
  createUser(userData: UserModel): Promise<ApiResponse<UserModel>>;
  
}
