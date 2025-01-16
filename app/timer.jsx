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
        return " PAUSE";
      case "restart":
        return " RESTART";
      default:
        return " START";
    }
  };

  return (
    <div>
      <div className="sm:w-[410px] sm:h-[410px] w-[350px] h-[350px] mx-auto mt-10 p-6 rounded-full timer-ring">
        <div className="timer w-full rounded-full z-50 border-[13px] border-solid border-[#161932]">
          <div ref={progressBarRef} className="circular-progress">
            <div className="intern-circle"></div>
            <div className="time-container flex flex-col justify-center items-center gap-0">
              <div className={clsx(
                "time sm:text-[100px] text-[70px]",
                { "tracking-[5px] mr-[-5px]": formValue.font !== "Space" && formValue.font !== "Roboto" },
                { "tracking-[-5px]": formValue.font === "Space" },
                { "tracking-[5px]": formValue.font === "Roboto" },
                { [Space.className]: formValue.font === "Space" },
                { [Roboto.className]: formValue.font === "Space" }
              )}>{formatTime(remainingTime)}
              </div>
              <button
                onClick={handleButtonClick}
                className={clsx(
                  "tracking-[15px] sm:text-[16px] text-[14px] text-center mr-[-15px]",
                  `hover:text-[${formValue.color}] transition duration-300 ease-in-out`,
                  { [Space.className]: formValue.font === "Space" },
                  { [Roboto.className]: formValue.font === "Roboto" }
                )}
              >
                {getButtonLabel()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
