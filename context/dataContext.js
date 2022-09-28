import moment from "moment";
import { createContext } from "react";
import data from "../db/licitacionesFECHASJUNTAS.json";

export const DataContext = createContext();

// const importe = parseFloat(data.importe.replace(",", ""))

export const DataProvider = ({ children }) => {
  const headers = [
    { key: "name", label: "Name" },
    { key: "tipo", label: "Tipo" },
    { key: "objetivo_contrato", label: "Objetivo Contrato" },
    { key: "status", label: "Status" },
    { key: "importe", label: "Importe" },
    { key: "fecha", label: "Fecha" },
  ];

  const formattedData = data.map((data) => {
    // const fechaFormat = moment(data.fecha, "DD/MM/YYYY", true).format(
    //   "DD/MM/YYYY"
    // );

    return {
      importe: data.importe,
      fecha: data.fechas,
      name: data.expediente,
      objcontrato: data.objetoContrato,
      estado: data.estado,
      tipo: data.tipo,
    };
  });

  // console.log(formattedData)

  return (
    <DataContext.Provider value={{ formattedData, headers }}>
      {children}
    </DataContext.Provider>
  );
};
