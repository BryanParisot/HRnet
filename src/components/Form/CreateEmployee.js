import React from "react";

const CreateEmployee = () => {
  return (
    <div className="bg-white py-8 px-4 shadow mt-10 sm:rounded-lg sm:px-10 w-10/12">
      <h2 className="text-center font-bold text-xl text-gray-900">
        Create Employees
      </h2>
      <form className="flex flex-col pt-4 space-x-6 items-center space-y-5">
        <div className="flex space-x-4 w-10/12">
          <div className="w-1/4 ">
            <label for="email" class="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="firstName"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Joris"
              />
            </div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mt-4"
            >
              Last Name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="lastName"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Lejeau"
              />
            </div>
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
            <label for="email" class="block text-sm font-medium text-gray-700">
              Street
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="street"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="9 rue asert"
              />
            </div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mt-4"
            >
              City
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="city"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Londre"
              />
            </div>
          </div>
          {/* spaceeeeeeeee */}
          <div className="w-1/4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              State
            </label>
            <div class="mt-1">
              <select
                id="location"
                name="location"
                className="mt-1 block w-full p-2 rounded-md shadow border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mt-4"
            >
              Zip Code
            </label>
            <div class="mt-1">
              <input
                type="number"
                name="city"
                class="block w-full p-2 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="123"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 text-center">
          {" "}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full rounded-md shadow border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue="Sales"
            >
              <option>Sales</option>
              <option>Marketing</option>
            </select>
          </div>{" "}
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
    </div>
  );
};

export default CreateEmployee;
