import React from "react";
import "../../assets/styles/home.css";
import HomeIcon from "./homeIcon";
import { YouTube } from "./homeIcon";
import { Facebook } from "./homeIcon";
import { Twitter } from "./homeIcon";
const Home = () => {
  return (
    <div className="mx-[6px] my-[6px] border-double border-4 border-primary  h-[28rem] flex justify-center content-center items-start overflow-hidden text-clip ">
      <article className="w-full">
        <div className="pl-[40px]">
          <h2 className="text-lg font-semibold mt-[79px] mb-[-7px] text-red-800 font-serif">
            My Contact
          </h2>
          <span className="inline-block bg-red-700 w-[110px] h-[3px] rounded-sm"></span>
          <ul>
            <li className=" no-underline hover:underline">
              <HomeIcon />
              amir@gmail.com
            </li>
            <li className=" no-underline hover:underline">
              <YouTube />
              1234567890
            </li>
            <li className=" no-underline hover:underline">
              <Facebook />
              amir
            </li>
            <li className=" no-underline hover:underline">
              <Twitter className="hover:bg-slate-100"/>
              amir21
            </li>
          </ul>
        </div>
        <div className="pl-[40px]">
          <h2 className="text-lg font-semibold mt-[29px] mb-[-7px] text-red-800 font-serif">
            Skills
          </h2>
          <span className="inline-block bg-red-700 w-[110px] h-[3px] rounded-sm"></span>
          
          <ul>
            <li className="no-underline hover:underline ">Tailwind</li>
            <li className="no-underline hover:underline ">Java</li>
            <li className="no-underline hover:underline ">Android</li>
            <li className="no-underline hover:underline ">HTML,Css</li>
          </ul>
        </div>
      </article>

      <article className="mobile: w-max-content  tablet:w-[163%] desktop:w-[163%] laptop:w-[300%]" >
        <div className="pl-[20px]   ">
          <h2 className="text-lg font-semibold mt-[19px] mb-[-7px] text-red-800 font-serif">
            About me
          </h2>
          <span className="inline-block bg-red-700 w-[110px] h-[3px] rounded-sm "></span>
          <p className=" w-[80%] text-pretty ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            enim delectus sed, dolores quibusdam id assumenda sunt sequi
            laboriosam harum necessitatibus, ratione doloribus deleniti
            voluptate accusantium reprehenderit quidem vel vero!
          </p>
        </div>
        <div className="pl-[20px] mt-[4rem] max-h-32  ">
          <h2 className="text-lg font-semibold mt-[16px] mb-[-7px] text-red-800 font-serif">
            Professional Experience
          </h2>
          <span className="inline-block bg-red-700 w-[110px] h-[3px] rounded-sm"></span>

          <div>
            <h2 className="font-semibold">
              Netcracker Technology|Software Engineer
            </h2>

            <h4>Key</h4>
            <ul>
              <li className="list-disc">Working on customer facing product</li>
              <li className="list-disc">Delivery</li>
              <li className="list-disc">Solving...</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Home;
