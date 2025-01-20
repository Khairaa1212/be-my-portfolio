import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Menambahkan data ke tabel portfolio dengan proyek terkait
  const portfolio1 = await prisma.portfolio.create({
    data: {
      username: 'Kai',
      password: 'project1',
      firstName: 'Khaira',
      lastName: 'Agustina',
      avatar: '',
      hobby: 'Coodingg',
      projects: {
        create: [
          {
            projectName: 'Project PKL',
            institutionName: 'SMKN 1 BALIKPAPAN',
          },
          {
            projectName: 'Database Project',
            institutionName: 'Universitas Mulia',
          },
        ],
      },
    },
  });

  const portfolio2 = await prisma.portfolio.create({
    data: {
      username: 'Khai_ra',
      password: 'muyprojectum',
      firstName: 'Asmarani',
      lastName: 'Khaira',
      avatar: '',
      hobby: 'Cooking',
      projects: {
        create: [
          {
            projectName: 'Project History',
            institutionName: 'Universitas Mulia',
          },
          {
            projectName: 'Project Universitas Mulia',
            institutionName: 'Universitas Mulia (UM)',
          },
        ],
      },
    },
  });

  const portfolio3 = await prisma.portfolio.create({
    data: {
      username: 'Tya',
      password: '123456',
      firstName: 'Rastya',
      lastName: 'Dachniarti',
      avatar: '',
      hobby: 'Cooking, Traveling',
      projects: {
        create: [
          {
            projectName: 'About Me',
            institutionName: 'Universitas Mulia',
          },
          {
            projectName: 'Project Universitas Mulia',
            institutionName: 'Universitas Mulia (UM)',
          },
        ],
      },
    },
  });

  console.log('Added portfolios:', portfolio1, portfolio2, portfolio3);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
