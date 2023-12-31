// import Image from "next/image";
export function Header(props) {
  return (
    <div className="flex flex-row gap-10 justify-center">
      {/* <Image
        height={120}
        width={150}
        className="rounded-[20px]"
        src="/download.png"
        alt="none"
        priority={false}
      ></Image> */}
      <input
        spellCheck="false"
        className="rounded-[20px] w-[20%] max-[600px]:w-[90%] p-[20px] h-[60px] bg-[#2C2C2C] focus:outline-none"
        placeholder="search..."
        onChange={props.ps}
      ></input>
    </div>
  );
}
