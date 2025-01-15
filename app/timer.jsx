"use client";

import clsx from "clsx";
import { Roboto_Slab } from "next/font/google";
import { Space_Mono } from "next/font/google";

const Roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
});

const Space = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Timer({
  formatTime,
  formValue,
  handleButtonClick,
  status,
  progressBarRef,
  remainingTime,
}) {

  const getButtonLabel = () => {
    switch (status) {
      case "pause":
        return "PAUSE";
      case "restart":
        return "RESTART";
      default:
        return "START";
    }
  };

  return (
    <div>
      <div className="w-[410px] h-[410px] mx-auto mt-10 p-6 rounded-full timer-ring">
        <div className="timer w-full rounded-full z-50 border-[13px] border-solid border-[#161932]">
          {/* <div className="w-full h-full">*/}
          <div ref={progressBarRef} className="circular-progress">
            <div className="intern-circle"></div>
            <div className="time-container flex flex-col justify-center items-center">
              <div className={clsx(
                "time tracking-[5px]",
                { "tracking-[-10px]": formValue.font === "Space" },
                formValue.font === "Space" && Space.className, // Ajoute la classe si la condition est vraie
                formValue.font === "Roboto" && Roboto.className
              )}>{formatTime(remainingTime)}</div>
              <button
                onClick={handleButtonClick}
                className={clsx(
                  "tracking-[15px]",
                  `hover:text-[${formValue.color}] transition duration-300 ease-in-out`, // Cela peut être problématique, voir note ci-dessous
                  formValue.font === "Space" && Space.className, // Ajoute Space.className si condition vraie
                  formValue.font === "Roboto" && Roboto.className // Ajoute Roboto.className si condition vraie
                )}
              >
                {getButtonLabel()}
              </button>
            </div>
          </div>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
