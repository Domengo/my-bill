import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

type User = {
    id: string;
    email: string;
    password: string;
};

async function getUser(email: string): Promise<User | undefined> { 
    try { 
        const user = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
        return user[0];
    } catch (error) { 
        console.error(error);
        throw new Error('Error getting user');
    }
}


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) { 
            const parsedCredentials = z.object({
                email: z.string().email(),
                password: z.string().min(6),
            }).safeParse(credentials);

            if (!parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
                const user = await getUser(email);
                if (!user) return null;
                const isValidPassword = await bcrypt.compare(password, user.password);

                if (isValidPassword) { 
                    return user as User;
                }
            }
            return null;
        },
    })],
});