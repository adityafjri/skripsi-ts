const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('./public/data/graphNode.json', 'utf8'));

async function seed() {
  try {
    await prisma.listUndang.createMany({
      data: jsonData.map(item => ({
        judul: item.id,
        tentang: item.tentang,
      })),
    });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();