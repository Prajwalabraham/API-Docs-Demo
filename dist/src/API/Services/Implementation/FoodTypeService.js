"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodTypeService = void 0;
const inversify_1 = require("inversify");
const Types_1 = __importDefault(require("../../Types/Types"));
let FoodTypeService = class FoodTypeService {
    FoodTypeDAL;
    constructor(_FoodTypeDAL) {
        this.FoodTypeDAL = _FoodTypeDAL;
    }
    findAll() {
        console.log("Inside Service");
        const posts = this.FoodTypeDAL.findAll();
    }
    async createFoodType(FoodType) {
        const exists = await this.FoodTypeDAL.findOneByName(FoodType.FoodTypeName);
        if (exists) {
            throw new Error("Food Type Already Exists");
        }
        this.FoodTypeDAL.create(FoodType);
    }
};
FoodTypeService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(Types_1.default.IFoodTypeDAL))
], FoodTypeService);
exports.FoodTypeService = FoodTypeService;
//# sourceMappingURL=FoodTypeService.js.map