import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiOutlineSearch } from "react-icons/ai";
import FilterComponent from "./FilterComponent";

function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "€";
}

export default function Table({ contratos }) {
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLicitaciones(JSON.parse(contratos));
    setLoading(false);
  }, [loading, contratos]);



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
      selector: (row) => Number(row.importe.replace(".", "").replace(",", ".")) + " €",
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
      <div className="inline-block w-full mb-4">
        <FilterComponent />
      </div>
      <DataTable
        tittle="Licitaciones Ayuntamiento Marbella"
        columns={columns}
        data={licitaciones}
        progressPending={loading}
        pagination
        highlightOnHover
        fixedHeader
      />
    </div>
  );
}
