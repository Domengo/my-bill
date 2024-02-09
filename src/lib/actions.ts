"use server";
import { signIn } from '@authentication/auth';
import AuthError from 'next-auth';
// import { redirect } from 'next/navigation';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
    // if (!user) {
    //   redirect('/login');
    // }
  } catch (error) {
    console.log(typeof error, error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }

}