import React from "react";

const Input = (props) => {
  return (
    <div className="mt-2">
      <label
        htmlFor={props.labelId}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          required
          type={props.type}
          id={props.labelId}
          name={props.labelId}
          className="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
