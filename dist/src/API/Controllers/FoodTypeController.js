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
exports.FoodTypeController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const Types_1 = __importDefault(require("../Types/Types"));
let FoodTypeController = class FoodTypeController {
    FoodTypeService;
    constructor(_FoodTypeService) {
        this.FoodTypeService = _FoodTypeService;
    }
    async index(req, res) {
        try {
            const posts = await this.FoodTypeService.findAll();
            res.status(200).json("You are Successfully in the route");
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
    async createfoodtype(req, res) {
        try {
            const CreateFoodTypeData = await this.FoodTypeService.createFoodType(req.body);
            res.sendStatus(201).json(CreateFoodTypeData);
        }
        catch (error) {
            if (error.message.includes("Food Type Already Exists")) {
                res.status(409).json(error);
            }
        }
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)())
], FoodTypeController.prototype, "index", null);
__decorate([
    (0, inversify_express_utils_1.httpPost)("/createfoodtype"),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)())
], FoodTypeController.prototype, "createfoodtype", null);
FoodTypeController = __decorate([
    (0, inversify_express_utils_1.controller)("/foodtype"),
    __param(0, (0, inversify_1.inject)(Types_1.default.IFoodTypeService))
], FoodTypeController);
exports.FoodTypeController = FoodTypeController;
//# sourceMappingURL=FoodTypeController.js.map