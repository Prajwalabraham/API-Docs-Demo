import { FoodDALInterface } from "./FoodDALInterface";
import { Pool } from "pg";

class FoodDAL implements FoodDALInterface {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: 5432, // DB Credentials from env or ConfigFile
    });
  }

  async addFoodType(FoodType: any): Promise<void> {
      const { FoodTypeName,
        FoodTypeIsActive, 
        FoodTypeCreatedDate, 
        FoodTypeCreatedBy, 
        FoodTypeModifiedDate, 
        FoodTypeModifiedBy } = FoodType;
    // Logic to add food type to database using a stored procedure or function
    
    const query = 'SELECT add_food_type($1, $2, $3, $4, $5, $6)';
    const values = [foodTypeName, foodTypeIsActive, foodTypeCreatedDate, foodTypeCreatedBy, foodTypeModifiedDate, modifiedBy];
    await this.pool.query(query, values);
  }
}

export { FoodDAL };
