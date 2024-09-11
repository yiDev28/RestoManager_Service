import CustomerModel from "../modules/customer/customer.model";
import FoodItemModel from "../modules/menu/food_item/food_item.model";
import IngredientModel from "../modules/menu/ingredient/ingredient.model";
import MenuModel from "../modules/menu/menu.model";
import MenuItemModel from "../modules/menu/menu_item/menu_item.model";
import FoodIngredientsModel from "../modules/menu/plate_ingredient.model";
import ProductiveUnitModel from "../modules/productive_unit/pu.model";
import UserModel from "../modules/user/user.model";


const models = [
  UserModel, 
  ProductiveUnitModel,
  CustomerModel,
  FoodItemModel,
  IngredientModel,
  FoodIngredientsModel,
  MenuItemModel,
  MenuModel  
]; 

export default models;
