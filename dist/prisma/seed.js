"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.portfolio.createMany({
        data: [
            {
                username: "Khairra",
                password: "myprojectum",
                firstName: "Asmarani",
                lastName: "Khaira",
                avatar: "",
                hobby: "Coding"
            },
            {
                username: "Kai",
                password: "password22",
                firstName: "Khaira",
                lastName: "Agustina",
                avatar: "",
                hobby: "Cooking"
            },
            {
                username: "Tya",
                password: "my password",
                firstName: "Rastya",
                lastName: "Dachniarti",
                avatar: "",
                hobby: "Cooking, Traveling"
            }
        ]
    });
    await prisma.project.createMany({
        data: [
            {
                projectName: "Project History",
                institutionName: "Universitas Mulia",
                userId: 1,
            },
            {
                projectName: "Project Universitas Mulia",
                institutionName: "SMKN 1 BALIKPAPAN",
                userId: 2,
            },
            {
                projectName: "About Me",
                institutionName: "Universitas Mulia",
                userId: 3,
            }
        ]
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map