import Image from "next/image";
import Link from "next/link";
import LoginButton from "@/components/loginButton";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12 ">
      <Link href="/" className="my-6 flex items-center gap-x-1 lg:my-0">
        <Image src="logo.svg" alt="logo" width={150} height={150} />
      </Link>
      <div className="flex text-white rounded-lg border border-gray-200 bg-green-600 shadow-md flex-col md:max-w-xl md:flex-row w-full md:max-w-[1024px] [&amp;>img]:hidden md:[&amp;>img]:w-96 md:[&amp;>img]:p-0 md:[&amp;>*]:w-full md:[&amp;>*]:p-16 lg:[&amp;>img]:block">
        <img
          alt=""
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/login.jpg"
        />
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <h1 className="mb-3 text-2xl font-bold  md:text-3xl">
            Sign in to platform
          </h1>
          <form>
            <div className="mb-4 flex flex-col gap-y-3">
              <label className="text-sm font-medium" htmlFor="email">
                Deine E-Mail Adresse
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 flex flex-col gap-y-3">
              <label className="text-sm font-medium" htmlFor="password">
                Dein Passwort
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <LoginButton />
          </form>
        </div>
      </div>
    </div>
  );
}
