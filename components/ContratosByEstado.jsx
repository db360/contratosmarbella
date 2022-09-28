import React from "react";

const ContratosByTipo = ({ contratos }) => {
  const uniqueTipos = [...new Set(contratos.map((data) => data.tipo))];

  const uniqueEstados = [...new Set(contratos.map((data) => data.estado))];
  // console.log(uniqueEstados);

  // console.log(contratos)

  const countEstados = (arr = []) => {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
      const { estado } = arr[i];
      if (res.hasOwnProperty(estado)) {
        res[estado]++;
      } else {
        res[estado] = 1;
      }
    }
    return res;
  };
  const countByEstados = countEstados(contratos);
  console.log(countByEstados);

  return (
    <div className="flex flex-row gap-5">
      {Object.keys(countByEstados).map((keyName, i) => (
        <div className="travelcompany-input" key={i}>
          {" "}
          {keyName}:
          <span className="font-bold text-lg">{" " + countByEstados[keyName]}</span>
        </div>
      ))}
    </div>
  );
};

export default ContratosByTipo;
