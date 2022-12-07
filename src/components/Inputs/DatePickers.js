import React from "react";

const DatePickers = (props) => {
  return (
    <div className="mt-2">
      <label
        for={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          type="date"
          name={props.name}
          id={props.name}
          className="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default DatePickers;
