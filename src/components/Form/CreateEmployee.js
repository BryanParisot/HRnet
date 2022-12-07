import { useState } from "react";
import { departements } from "../../data/departement";
import Input from "../Inputs/Input";
import {
  Modal,
} from "@bryan__parisot/component-modal-dropdown-datepicker-tailwind-css";
import { states } from "./state";
import Dropdown from "../Inputs/Dropdown";
import DatePickers from "../Inputs/DatePickers";

const CreateEmployee = () => {
  const [state, setState] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [departement, setDepartement] = useState("");
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
    setDepartement("");
    setDateBirth("");
    setStartDate("");
    setState("");
  };

  const addEmployees = (e) => {
    e.preventDefault();

    let datas = JSON.parse(localStorage.getItem("employe") || "[]");
    let data = {
      "First Name": input.firstName,
      "Last Name": input.lastName,
      "Date of Birth": new Date(dateBirth).toLocaleDateString("fr"),
      "Start Date": new Date(startDate).toLocaleDateString("fr"),
      Street: input.street,
      City: input.city,
      State: state.abbreviation,
      "Zip Code": input.zipCode,
      Department: departement.name,
    };

    datas.push(data);

    localStorage.setItem("employe", JSON.stringify(datas));

    resetInput();

    setValidate(true);
  };
  
  console.log(departement)
  console.log(state)

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
            <Dropdown
              placeholder="Choose your state"
              setSelected={setState}
              selected={state.name}
              options={states}
              label="State"
              name="State"
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
        <div className="w-1/4 text-center">
          {" "}
          <Dropdown
            placeholder="Choose your department"
            setSelected={setDepartement}
            selected={departement.name}
            options={departements}
            label="Department"
            name="Department"
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
          button=" Revenir sur la création d'employé"
          subtitle=" Vous pouvez accéder aux utilisateurs dans la rubrique
                    employees"
          title="Utilisateur crée"
          displayModal={setValidate}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateEmployee;
