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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PortfolioService = class PortfolioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const portfolios = await this.prisma.portfolio.findMany({
            include: {
                projects: true,
            },
        });
        return portfolios.map((portfolio) => ({
            firstName: portfolio.firstName,
            lastName: portfolio.lastName,
            avatar: portfolio.avatar,
            projectName: portfolio.projects[0]?.projectName || '',
            institutionName: portfolio.projects[0]?.institutionName || '',
        }));
    }
    async getPortfolioById(id) {
        const portfolio = await this.prisma.portfolio.findUnique({
            where: { id },
            include: {
                projects: true,
            },
        });
        if (!portfolio) {
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
        }
        return {
            firstName: portfolio.firstName,
            lastName: portfolio.lastName,
            avatar: portfolio.avatar,
            projectName: portfolio.projects[0]?.projectName || '',
            institutionName: portfolio.projects[0]?.institutionName || '',
        };
    }
    async createPortfolio(data) {
        return this.prisma.portfolio.create({
            data,
        });
    }
    async createProject(data) {
        return this.prisma.project.create({
            data,
        });
    }
    async updatePortfolioById(id, data) {
        const portfolio = await this.prisma.portfolio.update({
            where: { id },
            data,
        });
        return portfolio;
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map