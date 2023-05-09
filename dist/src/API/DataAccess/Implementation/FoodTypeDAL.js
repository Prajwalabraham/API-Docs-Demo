"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodTypeDAL = void 0;
const inversify_1 = require("inversify");
const DBconfig_1 = __importDefault(require("../../Config/DBconfig"));
let FoodTypeDAL = class FoodTypeDAL {
    findAll() {
        console.log('DI successful');
    }
    async create(FoodType) {
        const client = await DBconfig_1.default.connect();
        try {
            // Start a transaction.
            await client.query("BEGIN");
            const createFoodTypeQuery = "SELECT create_food_type($1, $2, $3, $4)";
            const result = await client.query(createFoodTypeQuery, [
                FoodType.FoodTypeName,
                FoodType.FoodTypeIsActive,
                FoodType.FoodTypeCreatedBy,
                FoodType.FoodTypeModifiedBy,
            ]);
            await client.query("COMMIT");
            return result.rows[0].create_food_type;
        }
        catch (error) {
            await client.query("ROLLBACK");
            throw error;
        }
        finally {
            client.release();
        }
    }
    async findOneByName(name) {
        const client = await DBconfig_1.default.connect();
        try {
            const GetFoodTypeByNameQuery = "SELECT get_food_type_by_name($1)";
            const result = await client.query(GetFoodTypeByNameQuery, [name]);
            await client.release();
            if (result.rows.length > 0) {
                const foodType = {
                    FoodTypeId: result.rows[0].FoodTypeId,
                    FoodTypeName: result.rows[0].FoodTypeName,
                    FoodTypeIsActive: result.rows[0].FoodTypeIsActive,
                    FoodTypeCreatedDate: result.rows[0].FoodTypeCreatedDate,
                    FoodTypeCreatedBy: result.rows[0].FoodTypeCreatedBy,
                    FoodTypeModifiedDate: result.rows[0].FoodTypeModifiedDate,
                    FoodTypeModifiedBy: result.rows[0].FoodTypeModifiedBy,
                };
                return foodType;
            }
            return null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
};
FoodTypeDAL = __decorate([
    (0, inversify_1.injectable)()
], FoodTypeDAL);
exports.FoodTypeDAL = FoodTypeDAL;
//# sourceMappingURL=FoodTypeDAL.js.map