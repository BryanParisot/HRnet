import React from "react";
import { Link } from "react-router-dom";
import CreateEmployee from "../components/Form/CreateEmployee";
import Navigation from "../components/Navigations/Navigation";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <div className="flex items-center min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="mt-6 text-center font-bold text-xl text-gray-900">
            HRnet
          </h1>
          <Link
            to="employees"
            className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
          >
            View Current Employees
          </Link>
        </div>
        <CreateEmployee />
      </div>
    </div>
  );
};

export default Home;
