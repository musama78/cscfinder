"use client";
import Search from "@/components/search";
import ListEntries from "@/components/listEntries";
import Detail from "@/components/detail";
import { useRecoilState } from "recoil";
import { detailPageIsOpenAtom, mapIsOnMobileOpenAtom } from "@/recoil/atoms";
import { useRef } from "react";
import { EntriesProps } from "@/interfaces";

export default function Container(props: EntriesProps) {
  const [detailPageIsOpen] = useRecoilState(detailPageIsOpenAtom);
  const [mapIsOnMobilOpen] = useRecoilState(mapIsOnMobileOpenAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`w-full h-full absolute md:relative bg-green-700 px-2.5 pb-2.5 mb-10 text-white overflow-scroll left-0 transition-left ${
        mapIsOnMobilOpen ? "left-minus-full" : ""
      }`}
    >
      <div
        ref={containerRef}
        className="relative h-full overflow-x-hidden overflow-y-auto"
      >
        <div
          className={`absolute w-full h-full top-0 transition-left ${
            detailPageIsOpen ? "left-minus-full" : "left-0"
          }`}
        >
          <Search entries={props.entries} />
          <ListEntries entries={props.entries} />
        </div>
        <div
          className={`absolute w-full h-full top-0 transition-left ${
            detailPageIsOpen ? "left-0" : "left-full"
          } `}
        >
          {containerRef.current ? (
            <Detail container={containerRef.current} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
