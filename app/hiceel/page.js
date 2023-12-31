"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Data } from "../components/Data";

export default function Hiceel() {
  const router = useRouter();
  const params = useSearchParams();
  const baseData = Data.filter((e) => e.name === params.get("nern"));
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] flex-col gap-[10px]">
      <div className="border-4 border-[#2c2c2c] p-[20px] rounded-[10px] flex flex-col justify-center items-center ">
        <h1 className="text-[25px]"> {params.get("nern")}</h1>
        {baseData.map((e, index) => {
          return (
            <div key={index}>
              <li>{e.desc}</li>
            </div>
          );
        })}
      </div>
      <button
        className="border-2 border-[#2c2c2c] p-[20px] rounded-[10px]"
        onClick={() => router.push("/")}
      >
        butsah
      </button>
    </div>
  );
}
