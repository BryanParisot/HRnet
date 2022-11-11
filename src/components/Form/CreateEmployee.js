import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { departements } from "../../data/departement";
import { addEmploye } from "../../redux/features/employees";
import Dropdown from "../Inputs/Dropdown";
import Input from "../Inputs/Input";
import Modal from "../Modal/Modal";
import { states } from "./state";

const CreateEmployee = () => {
  const [validate, setValidate] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value,
    });
  };

  const addEmployees = (e) => {
    e.preventDefault();
    dispatch(addEmploye({ input }));
  };

  return (
    <div className="bg-white py-8 px-4 shadow mt-10 sm:rounded-lg sm:px-10 w-10/12">
      <h2 className="text-center font-bold text-xl text-gray-900">
        Create Employees
      </h2>
      <form
        onSubmit={addEmployees}
        className="flex flex-col pt-4 space-x-6 items-center space-y-5"
      >
        <div className="flex space-x-4 w-10/12">
          <div className="w-1/4 ">
            <Input
              type="text"
              label="First name"
              placeholder="Joris"
              labelId="firstName"
              value={input.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              label=" Last Name"
              placeholder="Lejeau"
              labelId="lastName"
              value={input.lastName}
              onChange={handleChange}
            />
          </div>{" "}
          {/* spaceeeeeee */}
          <div className="w-1/4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div class="mt-1">
              <input
                type="date"
                name="dateOfBirth"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mt-4"
            >
              Start Date
            </label>
            <div class="mt-1">
              <input
                type="date"
                name="startDate"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          {/* spaceeeeeeeeeeee */}
          <div className="w-1/4">
            <Input
              type="text"
              label="Street"
              placeholder="9 rue asert"
              labelId="street"
              value={input.street}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="City"
              placeholder="Londre"
              labelId="city"
              value={input.city}
              onChange={handleChange}
            />
          </div>
          {/* spaceeeeeeeee */}
          <div className="w-1/4">
            <Dropdown options={states} label="State" />

            <Input
              type="number"
              label=" Zip Code"
              placeholder="123" 
              labelId="zipCode"
              value={input.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-1/4 text-center">
          {" "}
          <Dropdown options={departements} label="Department" />
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full p-2  mt-4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
      {validate ? <Modal result={setValidate} /> : ""}
    </div>
  );
};

export default CreateEmployee;
