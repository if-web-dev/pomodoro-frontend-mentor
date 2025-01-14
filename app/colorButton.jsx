"use client";

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
      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
    />
    {activeColor === button.id && <FaCheck className="text-white" />}
  </div>
);

export default ColorButton