import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDown from "./dropDown";

const NavBar = () => {
  const [dropHidden, setDropHidden] = useState(false);
console.log(dropHidden)
  function toggleDropHidden() {
    setDropHidden(!dropHidden);
  }

  function hideNavBar() {
    if(dropHidden) {
      setDropHidden(false)
    }
  }
  return (
    <section className="relative mx-auto">
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          Marbella
         {/* <Image height={30} width={30} class="h-9" src="logo.png" alt="logo" /> */}
        </a>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 items-center">
          <Link href="/"><a className="hover:opacity-60" >Home</a></Link>
          <Link href="/"><a className="" ><DropDown /></a></Link>
          <Link href="/graficas" ><a className="hover:opacity-60">Gráficas</a></Link>
          <Link href="/foro"><a className="hover:opacity-60" >Foro</a></Link>
        </ul>
      </div>

      <a className="navbar-burger self-center mr-12 md:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    </section>
    // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-900">
    //   <div className="container flex flex-wrap justify-between items-center mx-auto">
    //     <div className="flex items-center">
    //       <Image
    //         width={30}
    //         height={30}
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         className="h-6 sm:h-9"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="ml-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //         <Link href="/">Contratos Marbella</Link>
    //       </span>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
