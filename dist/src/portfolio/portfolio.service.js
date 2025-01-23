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
    async getUserWithProjects(id) {
        try {
            const user = await this.prisma.portfolio.findUnique({
                where: { id },
                include: {
                    projects: true,
                },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                avatar: user.avatar,
                projects: user.projects.map(project => ({
                    projectName: project.projectName,
                    institutionName: project.institutionName
                }))
            };
        }
        catch (error) {
            console.error('Error in getUserWithProjects:', error);
            throw new Error('Failed to get user with projects');
        }
    }
    async deletePortfolio(id) {
        try {
            await this.prisma.project.deleteMany({
                where: { userId: id },
            });
            const deletedUser = await this.prisma.portfolio.delete({
                where: { id },
            });
            return deletedUser;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Portfolio with ID ${id} not found`);
            }
            console.error('Error deleting portfolio:', error);
            throw new Error('Failed to delete portfolio');
        }
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map