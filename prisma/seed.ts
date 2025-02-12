import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Membuat Data User
  await prisma.user.createMany({
    data: [
        {
            username: "Khairra",
            password: "password123",
            firstName: "Asmarani",
            lastName: "Khaira",
            avatar: "",
            hobby: "Coding"
        },
        {
            username: "Kai",
            password: "myprojectum",
            firstName: "Khaira",
            lastName: "Agustina",
            avatar: "",
            hobby: "Cooking"
        },
        {
          username: "Tya",
          password: "mypassword",
          firstName: "Rastya",
          lastName: "Dachniarti",
          avatar: "",
          hobby: "Cooking, Traveling"
      }
    ]
  });

  // Membuat Data Project
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