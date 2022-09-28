import { useContext } from "react";
import Chart from "../components/Chart";
import ContratosByTipo from "../components/ContratosByEstado";
import { DataContext } from "../context/dataContext";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";

export default function Graphs() {

  const { formattedData, headers } = useContext(DataContext);
  // console.log(formattedData)
  return (
    <main className="mt-6 px-16">
      {/* <h1 className="text-center">En qué se gastan tu dinero?</h1> */}
      <div className="flex justify-around">
        <div>
          <ContratosByTipo contratos={formattedData}/>
          <Chart contratos={formattedData}/>
        </div>
      </div>
    </main>
  );
}
