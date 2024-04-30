import React from "react";
import { useFormikContext } from "formik";

const Tables = ({ name, options }) => {
  const { getFieldProps } = useFormikContext();

  return (
    <>
      <p className="text-primary1 text-base mb-2">
        Please select the available table to reserve it.
      </p>
      <div
        role="radiogroup"
        className="grid grid-cols-3 gap-4 p-3 border border-darkGray rounded-2xl"
      >
        {options.map(({ id, availability, persons }) => (
          <label key={id} className="flex items-center justify-center w-full">
            <input
              type="radio"
              {...getFieldProps(name)}
              value={id}
              checked={getFieldProps(name).value === id}
              className="sr-only"
              disabled={!availability}
            />
            <div
              className={`w-20 aspect-square border-2 rounded-md flex items-center justify-center bg-primary1 p-2 ${
                getFieldProps(name).value === id
                  ? "border-primary2"
                  : "border-transparent"
              } ${!availability ? "opacity-60" : ""}`}
            >
              <span
                className={`text-white text-base text-center`}
              >{`${persons} persons`}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Tables;
