import Table from "../components/Table";
import contratos from "../db/licitaciones.json";


//Icons
import { useEffect, useState } from "react";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";

export default function Home() {
  const [licitaciones, setLicitaciones] = useState(JSON.stringify(contratos));


  console.log(JSON.stringify(contratos.importe) )
  return (
    <main className="w-screen">
      <div className="container mx-auto overflow-x-auto">
        <Table contratos={licitaciones}></Table>
      </div>
    </main>
  );
}

