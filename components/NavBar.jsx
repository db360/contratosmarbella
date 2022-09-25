import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [dropHidden, setDropHidden] = useState(false);
// console.log(dropHidden)
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
          <div className="group inline-block">
      <button className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32">
        <span className="pr-1 font-semibold flex-1">Contratos</span>
        <span >
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className="pt-2 rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out origin-top min-w-40 bg-gray-900"
      >
       <Link href="/licitaciones"><li className="cursor-pointer rounded-sm px-3 py-1 bg-gray-900 hover:opacity-60">Licitationes</li></Link>
       <Link href="/contratos-menores"><li className="cursor-pointer rounded-sm px-3 py-1 bg-gray-900 hover:opacity-60">Contratos Menores</li></Link>
      </ul>
    </div>
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
  );
};

export default NavBar;
