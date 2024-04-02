import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient()
function hash(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const emaill = "dominicsengo@gmail.com"
async function main(emaill) {
    // ... you will write your Prisma Client queries here
    // await prisma.users.create({
    //     data: {
    //         name: 'Anthony waliaula',
    //         email: 'anthony.waliaul3000@gmail.com',
    //         password: `${ hash('password') }`,
    //         role: 'USER',
    //     },
    // })
    // const allUsers = await prisma.users.findMany()
    // console.log(allUsers)
    try {
        const user = await prisma.users.findUnique({
            where: {
                email: emaill,
            },
        });
        if (user) {
            console.log(user
)
        } else {
            console.log('User not found')
        }
    }
    catch (e) {
        console.error(e)
    }
}


main(emaill)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })