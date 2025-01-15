"use client";

import { Roboto_Slab } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { useState } from "react";
import ColorButton from "./colorButton.jsx";
import FontButton from "./fontButton.jsx";


const Roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
});

const Space = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const colorButtons = [
  { id: 1, bgColor: "#F87070" },
  { id: 2, bgColor: "#70F3F8" },
  { id: 3, bgColor: "#D881F8" },
];

const fontButtons = [
  { id: 1, fontClass: "", label: "Default font" },
  { id: 2, fontClass: Roboto.className, label: "Roboto" },
  { id: 3, fontClass: Space.className, label: "Space" },
];

const timeSettings = [
  { id: "pomodoro", label: "Pomodoro", min: 1, max: 25 },
  { id: "shortBreak", label: "Short Break", min: 3, max: 10 },
  { id: "longBreak", label: "Long Break", min: 15, max: 30 },
];


export default function Settings({ isVisible, setIsVisible, onSubmit }) {
  
  const [timeValues, setTimeValues] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [activeColor, setActiveColor] = useState(1);
  const [activeFont, setActiveFont] = useState(1);


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.({
      time: timeValues,
      color: colorButtons[activeColor - 1].bgColor,
      font: fontButtons[activeFont - 1].label,
    });
    setIsVisible(false);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const inputValue = Number(value);

    const setting = timeSettings.find((setting) => setting.id === id);
    if (setting && !isNaN(inputValue) && inputValue >= setting.min && inputValue <= setting.max) {
      setTimeValues((prevValues) => ({
        ...prevValues,
        [id]: inputValue,
      }));
    }
  };

  return (
    <div
      className={`${isVisible ? "" : "hidden"} w-[540px] h-[490px] bg-white rounded-[25px] text-[#161932] settings z-50`}
    >
      <div className="px-10 pt-10 pb-5 flex justify-between items-center">
        <h2 className="text-[28px]">Settings</h2>
        <button onClick={() => setIsVisible(false)} aria-label="Close settings">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#1E213F"
              fillRule="evenodd"
              d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
              opacity=".5"
            />
          </svg>
        </button>
      </div>
      <hr />
      <form className="px-10" onSubmit={handleSubmit}>
        {/* Time Settings */}
        <div>
          <h3 className="text-[13px] uppercase tracking-[5px] pt-8">
            Time (minutes)
          </h3>
          <div className="flex gap-4 py-4 justify-between">
            {timeSettings.map((setting) => (
              <div key={setting.id}>
                <label htmlFor={setting.id} className="text-[12px] py-2">
                  {setting.label}
                </label>
                <input
                  type="number"
                  id={setting.id}
                  value={timeValues[setting.id]}
                  onChange={handleChange}
                  min={setting.min}
                  max={setting.max}
                  aria-label={`Set ${setting.label.toLowerCase()} duration`}
                  className="border w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        {/* Font Buttons */}
        <div className="py-8 flex justify-between">
          <h3 className="text-[13px] uppercase tracking-[5px]">Font</h3>
          <div className="flex gap-[16px]">
            {fontButtons.map((button) => (
              <FontButton
                key={button.id}
                button={button}
                activeFont={activeFont}
                setActiveFont={setActiveFont}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* Color Buttons */}
        <div className="py-8 flex justify-between">
          <h3 className="text-[13px] uppercase tracking-[5px]">Color</h3>
          <div className="flex gap-[16px]">
            {colorButtons.map((button) => (
              <ColorButton
                key={button.id}
                button={button}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            ))}
          </div>
        </div>
        {/* Submit */}
        <div className="flex justify-center">
          <button
            className="w-[140px] rounded-[26.5px] bg-[#F87070] py-4 text-white"
            type="submit"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

