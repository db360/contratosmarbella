import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const FilterComponent = () => (
  <section className="bg-indigo-dark h-50">
    <div className="flex gap-4">
      <input
        className="w-full flex-4 h-12 rounded-md focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
        type="search"
        placeholder="Buscar Contratos..."
      />
      <div className="h-12 flex ">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-md inline-flex items-center">
          <h2 className="text-sm">Buscar Contratos </h2>{" "}
          <span className="ml-2">
            <AiOutlineSearch size={20} className={""} />
          </span>
        </button>
      </div>
    </div>
      <nav className="flex mt-3">
        <a
          className="no-underline text-white py-3 px-4 font-medium mr-3 bg-indigo hover:bg-slate-700 rounded-lg"
          href="#"
        >
          Obras
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-slate-700 rounded-lg"
          href="#"
        >
          Servicios
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-slate-700 rounded-lg"
          href="#"
        >
          Servicios
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-slate-700 rounded-lg"
          href="#"
        >
          Suministros
        </a>
        <a
          className="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-slate-700 rounded-lg transition-opacity duration-75"
          href="#"
        >
          Obras
        </a>
      </nav>
  </section>
);

export default FilterComponent;
