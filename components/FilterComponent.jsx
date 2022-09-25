import React from "react";

const FilterComponent = ({filterText, onFilter, onClear}) => (
  <section className="bg-indigo-dark h-50">
    <div className="flex gap-4">
      <input
        value={filterText}
        onChange={onFilter}
        id="search"
        aria-label="Seatch Input"
        className="w-full h-12 rounded-md focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg hover:opacity-80 transition ease-in-out duration-75"
        type="search"
        placeholder="Filtrar Contratos..."
      />
    </div>
  </section>
);

export default FilterComponent;
