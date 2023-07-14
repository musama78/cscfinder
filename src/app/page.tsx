import Map from "@/components/map";
import Menu from "@/components/menu";
import Container from "@/components/container";
import { cookies } from "next/headers";
import Content from "@/components/content";
import PRISMA from "../../prisma";

export default async function Home() {
  const cookieStore = cookies();
  const cscs = await PRISMA.cSC.findMany({
    include: {
      badges: true,
    },
  });
  const seenIntro = cookieStore.get("seenIntro");
  return (
    <div className="flex h-full w-full">
      <Menu />
      <main className="block h-full w-full">
        <Content seenIntro={!!seenIntro} />
        <div className="w-full h-full relative bg-green-700 pt-10 px-2.5 text-white block md:flex overflow-hidden">
          <Container entries={cscs} />
          <Map entries={cscs} />
        </div>
      </main>
    </div>
  );
}
