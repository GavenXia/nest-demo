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
const cats_service_1 = require("./cats.service");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async create(createCatDto) {
        this.catsService.create(createCatDto);
    }
    async findAll() {
        return this.catsService.findAll();
    }
    getDocs(version) {
        if (version && version === '5') {
            console.log(version);
            return { url: 'localhost:3000/cats/12', statusCode: 302 };
        }
    }
    findOne(id) {
        return `接受路由中的参数：${id}`;
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(200),
    common_1.Header('Cache-Control', 'defineHeader'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findAll", null);
__decorate([
    common_1.Get('docs'),
    common_1.Redirect('localhost:3000/cats', 302),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getDocs", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
CatsController = __decorate([
    common_1.Controller('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map