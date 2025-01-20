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
exports.PrismaController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_prisma_dto_1 = require("./dto/create-prisma.dto");
const update_prisma_dto_1 = require("./dto/update-prisma.dto");
let PrismaController = class PrismaController {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createPrismaDto) {
        return this.prismaService.create(createPrismaDto);
    }
    findAll() {
        return this.prismaService.findAll();
    }
    findOne(id) {
        return this.prismaService.findOne(+id);
    }
    update(id, updatePrismaDto) {
        return this.prismaService.update(+id, updatePrismaDto);
    }
    remove(id) {
        return this.prismaService.remove(+id);
    }
};
exports.PrismaController = PrismaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prisma_dto_1.CreatePrismaDto]),
    __metadata("design:returntype", void 0)
], PrismaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrismaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrismaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prisma_dto_1.UpdatePrismaDto]),
    __metadata("design:returntype", void 0)
], PrismaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrismaController.prototype, "remove", null);
exports.PrismaController = PrismaController = __decorate([
    (0, common_1.Controller)('prisma'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaController);
//# sourceMappingURL=prisma.controller.js.map