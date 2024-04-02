/** @format */

import { Disclosure } from "@headlessui/react";
import React from "react";

export default function MyDisclosure() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Disclosure as="nav" defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span>Panel title</span>
              <svg
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-gray-500`}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 8.293a1 1 0 010 1.414L2.414 14H5a1 1 0 110 2H1a1
                  1 0 01-1-1V9a1 1 0 011-1h4a1 1 0 011
                  1zM20 9a1 1 0 01-1 1h-4a1 1 0 110-2h2.586l-4.293
                  -4.293a1 1 0 011.414-1.414L19 7.586V5a1 1 0
                  112 0v4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Panel content
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
