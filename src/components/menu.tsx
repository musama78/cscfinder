"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { mapIsOnMobileOpenAtom } from "@/recoil/atoms";
import { useState } from "react";
const links = [
  {
    text: "Über uns",
    action: "openContent",
  },
  {
    link: "mailto:kontakt@cscfinder.de",
    text: "Kontakt",
  },
  {
    link: "/login",
    text: "Login",
  },
  {
    link: "/datenschutzerklaerung",
    text: "Datenschutzerklärung",
  },
  {
    link: "/impressum",
    text: "Impressum",
  },
];
export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mapIsOnMobilOpen, setMapIsOnMobilOpen] = useRecoilState(
    mapIsOnMobileOpenAtom
  );

  const handleClickAction = (action: string | undefined) => {
    if (action === "openContent") {
      document
        .getElementsByClassName("content-container")[0]
        .classList.remove("hidden");
    }
  };

  const handleOnClickBackOrLogo = () => {
    if (!mapIsOnMobilOpen) return;

    setMapIsOnMobilOpen(false);
    setMenuIsOpen(false);
  };

  const handleClickMenuOnMobile = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="hidden md:flex w-60 h-full bg-green-600 text-white flex-col">
        <div className="h-48 bg-white">
          <Image
            src="/logo.svg"
            alt="CSC Finder Logo"
            width={180}
            height={180}
          />
        </div>
        <ul className="flex flex-col flex-auto p-2.5">
          {links.map((l, i) => {
            if (l.link) {
              return (
                <Link
                  href={l.link}
                  className="flex items-center m-auto"
                  key={i}
                >
                  {l.text}
                </Link>
              );
            } else {
              return (
                <span
                  className="flex items-center m-auto cursor-pointer"
                  onClick={() => handleClickAction(l.action)}
                  key={i}
                >
                  {l.text}
                </span>
              );
            }
          })}
        </ul>
      </nav>
      <nav className="flex md:hidden px-5 justify-between  flex-wrap items-center  h-10 w-full fixed bg-green-600 text-white z-20">
        <h1 className="text-2xl font-bold" onClick={handleOnClickBackOrLogo}>
          {mapIsOnMobilOpen ? (
            <div className="flex items-center">
              <IoArrowBack className="mr-2.5" />
              <span>Zurück</span>
            </div>
          ) : (
            "CSC Finder"
          )}
        </h1>
        <button className="w-10 text-2xl" onClick={handleClickMenuOnMobile}>
          <GiHamburgerMenu />
        </button>
        <div
          className={`fixed ${
            menuIsOpen ? "" : "hidden"
          } h-full md:hidden  w-full z-10 bg-green-900 top-10 left-0`}
        >
          <ul className="block pt-5 px-5">
            {mapIsOnMobilOpen ? (
              <span
                onClick={handleOnClickBackOrLogo}
                className="block mb-5 text-xl cursor-pointer"
              >
                Zurück zur Liste
              </span>
            ) : null}
            {links.map((l, i) => {
              if (l.link) {
                return (
                  <Link href={l.link} className="block mb-5 text-xl" key={i}>
                    {l.text}
                  </Link>
                );
              } else {
                return (
                  <span
                    className="block mb-5 text-xl cursor-pointer"
                    key={i}
                    onClick={() => handleClickAction(l.action)}
                  >
                    {l.text}
                  </span>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
