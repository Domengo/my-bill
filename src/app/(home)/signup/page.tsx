'use client';

import { lusitana } from '../login/fonts';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../login/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@lib/actions';
export default function SignupForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="w-full min-h-screen flex md-col-1 justify-center items-center align-content-center rounded-3 border-3 bg-gradient-to-r from-cyan-100 to-cyan-300">
            <form action={dispatch} className="space-y-3">
                <div className="flex-1 rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-100 px-6 pb-4 pt-8">
                    <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                        Please Sign Up to continue.
                    </h1>
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-medium font-medium text-gray-900"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-medium font-medium text-gray-900"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-medium font-medium text-gray-900"
                                htmlFor="password"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                    <LoginButton />
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            {pending ? "Logging In..." : "Log in"} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}