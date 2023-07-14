import { PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();

export async function startDBConnection() {
  // Connect the client
  await PRISMA.$connect();
}

startDBConnection()
  .then(async () => {
    await PRISMA.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await PRISMA.$disconnect();
    process.exit(1);
  });

export default PRISMA;
