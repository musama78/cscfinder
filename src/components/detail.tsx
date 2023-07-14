"use client";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { currentEntryAtom, detailPageIsOpenAtom } from "@/recoil/atoms";
import {
  AiOutlineClose,
  AiOutlineGlobal,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import {
  BsDiscord,
  BsSnapchat,
  BsTwitch,
  BsFacebook,
  BsMastodon,
  BsTiktok,
} from "react-icons/bs";
import { BiAt } from "react-icons/bi";
import { useEffect } from "react";
import Image from "next/image";
import { CSC } from "@prisma/client";

interface DetailProps {
  container: HTMLDivElement;
}
export default function Detail(props: DetailProps) {
  const [currentCSC, setCurrentCSC] = useRecoilState(currentEntryAtom);
  const [, setDetailPageIsOpen] = useRecoilState(detailPageIsOpenAtom);

  const handleCloseDetailPage = () => {
    setDetailPageIsOpen(false);
    setTimeout(() => {
      setCurrentCSC(null);
    }, 500);
  };

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        handleCloseDetailPage();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      props.container.scrollTo({ top: 0 });
    }, 500);
  }, [currentCSC]);

  if (!currentCSC) return null;
  return (
    <div className="pb-10">
      <div className="h-60 bg-white relative">
        <AiOutlineClose
          onClick={handleCloseDetailPage}
          className="absolute top-2.5 right-2.5 cursor-pointer text-2xl"
        />
        {currentCSC.bgImgURL ? (
          <img
            src={currentCSC.bgImgURL}
            className="w-full h-full object-cover text-2xl"
          />
        ) : (
          <Image
            src="/header.jpg"
            alt="header"
            className="w-full h-full object-cover text-2xl"
            width={450}
            height={300}
          />
        )}
      </div>
      <h2 className="text-2xl font-bold mb-2.5">{currentCSC.name}</h2>
      <p className="mb-5">
        {currentCSC.description ??
          "Eine Beschreibung steht noch aus. Sie wird sicherlich bald nachgereicht."}
      </p>

      {currentCSC.badges.map((b) => (
        <span
          key={b.id}
          className="bg-white text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-5 inline-block"
        >
          {b.name}
        </span>
      ))}

      {hasContact(currentCSC) ? (
        <>
          <h3 className="text-xl mb-2.5">Hier erreichst du uns:</h3>
          <div className="text-2xl mb-5">
            {currentCSC.url ? (
              <Link href={currentCSC.url} className="inline-block mr-2.5">
                <AiOutlineGlobal />
              </Link>
            ) : null}
            {currentCSC.email ? (
              <Link
                href={`mailto:${currentCSC.email}`}
                className="inline-block mr-2.5"
              >
                <BiAt />
              </Link>
            ) : null}

            {currentCSC.tel ? (
              <Link
                href={`tel:${currentCSC.tel.trim().replace("+49", "0")}`}
                className="inline-block mr-2.5"
              >
                <AiOutlinePhone />
              </Link>
            ) : null}
          </div>
        </>
      ) : null}

      {hasSocials(currentCSC) ? (
        <>
          <h3 className="text-xl mb-2.5">Hier sind wir vertreten:</h3>
          <div className="text-2xl">
            {currentCSC.instagram ? (
              <Link href={currentCSC.instagram} className="inline-block mr-2.5">
                <AiOutlineInstagram />
              </Link>
            ) : null}

            {currentCSC.youtube ? (
              <Link href={currentCSC.youtube} className="inline-block mr-2.5">
                <AiOutlineYoutube />
              </Link>
            ) : null}
            {currentCSC.twitter ? (
              <Link href={currentCSC.twitter} className="inline-block mr-2.5">
                <AiOutlineTwitter />
              </Link>
            ) : null}
            {currentCSC.whatsApp ? (
              <Link href={currentCSC.whatsApp} className="inline-block mr-2.5">
                <AiOutlineWhatsApp />
              </Link>
            ) : null}
            {currentCSC.discord ? (
              <Link href={currentCSC.discord} className="inline-block mr-2.5">
                <BsDiscord />
              </Link>
            ) : null}
            {currentCSC.telegram ? (
              <Link href={currentCSC.telegram} className="inline-block mr-2.5">
                <FaTelegramPlane />
              </Link>
            ) : null}
            {currentCSC.snapchat ? (
              <Link href={currentCSC.snapchat} className="inline-block mr-2.5">
                <BsSnapchat />
              </Link>
            ) : null}
            {currentCSC.twitch ? (
              <Link href={currentCSC.twitch} className="inline-block mr-2.5">
                <BsTwitch />
              </Link>
            ) : null}
            {currentCSC.facebook ? (
              <Link href={currentCSC.facebook} className="inline-block mr-2.5">
                <BsFacebook />
              </Link>
            ) : null}

            {currentCSC.mastodon ? (
              <Link href={currentCSC.mastodon} className="inline-block mr-2.5">
                <BsMastodon />
              </Link>
            ) : null}
            {currentCSC.tiktok ? (
              <Link href={currentCSC.tiktok} className="inline-block mr-2.5">
                <BsTiktok />
              </Link>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

function hasSocials(csc: CSC): boolean {
  return (
    !!csc.facebook ||
    !!csc.twitter ||
    !!csc.discord ||
    !!csc.instagram ||
    !!csc.telegram ||
    !!csc.rss ||
    !!csc.youtube ||
    !!csc.tiktok ||
    !!csc.mastodon ||
    !!csc.snapchat ||
    !!csc.twitch ||
    !!csc.whatsApp
  );
}

function hasContact(csc: CSC): boolean {
  return !!csc.url || !!csc.tel || !!csc.email;
}
