"use client";

import React, { useState, useEffect } from "react";

const TimeButton = ({ setting, timeValues, handleChange }) => {
  // État local pour gérer la valeur
  const [value, setValue] = useState(timeValues[setting.id]);

  // Synchronisation de l'état local lorsque timeValues change dans le parent
  useEffect(() => {
    setValue(timeValues[setting.id]);
  }, [timeValues, setting.id]);

  // Gestion de l'incrémentation
  const increment = () => {
    const newValue = Math.min(value + 1, setting.max);
    setValue(newValue);
    handleChange({ target: { id: setting.id, value: newValue } });
  };

  // Gestion de la décrémentation
  const decrement = () => {
    const newValue = Math.max(value - 1, setting.min);
    setValue(newValue);
    handleChange({ target: { id: setting.id, value: newValue } });
  };

  return (
    <div key={setting.id} className="flex sm:flex-col justify-between flex-row">
      <label htmlFor={setting.id} className="text-[12px] py-2 flex flex-col justify-center">
        {setting.label}
      </label>
      <div className="custom-number-input">
        <input
          type="number"
          id={setting.id}
          value={value}
          onChange={(e) => {
            const newValue = Math.min(
              Math.max(Number(e.target.value), setting.min),
              setting.max
            );
            setValue(newValue);
            handleChange(e); // Propagation au parent
          }}
          min={setting.min}
          max={setting.max}
          readOnly
          aria-label={`Set ${setting.label.toLowerCase()} duration`}
          className="h-[20px] w-[140px] pl-[20px] text-[18px] bg-[#EFF1FA] rounded-[10px] border-none py-[25px]"
        />
        <div className="controls">
          <button type="button" onClick={increment} className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                strokeOpacity=".25"
                strokeWidth="2"
                d="M1 6l6-4 6 4"
              />
            </svg>
          </button>
          <button type="button" onClick={decrement} className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                strokeOpacity=".25"
                strokeWidth="2"
                d="M1 1l6 4 6-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeButton;
