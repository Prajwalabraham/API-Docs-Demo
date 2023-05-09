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
exports.FoodSupplyTypeController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const Types_1 = __importDefault(require("../Types/Types"));
let FoodSupplyTypeController = class FoodSupplyTypeController {
    FoodSupplyTypeService;
    constructor(_FoodSupplyTypeService) {
        this.FoodSupplyTypeService = _FoodSupplyTypeService;
    }
    async index(req, res) {
        try {
            console.log("Inside FoodSupplyType Controller");
            const posts = await this.FoodSupplyTypeService.findAll();
            res.status(200).json(posts);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
    async test(req, res) {
        try {
            console.log("Inside Controller");
            const posts = await this.FoodSupplyTypeService.findAll();
            res.status(200).json(posts);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)())
], FoodSupplyTypeController.prototype, "index", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/hello"),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)())
], FoodSupplyTypeController.prototype, "test", null);
FoodSupplyTypeController = __decorate([
    (0, inversify_express_utils_1.controller)("/foodsupplytype"),
    __param(0, (0, inversify_1.inject)(Types_1.default.IFoodSupplyTypeService))
], FoodSupplyTypeController);
exports.FoodSupplyTypeController = FoodSupplyTypeController;
//# sourceMappingURL=FoodSupplyTypeController.js.map