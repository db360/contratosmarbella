import Table from "../components/Table";
import { DataContext } from "../context/dataContext";



//Icons
import { useContext } from "react";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";

export default function Home() {

  const { formattedData, headers } = useContext(DataContext);

  return (
    <main className="w-screen">
      <div className="container mx-auto overflow-x-auto">
        <Table contratos={formattedData}></Table>
      </div>
    </main>
  );
}

