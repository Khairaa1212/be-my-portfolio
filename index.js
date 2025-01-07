const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Membuat pengguna baru dengan username dan password
  const newUser = await prisma.user.create({
    data: {
      username: 'john_doe',
      password: 'securepassword123',
    },
  });

  console.log('User created:', newUser);

  // Mengambil pengguna berdasarkan username
  const foundUser = await prisma.user.findUnique({
    where: {
      username: 'john_doe',
    },
  });

  console.log('Found user:', foundUser);

  // Mengambil semua pengguna
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
