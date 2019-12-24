"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("../create-cat-dto");
let CatsController = class CatsController {
    createCat(createCatDto) {
        return `接受到的createCatDto的数据name:${createCatDto.name}&age:${createCatDto.age}`;
    }
    findAllCats(request) {
        return '这里是Controller：cats的findAllCats方法～';
    }
    findOne(params) {
        return `接受路由中的参数：${params.id}`;
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(200),
    common_1.Header('Cache-Control', 'defineHeader'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", String)
], CatsController.prototype, "createCat", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAllCats", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
CatsController = __decorate([
    common_1.Controller('cats')
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map