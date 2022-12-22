import { useState } from "react";
import { departments } from "../../data/department";
import Input from "../Inputs/Input";
import { Modal } from "@bryan__parisot/component-modal-dropdown-datepicker-tailwind-css";
import { states } from "./state";
import Dropdown from "../Inputs/Dropdown";
import DatePickers from "../Inputs/DatePickers";

const CreateEmployee = () => {
  const [state, setState] = useState({ name: "Alabama" });
  const [dateBirth, setDateBirth] = useState("1990-01-01");
  const [startDate, setStartDate] = useState("2000-01-01");
  const [department, setDepartment] = useState({
    name: "Sales",
    abbreviation: "Sal",
  });
  const [validate, setValidate] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value,
    });
  };

  const resetInput = () => {
    setInput({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      zipCode: "",
    });
    setDepartment({
      name: "",
      abbreviation: "",
    });
    setDateBirth("");
    setStartDate("");
    setState({ name: "" });
  };

  const addEmployees = (e) => {
    e.preventDefault();

    let dataEmployees = JSON.parse(localStorage.getItem("employee") || "[]");
    let data = {
      "First Name": input.firstName,
      "Last Name": input.lastName,
      "Date of Birth": new Date(dateBirth).toLocaleDateString("fr"),
      "Start Date": new Date(startDate).toLocaleDateString("fr"),
      Street: input.street,
      City: input.city,
      State: state.abbreviation,
      "Zip Code": input.zipCode,
      Department: department.name,
    };


    dataEmployees.push(data);

    localStorage.setItem("employee", JSON.stringify(dataEmployees));

    resetInput();

    setValidate(true);
  };

  return (
    <div className="bg-white py-8 px-4 shadow mt-10 sm:rounded-lg sm:px-10 w-10/12">
      <h2 className="text-center font-bold text-xl text-gray-900">
        Create Employees
      </h2>
      <form
        onSubmit={addEmployees}
        className="flex flex-col pt-4 sm:space-x-6 items-center sm:space-y-5"
      >
        <div className="flex flex-col sm:space-x-4 w-10/12 sm:flex-row">
          <div className="sm:w-1/4 3/4 ">
            <Input
              type="text"
              label="First name"
              placeholder="Boris"
              labelId="firstName"
              value={input.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              label=" Last Name"
              placeholder="king"
              labelId="lastName"
              value={input.lastName}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="sm:w-1/4 3/4 ">
            <DatePickers
              name="dateOfBirth"
              label="Date of Birth"
              onChange={(e) => setDateBirth(e.target.value)}
              value={dateBirth}
            />
            <DatePickers
              name="startDate"
              label="Start Date"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
          <div className="sm:w-1/4 3/4 ">
            <Input
              type="text"
              label="Street"
              placeholder="9 rue boy"
              labelId="street"
              value={input.street}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="City"
              placeholder="London"
              labelId="city"
              value={input.city}
              onChange={handleChange}
            />
          </div>
          <div className="sm:w-1/4 3/4 ">
            <Dropdown
              placeholder="Choose your state"
              setSelected={setState}
              selected={state.name}
              options={states}
              label="State"
              name="State"
              onChange={(e) => e.target.value}
            />

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
        <div className="sm:w-1/4 w-10/12 sm:3/4 sm:text-center ">
          {" "}
          <Dropdown
            placeholder="Choose your department"
            setSelected={setDepartment}
            selected={department.name}
            options={departments}
            label="Department"
            name="Department"
            onChange={(e) => e.target.value}
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full p-2  mt-4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
      {validate ? (
        <Modal
          title="Users create"
          subtitle=" You can access the users in the
                    employees"
          button="Back to employee creation"
          displayModal={setValidate}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateEmployee;
