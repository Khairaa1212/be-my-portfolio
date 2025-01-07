import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create user
    // const user = await prisma.user.create({
    //    data: {
     //       name: 'Khaira',
       //     email: 'khairasmk1@gmail.com',
     //   }
    // })

    // Get all users
    // const users = await prisma.user.findMany();

    // Create article and associate it with user
    const article = await prisma.article.create({
        data: {
            
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })