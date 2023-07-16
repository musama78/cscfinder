"use client";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import zipCodesUntyped from "./../zipCodes.json";
import { FormEvent, useRef, useState } from "react";
import { EntriesProps } from "@/interfaces";
import { bbox, distance, lineString, point, buffer } from "@turf/turf";
import { mapInstance } from "@/components/map";
export default function Search(props: EntriesProps) {
  const zipCodes = zipCodesUntyped as any as {
    [key: number]: { name: string; coords: [number, number] };
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [zipOrCity, setZipOrCity] = useState("");

  const shakeInput = () => {
    if (!inputRef.current) return;
    inputRef.current.classList.add("horizontal-shake");
    setTimeout(() => {
      if (!inputRef.current) return;
      inputRef.current.classList.remove("horizontal-shake");
    }, 500);
  };

  const handleEntryFound = (zipCode: { coords: [number, number] }) => {
    const zipPoint = point(zipCode.coords);
    const entries = [...props.entries];
    const threeClosestClubs = entries
      .sort((a, b) => {
        const distA = distance(zipPoint, point(a.coords));
        const distB = distance(zipPoint, point(b.coords));
        return distA - distB;
      })
      .slice(0, 3);

    const furthestCSCIsUnder5KM =
      distance(zipPoint, point(threeClosestClubs[2].coords), {
        units: "kilometers",
      }) < 5;

    const furthestCSCIsUnder50KM =
      distance(zipPoint, point(threeClosestClubs[2].coords), {
        units: "kilometers",
      }) < 50;

    if (furthestCSCIsUnder5KM) {
      const bufferBbox = bbox(buffer(zipPoint, 5, { units: "kilometers" }));

      mapInstance.fitBounds(
        [
          [bufferBbox[2], bufferBbox[3]],
          [bufferBbox[0], bufferBbox[1]],
        ],
        { duration: window.innerWidth < 768 ? 1 : 300 }
      );
    } else if (furthestCSCIsUnder50KM) {
      const boundingBox = bbox(
        lineString(
          threeClosestClubs.map((c) => c.coords).concat([zipCode.coords])
        )
      );

      mapInstance.fitBounds(
        [
          [boundingBox[2], boundingBox[3]],
          [boundingBox[0], boundingBox[1]],
        ],
        { duration: window.innerWidth < 768 ? 1 : 300 }
      );
    } else {
      const bufferBbox = bbox(buffer(zipPoint, 20, { units: "kilometers" }));

      mapInstance.fitBounds(
        [
          [bufferBbox[2], bufferBbox[3]],
          [bufferBbox[0], bufferBbox[1]],
        ],
        { duration: window.innerWidth < 768 ? 1 : 300 }
      );
    }
  };

  const handleSearchPosition = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isZip = Number.isInteger(+zipOrCity);

    if (isZip) {
      const zipCode = zipCodes[+zipOrCity];
      if (zipCode) {
        handleEntryFound(zipCode);
      } else {
        shakeInput();
      }
    } else {
      const city = Object.values(zipCodes).find(
        (zip) =>
          zip.name.trim().toLowerCase() === zipOrCity.trim().toLowerCase()
      );

      if (city) {
        handleEntryFound(city);
      } else {
        shakeInput();
      }
    }
    setZipOrCity("");
  };

  const handleCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        handleEntryFound({
          coords: [position.coords.longitude, position.coords.latitude],
        });
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-5">
        hello from container...Wir haben Deutschlands schönste Cannabis Social Clubs
      </h1>
      <div className="flex">
        <form onSubmit={handleSearchPosition} className="w-full">
          <div className="relative w-full">
            <input
              type="search"
              ref={inputRef}
              value={zipOrCity}
              onChange={(e) => setZipOrCity(e.target.value)}
              className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="PLZ oder Ort"
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-800 focus:ring-4 outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 py-2"
            >
              <BiSearch className="text-xl" />
            </button>
          </div>
        </form>
        <button
          className="ml-2.5 bg-white hover:bg-green-600 text-green-600 hover:text-white focus:ring-4 outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleCurrentPosition}
        >
          <BiCurrentLocation className="text-xl" />
        </button>
      </div>
    </div>
  );
}
