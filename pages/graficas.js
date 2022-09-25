import Table from "../components/Table";
import contratos from "../db/licitaciones.json";

//Icons
import { useEffect, useState } from "react";
import Chart from "../components/Chart";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";

export default function Graphs() {

  // console.log(JSON.stringify(contratos) )
  return (
    <main className="mt-12 px-16">
      <h1 className="text-center mb-5">En qué se gastan tu dinero?</h1>
      <div className="flex justify-around">
        <div>
          <Chart />
        </div>
      </div>
    </main>
  );
}
