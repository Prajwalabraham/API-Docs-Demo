"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const Types_1 = __importDefault(require("./API/Types/Types"));
const FoodTypeService_1 = require("./API/Services/Implementation/FoodTypeService");
const FoodTypeDAL_1 = require("./API/DataAccess/Implementation/FoodTypeDAL");
const FoodTypeController_1 = require("./API/Controllers/FoodTypeController");
const FoodSupplyTypeService_1 = require("./API/Services/Implementation/FoodSupplyTypeService");
const FoodSupplyTypeDAL_1 = require("./API/DataAccess/Implementation/FoodSupplyTypeDAL");
const FoodSupplyTypeController_1 = require("./API/Controllers/FoodSupplyTypeController");
const bindings = [
    { type: Types_1.default.FoodTypeController, implementation: FoodTypeController_1.FoodTypeController },
    { type: Types_1.default.IFoodTypeService, implementation: FoodTypeService_1.FoodTypeService },
    { type: Types_1.default.IFoodTypeDAL, implementation: FoodTypeDAL_1.FoodTypeDAL },
    { type: Types_1.default.FoodSupplyTypeController, implementation: FoodSupplyTypeController_1.FoodSupplyTypeController },
    { type: Types_1.default.IFoodSupplyTypeService, implementation: FoodSupplyTypeService_1.FoodSupplyTypeService },
    { type: Types_1.default.IFoodSupplyTypeDAL, implementation: FoodSupplyTypeDAL_1.FoodSupplyTypeDAL },
];
const container = new inversify_1.Container();
bindings.forEach(binding => {
    container.bind(binding.type).to(binding.implementation).inSingletonScope();
});
exports.default = container;
//# sourceMappingURL=Inversify.config.js.map