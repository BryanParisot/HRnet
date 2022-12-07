import React from "react";
import { Link } from "react-router-dom";

const Nodata = () => {
  return (
    <div className="flex min-h-full">
      <div className="mx-auto my-auto text-center py-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Aucune données employées
        </h2>
        <Link
          type="button"
          class=" mt-5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        to="/"
        >
          Crée un employé
        </Link>
      </div>
    </div>
  );
};

export default Nodata;
