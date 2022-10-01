//Icons

import Hero from "../components/Hero";

//mongodb Connection
// import dbConnect from "../lib/dbConnect";

export default function Home() {
  // console.log(JSON.stringify(contratos) )
  return (
        <Hero />
  );
}

/* Retrieves pet(s) data from mongodb database */
// export async function getServerSideProps() {
//   try {
//     // await dbConnect()

//     return {props: ({licitaciones})}

//   } catch (error) {
//     console.error(error);
//   }

// }
