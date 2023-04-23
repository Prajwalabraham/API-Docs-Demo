import { FoodServiceInterface } from "./FoodServiceInterface";
import { FoodDAL } from "./FoodDAL";

class FoodService implements FoodServiceInterface {
  constructor(private foodDAL: FoodDAL) {}

  async addFoodType(foodTypeName: string, foodTypeIsActive: boolean, foodTypeCreatedDate: Date, foodTypeCreatedBy: number, foodTypeModifiedDate: Date, modifiedBy: number): Promise<any> {
    const newFoodType = {
      foodTypeName: foodTypeName,
      foodTypeIsActive: foodTypeIsActive,
      foodTypeCreatedDate: foodTypeCreatedDate,
      foodTypeCreatedBy: foodTypeCreatedBy,
      foodTypeModifiedDate: foodTypeModifiedDate,
      modifiedBy: modifiedBy
    };
    await this.foodDAL.addFoodType(newFoodType);
    .then(result => {
        console.log("Sucessfully Added the FoodType");
    })
    .catch(err => {
        console.log("Error Adding the FoodType");
    })
    return newFoodType;
  }
}

export { FoodService };
