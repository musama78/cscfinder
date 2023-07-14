"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function GoToFinder() {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.seenIntro) {
      closeContent();
    }
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        closeContent();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  const closeContent = () => {
    setCookie("seenIntro", true, {
      path: "/",
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 365 * 10),
    });
    const ele = document.getElementsByClassName("content-container")[0];

    if (ele) {
      ele.classList.add("hidden");
    }
  };

  return (
    <div className="flex">
      <button
        className="fixed right-5 top-5 cursor-pointer text-2xl"
        onClick={closeContent}
      >
        <AiOutlineClose />
      </button>
      <button
        className="m-auto bg-green-600 rounded-2xl absolute top-2.5 right-0 left-0 p-2.5 w-72"
        onClick={closeContent}
      >
        Direkt zum Finder!
      </button>
      <button
        className="m-auto bg-green-600 p-2.5 rounded-2xl my-5"
        onClick={closeContent}
      >
        Ab zum Finder!
      </button>
    </div>
  );
}
