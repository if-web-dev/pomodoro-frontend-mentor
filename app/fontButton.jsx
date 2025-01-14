"use client";

const FontButton = ({ button, activeFont, setActiveFont }) => (
  <div
    key={button.id}
    className={`relative cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EFF1FA] ${
      activeFont === button.id ? "ring-2 ring-blue-500" : ""
    }`}
  >
    <input
      type="radio"
      name="font"
      value={button.id}
      checked={activeFont === button.id}
      onChange={() => setActiveFont(button.id)}
      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
    />
    <span className={`${button.fontClass} text-base`}>Aa</span>
  </div>
);

export default FontButton