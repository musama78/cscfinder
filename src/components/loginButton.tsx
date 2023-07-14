"use client";
import { FormEvent, useState } from "react";

export default function LoginButton() {
  const [isClicked, setIsClicked] = useState(false);
  const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <>
      <div className="mb-6">
        <button
          onClick={handleLogin}
          className="text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 focus:!ring-2 p-0 font-medium rounded-lg w-full lg:w-auto"
          type="submit"
        >
          <span className="flex items-center rounded-md text-sm px-3 py-2">
            Login
          </span>
        </button>
      </div>

      {isClicked ? (
        <div className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-sm font-normal text-gray-500">
              <span>
                Der Login ist deaktiviert und wird zur Zeit überarbeitet. Wir
                bitten um Verständnis.
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <button
              data-dismiss-target="#sticky-banner"
              type="button"
              onClick={() => setIsClicked(false)}
              className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
