"use client";
import { Header } from "./components/Header";
import { Data } from "./components/Data";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function MainPage() {
  const baseData1 = Data.sort((a, b) => a.month - b.month);
  const [baseData, setBaseData] = useState(
    baseData1.sort((a, b) => a.day - b.day)
  );
  const router = useRouter();
  const unuudr = new Date();
  function handleInput(event) {
    const filt = baseData.filter((e) => e.name.includes(event.target.value));
    setBaseData(filt);
    if (event.target.value === "" || event.target.value === undefined) {
      setBaseData(baseData1.sort((a, b) => a.day - b.day));
    }
  }
  return (
    <div className="flex p-[20px] w-[100vw] gap-[10px] h-[100vh] flex-col items-center">
      <div className="w-[100vw] h-[90px] justify-center">
        <Header ps={handleInput} />
      </div>
      <p>oirtoj bui biy daaltuud</p>
      <div className="w-[100%] h-[90%] gap-[10px] flex justify-center flex-wrap content-start">
        {baseData.map((element, index) => {
          return (
            <button
              onClick={() => {
                router.push("/hiceel?nern=" + element.name);
              }}
              key={index}
              onMouseEnter={() => {
                document.getElementById(index).style =
                  "transform: translateX(10px)";
              }}
              onMouseLeave={() => {
                document.getElementById(index).style =
                  "transform: translateX(-1px)";
              }}
              className=" hover:bg-[#2c2c2c] transition-all duration-300 text-[20px] gap-[10px] border-[#E8D8D2] border-4 justify-center items-center flex-col flex w-[200px] h-[20%] p-[20px] rounded-[10px] text-[F7F7F7]"
            >
              <div className="flex justify-center items-center gap-[10px] text-center">
                <p>{element.name}</p>
                <i
                  id={index}
                  className="fa-solid fa-arrow-right transition-all duration-300"
                ></i>
              </div>
              <p className="text-[16px] text-[gray]">
                hugatsaa: {element.month} sariin {element.day} udur
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
