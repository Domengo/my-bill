/** @format */

"use client";
import Link, { useRouter } from "next/navigation";
import Image from 'next/image';

// export const metadata: Metadata = {
    
//       title: "Real-Time Payments",
//       description:
//         "Send and receive payments in real-time, without the need for a middleman.",
//     };
export default function LandingPage() {
  const router = useRouter();

  function goto() {
    router.push("/login");
    }   

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="bg-neutral-400 w-full py-12 items-center justify-center flex border-b border-neutral-300">
        <div className="max-w-6xl w-full px-6">
          <div className="flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-16">
            <div className="flex flex-col space-y-9 flex-1">
              <p className="text-8xl font-bold font-cal">Real-Time Tracking</p>

              <div className="max-w-xl flex flex-col space-y-6">
                <div className="flex flex-row items-center space-x-3">
                  <p className="font-light text-lg font-matter">
                    Send and receive payments in real-time, without the need for
                    a middleman.
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-3 text-lg">
                  
                  <p className="font-light font-matter">
                    Start getting paid every second, even while you sleep.
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-3">
                
                  <button className="bg-green-800 text-white font-medium hover:bg-green-700 font-matter space-x-2 px-4 text-base">
                    <p>Get Started</p>
                  </button>
                
                <a
                  href=""
                  target="_blank"
                >
                  <button className="bg-neutral-300 text-white font-medium hover:bg-neutral-200 font-matter space-x-2 px-4 text-base">
                    <p>Go to Quest</p>
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full flex items-end justify-end">
              <div className="w-[360px]">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 items-center justify-center flex flex-col">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              Payments reinvented
            </h2>
            <p className="mt-2 text-3xl font-cal sm:text-4xl">
              You earned it. You should have it now.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-matter">
              With Aptos payments, you can send and received payments in
              real-time. Utilize your potential to the fullest extent by having
              access to your earnings as soon as you earn them.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Image
              src="/page.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-neutral-300"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-neutral-500 pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
