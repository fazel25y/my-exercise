import React from "react";
import image from "../../assets/images/work.jpg";

const Header = () => {
  return (
    <header
      className="
        relative mx-[6px] my-[6px] border-double border-4 border-primary h-24 bg-secondary flex "
    >
      <div className="pt-[12px] pl-[24px] w-full">
        <img
          src={image}
          className=" bg-contain w-[10rem] h-[10rem] border-solid border-2 rounded-full relative z-40  mobile:h-[209%] w-[100%] tablet:w-[22%] desktop:w-[15%] laptop:w-[15%] "
        />
      </div>
      <div className="absolute flex flex-col items-center justify-start w-full pt-[20px] z-0 mobile:max-w-[100%] tablet:w-[100%] desktop:w-full laptop:w-[100%]">
        <h1 className="text-2xl font-semibold font-serif text-blue-950">
          Amir
        </h1>
        <h4 className="font-serif">Software Engineer</h4>
      </div>
    </header>
  );
};
export default Header;
