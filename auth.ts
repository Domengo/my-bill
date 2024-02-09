import NextAuth from 'next-auth';
import { authConfig } from '@authentication/auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';


export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

const prisma = new PrismaClient()

function hash(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}


async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        console.error('Failed to fetch user: ', error);
        // throw new Error('Error getting user');
    }
}
// async function fetchUserData() {
//     const user = await getUser('dominicsengo@gmail.com'); // Await the Promise
//     console.log(user);
// }

// fetchUserData();


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z.object({
                    email: z.string().email(),
                    password: z.string().min(6),
                }).safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    // console.log(user);
                    if (!user) {
                        redirect('/login');
                        return null
                    };
                    const isValidPassword = await bcrypt.compareSync(password, user.password);
                    console.log(isValidPassword);
                    if (isValidPassword) {
                        console.log(user)
                        return user;
                    }
                }
                console.log('Invalid password');
                return null;
            },
        }),
    ],
    // pages: {}
});