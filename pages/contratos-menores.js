import { useContext } from "react";
import { DataContext } from "../context/dataContext";

//COMPONENT
import TableCMenores from "../components/TableCMenores";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";\contratos-menores

export default function Home() {

  const { formattedCMenores, headers } = useContext(DataContext);

  return (
    <main className="w-screen">
      <div className="container mx-auto sm:px-0 overflow-x-auto">
        <TableCMenores contratos={formattedCMenores}></TableCMenores>
      </div>
    </main>
  );
}

