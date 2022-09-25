import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble, Doughnut, Line } from "react-chartjs-2";
import contratos from "../db/licitaciones.json";
import moment from "moment/moment";

ChartJS.register(
  ArcElement,
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const [licitaciones, setLicitaciones] = useState(JSON.stringify(contratos));

  const uniqueTipos = [...new Set(contratos.map((data) => data.tipo))];
  console.log(uniqueTipos);

  const holder = {};

  contratos.forEach(function (d) {
    const importeNumber = parseFloat(
      d.importe.replace(".", "").replace(".", "").replace(",", ".")
    );
    // console.log(importeNumber);
    if (holder.hasOwnProperty(d.tipo)) {
      holder[d.tipo] = holder[d.tipo] + importeNumber;
      // console.log(holder[d.tipo])
    } else {
      holder[d.tipo] = importeNumber;
    }
  });
  console.log(holder, "holder");
  const obj2 = [];
  const obj3 = [];

  for (var prop in holder) {
    obj2.push(holder[prop]);
    obj3.push({ tipo: prop, importe: parseInt(holder[prop]) });
  }

  console.log(obj2);
  // console.log(contratos)
  const totalPresupuesto = obj3.reduce((total, obj) => obj.importe + total, 0);
  console.log(totalPresupuesto, "Presupuesto Total");

  let arraySuministros = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Suministros") {
      arraySuministros.push(obj2[i].importe);
    }
  }
  console.log(arraySuministros, "Total Suministros");

  let arrayServicios = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Servicios") {
      arrayServicios.push(obj2[i].importe);
    }
  }
  console.log(arrayServicios, "Total Servicios");

  let arrayPrivado = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Privado") {
      arrayPrivado.push(obj2[i].importe);
    }
  }
  console.log(arrayPrivado, "Total Privado");

  let arrayPatrimonial = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Patrimonial") {
      arrayPatrimonial.push(obj2[i].importe);
    }
  }
  console.log(arrayPatrimonial, "Total Patrimonial");

  let arrayObras = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Obras") {
      arrayObras.push(obj2[i].importe);
    }
  }
  console.log(arrayObras, "Total Obras");

  let arrayAdministrativo = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Administrativo especial") {
      arrayAdministrativo.push(obj2[i].importe);
    }
  }
  console.log(arrayAdministrativo, "Total Administrativo especial");

  let arrayConcesionServicios = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Concesión de Servicios") {
      arrayConcesionServicios.push(obj2[i].importe);
    }
  }
  console.log(arrayConcesionServicios, "Concesión de Servicios");

  let arrayObrasPublicas = [];
  for (var i = 0; i < obj2.length; i++) {
    if (obj2[i].tipo === "Concesión de Obras Públicas") {
      arrayObrasPublicas.push(obj2[i].importe);
    }
  }
  console.log(arrayObrasPublicas, "Concesión de Obras Públicas");

  // const fechas = formattedData.map((data) => data.fechaFormat)

  // console.log(fechas)

  const data1 = {
    backgroundColor: [
      "rgb(2, 88, 255)",
      "rgb(249, 151, 0)",
      "rgb(255, 199, 0)",
      "rgb(32, 214, 152)",
      "rgb(106, 173, 202)",
      "rgb(222, 166, 226)",
      "rgb(213, 107, 107)",
      "rgb(206, 79, 198)",
    ],
    labels: uniqueTipos,
    datasets: [
      {
        label: "Gastos por Tipo de Contrato",
        data: obj2,
        backgroundColor: [
          "rgb(2, 88, 255)",
          "rgb(249, 151, 0)",
          "rgb(255, 199, 0)",
          "rgb(32, 214, 152)",
          "rgb(106, 173, 202)",
          "rgb(222, 166, 226)",
          "rgb(213, 107, 107)",
          "rgb(206, 79, 198)",
        ],
        hoverOffset: 5,
      },
    ],
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // const data2 = {
  //   labels,
  //   datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //     borderColor: 'rgb(255, 99, 132)',
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     yAxisID: 'y',
  //   },
  //   {
  //     label: 'Dataset 2',
  //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //     borderColor: 'rgb(53, 162, 235)',
  //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     yAxisID: 'y1',
  //   },
  // ],
  // };
  // console.log(Array.from({ length: 50 }, () => ({
  //   x: faker.datatype.number({ min: -100, max: 100 }),
  //   y: faker.datatype.number({ min: -100, max: 100 }),
  //   r: faker.datatype.number({ min: 5, max: 20 }),
  // })),)

  const options1 = {

    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 1.5,
      },
    },
  };

  // const options2 = {
  //   responsive: true,
  //   interaction: {
  //     mode: 'index',
  //     intersect: false,
  //   },
  //   stacked: false,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Gasto según tipo por tiempo',
  //     },
  //   },
  //   scales: {
  //     y: {
  //       type: 'linear',
  //       display: true,
  //       position: 'left',
  //     },
  //     y1: {
  //       type: 'linear',
  //       display: true,
  //       position: 'right',
  //       grid: {
  //         drawOnChartArea: false,
  //       },
  //     },
  //   },
  // };

  return (
    <main className="mt-12 px-16">
      <div className="flex justify-around gap-10">
          <div className="p-4">
            <Doughnut data={data1} options={options1} />
            <h1 className="text-center mt-10">Presupuesto Total:</h1>
            <h2 className="text-center mt-5 font-bold text-xl">
              {totalPresupuesto.toLocaleString() + " €"}{" "}
            </h2>
            {/* <Line data={data2} options={options2} /> */}
          </div>

      </div>
    </main>
  );
};

export default Chart;
