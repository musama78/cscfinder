import { EntriesProps } from "@/interfaces";

export default function ContainerSSR(props: EntriesProps) {
  return (
    <div
      className={`w-full h-full absolute md:relative bg-green-700 px-2.5 pb-2.5 mb-10 text-white overflow-scroll left-0 transition-left ssr-list`}
    >
      <div className="relative h-full overflow-x-hidden overflow-y-auto">
        <div className={`absolute w-full h-full top-0 transition-left`}>
          {props.entries.map((d, i) => (
            <div
              key={i}
              className={`inline-flex w-full rounded-lg bg-white text-green-600 h-52 font-bold p-2.5 mt-5 cursor-pointer`}
            >
              <div className="w-52 mr-5">
                <img src={d.logoURL} className="object-contain h-full m-auto" />
              </div>

              <div className="flex flex-col justify-start">
                <h2 className="text-3xl">{d.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
