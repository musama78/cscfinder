"use client";

import { useEffect } from "react";
import { EntriesProps } from "@/interfaces";
import { useRecoilState } from "recoil";
import {
  currentEntryAtom,
  detailPageIsOpenAtom,
  mapIsOnMobileOpenAtom,
  relevantEntriesAtom,
} from "@/recoil/atoms";
import { Badge, CSC } from "@prisma/client";
import Image from "next/image";

export default function ListEntries(props: EntriesProps) {
  const [relevantEntries, setRelevantEntries] =
    useRecoilState(relevantEntriesAtom);
  const [, setMapIsOnMobilOpen] = useRecoilState(mapIsOnMobileOpenAtom);
  const [, setDetailPageIsOpen] = useRecoilState(detailPageIsOpenAtom);
  const [, setCurrentEntry] = useRecoilState(currentEntryAtom);

  useEffect(() => {
    let myElements = document.querySelectorAll(".ssr-list");

    for (let i = 0; i < myElements.length; i++) {
      //@ts-ignore
      myElements[i].style.display = "none";
    }

    setRelevantEntries(props.entries);
  }, []);

  const handleClickCard = (csc: CSC & { badges: Badge[] }) => {
    setDetailPageIsOpen(true);
    setCurrentEntry(csc);
  };

  const handleClickToMap = () => {
    setMapIsOnMobilOpen(true);
  };

  return (
    <>
      <div
        className="flex md:hidden rounded-lg bg-white text-green-600 h-52 font-bold p-2.5 mt-5 cursor-pointer"
        onClick={handleClickToMap}
      >
        <div className="w-52 mr-5"></div>
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl">Zur Map wecheln</h2>
        </div>
      </div>
      {!relevantEntries.length ? (
        <div
          className={`inline-flex w-full rounded-lg bg-white text-green-600 h-52 font-bold p-2.5 mt-5 cursor-pointer`}
        >
          <div className="w-52 mr-5">
            <Image src="/empty.jpg" alt="" width={250} height={250} />
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="text-3xl">Ziemlich leer hier</h2>
            <p className="text-xl">
              Hier scheint es noch keinen Club zu geben. Vielleicht eine gute
              Idee hier in der Nähe zu gründen?
            </p>
          </div>
        </div>
      ) : null}
      {relevantEntries.map((d, i) => (
        <div
          key={i}
          onClick={() => handleClickCard(d)}
          className={`inline-flex w-full rounded-lg bg-white text-green-600 h-52 font-bold p-2.5 mt-5 cursor-pointer ${
            relevantEntries.length - 1 === i ? "mb-12" : ""
          }`}
        >
          <div className="w-52 mr-5">
            <img src={d.logoURL} className="object-contain h-full m-auto" />
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="text-3xl">{d.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
