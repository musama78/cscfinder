"use client";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

export default function Init({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <CookiesProvider>{children}</CookiesProvider>
    </RecoilRoot>
  );
}
