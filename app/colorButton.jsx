"use client";

import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";

const ColorButton = ({ button, activeColor, setActiveColor }) => (
  <div
    key={button.id}
    className={`relative cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center`}
    style={{ backgroundColor: button.bgColor }}
  >
    <input
      type="radio"
      name="color"
      value={button.id}
      checked={activeColor === button.id}
      onChange={() => setActiveColor(button.id)}
      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
    />
    <FaCheck
      className={clsx(
        "text-slate-900 transition-opacity duration-250 ease-in-out",
        { "opacity-100": activeColor === button.id, "opacity-0": activeColor !== button.id }
      )} />
  </div>
);

export default ColorButton