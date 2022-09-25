import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

// function currencyFormat(num) {
//   return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "€";
// }

export default function Table({ contratos }) {
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = licitaciones.filter(
    (item) =>
      item.objetivo && item.objetivo.toLowerCase().includes(filterText.toLowerCase())  ||
      item.tipo && item.tipo.toLowerCase().includes(filterText.toLowerCase())  ||
      item.estado && item.estado.toLowerCase().includes(filterText.toLowerCase())  ||
      item.noExpediente && item.noExpediente.toLowerCase().includes(filterText.toLowerCase())  ||
      item.fecha && item.fecha.toLowerCase().includes(filterText.toLowerCase())  ||
      item.importe && item.importe.toLowerCase().includes(filterText.toLowerCase())
  );
 console.log(licitaciones);
  useEffect(() => {
    setLoading(true);
    setLicitaciones(JSON.parse(contratos));
    setLoading(false);
  }, [loading, contratos]);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);

        setFilterText("");
      }
    };

    return (
      <div className="w-full flex flex-col mt-5 mx-auto">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
      <nav className="flex mt-3 place-content-center">
      <a
        className="no-underline text-black py-3 px-4 font-medium mr-3 bg-indigo hover:bg-slate-300 rounded-lg"
        href="#"
      >
        Obras
      </a>
      <a
        className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-slate-300 rounded-lg"
        href="#"
      >
        Servicios
      </a>
      <a
        className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo hover:bg-slate-300 rounded-lg"
        href="#"
      >
        Servicios
      </a>
      <a
        className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-slate-300 rounded-lg"
        href="#"
      >
        Suministros
      </a>
      <a
        className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo hover:bg-slate-300 rounded-lg transition-opacity duration-75"
        href="#"
      >
        Obras
      </a>
    </nav>
    </div>
    );
  }, [filterText, resetPaginationToggle]);

  const columns = [
    {
      id: "id",
      name: "ID",
      selector: (row) => row.noExpediente,
      sortable: true,
      maxWidth: "8%",
    },
    {
      id: "tipo",
      name: "Tipo",
      selector: (row) => row.tipo,
      sortable: true,
      maxWidth: "9%",
    },
    {
      id: "name",
      name: "Objectivo del Contrato",
      selector: (row) => row.objetivo,
      sortable: true,
      maxWidth: "50%",
      wrap: true,
    },
    {
      id: "estado",
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
      maxWidth: "7%",
    },
    {
      id: "importe",
      name: "Importe",
      selector: (row) =>
        (row.importe) + " €",
      sortable: true,
      maxWidth: "10%",
    },
    {
      id: "fecha",
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
      maxWidth: "20%",
      wrap: true,
    },
  ];

  return (
    <div className="p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Licitaciones:
      </h2>
      {/* <div className="inline-block w-full mb-4">
        <FilterComponent filterText={filterText}
onFilter={onFilter}/>
      </div> */}
      <DataTable
      keyField="id"
        tittle="Licitaciones Ayuntamiento Marbella"
        columns={columns}
        data={filteredItems}
        progressPending={loading}
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        pagination
        highlightOnHover
        fixedHeader
      />
    </div>
  );
}
