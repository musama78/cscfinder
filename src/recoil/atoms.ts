import { atom } from "recoil";
import { Badge, CSC } from "@prisma/client";

export const relevantEntriesAtom = atom<(CSC & { badges: Badge[] })[]>({
  key: "relevantEntriesAtom",
  default: [],
});

export const currentEntryAtom = atom<(CSC & { badges: Badge[] }) | null>({
  key: "currentEntryAtom",
  default: null,
});

export const detailPageIsOpenAtom = atom<boolean>({
  key: "detailPageIsOpenAtom",
  default: false,
});

export const mapIsOnMobileOpenAtom = atom<boolean>({
  key: "mapIsOnMobileOpenAtom",
  default: false,
});
