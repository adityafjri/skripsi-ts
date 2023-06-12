const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function dropRecords() {
  try {
    await prisma.ListUndang.deleteMany();
    console.log('All records deleted from ListUndang table.');
  } catch (error) {
    console.error('Error dropping records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

dropRecords();
