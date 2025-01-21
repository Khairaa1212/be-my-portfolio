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
    async getPortfolioById(id) {
        const portfolio = await this.prisma.portfolio.findUnique({
            where: { id },
            include: { projects: true }
        });
        if (!portfolio) {
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
        }
        return {
            id: portfolio.id,
            firstName: portfolio.firstName,
            lastName: portfolio.lastName,
            avatar: portfolio.avatar,
            projects: portfolio.projects.map(project => ({
                id: project.id,
                projectName: project.projectName,
                institutionName: project.institutionName
            })),
        };
    }
    async createPortfolio(data) {
        const user = await this.prisma.portfolio.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                avatar: data.avatar,
                username: `${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`,
                password: 'password',
                hobby: null,
            }
        });
        await this.prisma.project.create({
            data: {
                projectName: data.project_name,
                institutionName: data.institution_name,
                userId: user.id,
            }
        });
        return this.prisma.portfolio.findUnique({
            where: {
                id: user.id
            },
            include: {
                projects: true
            }
        });
    }
    async updatePortfolio(id, data) {
        const portfolio = await this.prisma.portfolio.findUnique({ where: { id }, include: { projects: true } });
        if (!portfolio) {
            throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
        }
        let updatedPortfolio;
        if (data.firstName || data.lastName || data.avatar) {
            updatedPortfolio = await this.prisma.portfolio.update({
                where: { id },
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    avatar: data.avatar
                },
            });
        }
        if (data.project_name || data.institution_name) {
            await this.prisma.project.updateMany({
                where: { userId: id },
                data: {
                    projectName: data.project_name,
                    institutionName: data.institution_name
                },
            });
        }
        const updatedPortfolioData = await this.prisma.portfolio.findUnique({
            where: { id },
            include: { projects: true },
        });
        return {
            id: updatedPortfolioData.id,
            firstName: updatedPortfolioData.firstName,
            lastName: updatedPortfolioData.lastName,
            avatar: updatedPortfolioData.avatar,
            projects: updatedPortfolioData.projects.map(project => ({
                id: project.id,
                projectName: project.projectName,
                institutionName: project.institutionName
            })),
        };
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map