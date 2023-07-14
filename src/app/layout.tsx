import "./globals.css";
import Init from "@/components/init";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cannabis Social Club e.V. Finder",
  description:
    "Finde die besten legalen Cannabis Social Clubs (CSCs) in Berlin, Hamburg, München, Stuttgart und in deiner Stadt!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full">
      <body className="h-full">
        <Init>{children}</Init>
      </body>
    </html>
  );
}
