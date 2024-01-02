import React from "react";
import LampImg from "../../images/Lamp.png";

const HeroSectionRight = () => {
  return (
    <div className="md:py-[4vw] max-sm:px-3 md:w-[730px] ">
      <div className="border-8 bg-white border-[#dbe1e9] md:px-[2vw] px-[3vw] ">
        <div className="relative flex flex-col items-center">
          <div class="bg-secondary mx-auto sm:w-[371px] sm:h-7 absolute sm:top-[38px] w-[248px] h-4 top-[28px]"></div>
          <div class="text-primary text-center relative sm:text-7xl text-5xl font-extrabold ">
            THE DARK
          </div>
          <div class="bg-secondary mx-auto sm:w-[173px] sm:h-7 absolute sm:top-[110px] w-[116px] h-4 top-[76px]"></div>
          <div class="text-primary text-center relative  sm:text-7xl text-5xl font-extrabold ">
            Light
          </div>
        </div>
        <div class="flex flex-col pt-3 gap-y-[2vw] text-primary text-center font-primary text-lg leading-[160%] font-normal relative ">
          <p className="italic ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="flex items-center justify-center">
            <div class="border-t-2 border-primary h-1 w-12 mr-4"></div>
            <p className="items-center font-secondary ">*</p>
            <div class="border-t-2 border-primary h-1 w-12 ml-4"></div>
          </div>
        </div>
        <div className="relative left-4 ">
          <div className="">
            <img className=" h-80 max-sm:h-40" src={LampImg} alt="Lamp" />
            <p className="absolute top-[48%] max-[1436px]:left-[20%] text-xl font-secondary uppercase leading-loose  font-extrabold text-primary left-[29%] w-[160px] tracking-widest text-center max-sm:text-sm max-sm:left-[7%]">
              THE GREAT TOOLKIT FOR WOMEN’S LIFE
            </p>
            
          </div>
          <div className="absolute bottom-[190px] p-2 left-[62%] w-40 h-40 max-sm:w-24 max-sm:h-24 max-sm:-top-[10%] max-sm:left-[59%] bg-opacity-50 rounded-full bg-secondary">
            <div className="rounded-full w-36 h-36 max-sm:w-20 max-sm:h-20 bg-secondary">
              <div className="flex flex-col gap-y-[0.5vw] items-center justify-center p-4 ">
                <h2 className="text-xl font-bold max-sm:text-sm font-primary max-sm:text-center">Majority</h2>
                <p className="text-sm italic text-center max-sm:hidden font-primary">
                  The majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center mx-auto text-primary font-primary sm:py-[3vw] py-[5vw]">
              <h1 className="text-2xl font-extrabold tracking-wider text-center">-John Abraham-</h1>
              <p className="italic tracking-tight text-center">The majority have suffered alteration in some form.</p>
            </div>
      </div>
    </div>
  );
};

export default HeroSectionRight;
