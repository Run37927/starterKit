import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

let prisma;
if (!global.prisma) {
    prisma = prismaClientSingleton();
    if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
} else {
    prisma = global.prisma;
}

export default prisma;