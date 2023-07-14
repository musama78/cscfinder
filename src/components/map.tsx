"use client";
import React, { useRef, useEffect, useState } from "react";
import { booleanContains, distance, point, polygon } from "@turf/turf";
import maplibregl, { LngLatLike, Map as MapType } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { EntriesProps } from "@/interfaces";
import { useRecoilState } from "recoil";
import {
  currentEntryAtom,
  detailPageIsOpenAtom,
  mapIsOnMobileOpenAtom,
  relevantEntriesAtom,
} from "@/recoil/atoms";
import { Badge, CSC } from "@prisma/client";

export let mapInstance: MapType;

interface MapProps {
  entries: (CSC & { badges: Badge[] })[];
  lat?: number;
  lng?: number;
  zoom?: number;
  bounds?: [[number, number], [number, number]];
}
export default function Map(props: MapProps) {
  const mapContainer = useRef(null);
  const map = useRef<MapType>(null);
  const [lng] = useState(props.zoom ?? 10);
  const [lat] = useState(props.lat ?? 53);
  const [zoom] = useState(props.lng ?? 7);
  const [API_KEY] = useState("xnJjThpgvXUH5WxnocZ2");
  const [mapIsOnMobilOpen, setMapIsOnMobilOpen] = useRecoilState(
    mapIsOnMobileOpenAtom
  );
  const [, setRelevantEntries] = useRecoilState(relevantEntriesAtom);
  const [, setCurrentCSC] = useRecoilState(currentEntryAtom);
  const [, setDetailPageIsOpen] = useRecoilState(detailPageIsOpenAtom);

  useEffect(() => {
    if (map.current) return;
    //@ts-ignore
    map.current = new maplibregl.Map({
      container: mapContainer.current as any,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      maxBounds: props.bounds ?? [
        [5.98865807458, 47.3024876979],
        [15.0169958839, 54.983104153],
      ],
    });

    mapInstance = map.current as MapType;

    setTimeout(() => {
      if (props.bounds)
        mapInstance.setMaxBounds([
          [5.98865807458, 47.3024876979],
          [15.0169958839, 54.983104153],
        ]);
      setTimeout(() => {
        mapInstance.setZoom(mapInstance.getZoom() - 0.3);
        filterAndSortEntries({ center: mapInstance.getCenter() });
      });
    });

    console.log(mapInstance);
    const filterAndSortEntries = (e: any) => {
      const centerPoint = point([e.center.lng, e.center.lat]);
      if (window.innerWidth < 768) {
        const entries = [...props.entries];
        setRelevantEntries(
          entries.sort((a, b) => {
            const distA = distance(centerPoint, point(a.coords));
            const distB = distance(centerPoint, point(b.coords));
            return distA - distB;
          })
        );

        return e;
      }
      const bounds = mapInstance.getBounds();
      const bbox = polygon([
        [
          [bounds.getEast(), bounds.getNorth()],
          [bounds.getEast(), bounds.getSouth()],
          [bounds.getWest(), bounds.getSouth()],
          [bounds.getWest(), bounds.getNorth()],
          [bounds.getEast(), bounds.getNorth()],
        ],
      ]);
      setRelevantEntries(
        props.entries
          .filter((e) => booleanContains(bbox, point(e.coords)))
          .sort((a, b) => {
            const distA = distance(centerPoint, point(a.coords));
            const distB = distance(centerPoint, point(b.coords));
            return distA - distB;
          })
      );

      return e;
    };
    filterAndSortEntries({ center: mapInstance.getCenter() });
    mapInstance.transformCameraUpdate = (e) => filterAndSortEntries(e);

    props.entries.forEach((e) => {
      const marker = new maplibregl.Marker()
        .setLngLat(e.coords as LngLatLike)
        .addTo(mapInstance);

      marker.getElement().addEventListener("click", () => {
        setDetailPageIsOpen(true);
        setCurrentCSC(e);
        setTimeout(() => {
          setMapIsOnMobilOpen(false);
        }, 250);
      });
    });
  });

  return (
    <div
      className={`flex absolute md:relative top-0 left-full md:left-0 h-full w-full transition-left ${
        mapIsOnMobilOpen ? "left-0-i" : ""
      }`}
    >
      <div className="w-full h-full">
        <div ref={mapContainer} className="map" />
      </div>
    </div>
  );
}
