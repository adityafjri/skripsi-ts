// percobaan import data manual

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const jsonData = require('./public/data/graphNode.json');

async function importJSON() {
  try {
    for (const item of jsonData) {
      await prisma.listUndang.create({
        data: {
          judul: item.id,
          tentang: item.tentang,
        },
      });
    }

    console.log('JSON data imported successfully.');
    prisma.$disconnect();
  } catch (error) {
    console.error('Error importing JSON data:', error);
    prisma.$disconnect();
  }
}

importJSON();
