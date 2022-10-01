import Image from "next/image";

const Hero = () => {
  return (

    <section className="relative overflow-hidden">
        <Image
        className="-z-50 absolute opacity-40 filter blur-md"
        alt="hero picture contratosdemarbella.com"
        priority
        layout="fill"
        objectFit="cover" // change to suit your needs
        src="https://cdn.pixabay.com/photo/2016/08/14/16/53/internet-1593378_1280.jpg"
      />
      <div className="max-w-screen-xl px-4 lg:py-32 py-24 mx-auto lg:items-center lg:flex">
        <div className="max-w-xl mx-auto text-center ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            ContratosdeMarbella
            <strong className="font-extrabold text-cyan-700">.com</strong>
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            Bienvenidos al portal <strong className="font-extrabold text-cyan-700">independiente</strong> de licitaciones y contratos menores de la ciudad de
            Marbella
          </p>

          {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white bg-cyan-600 rounded shadow sm:w-auto active:bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium text-cyan-600 rounded shadow sm:w-auto hover:text-cyan-700 active:text-cyan-500 focus:outline-cyan-700 focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>

    // <div className="relative w-full-z-40">
    //   <div className="absolute z-40 text-center w-full">
    //     <h1 className="pt-50">CONTRATOSDEMARBELLA.COM</h1>
    //   </div>
    //   <div className="h-96 filter blur-sm contrast-75 opacity-75">
    //     <Image
    //       alt="hero picture"
    //       priority
    //       layout="fill" // required
    //       objectFit="cover" // change to suit your needs
    //       src="https://cdn.pixabay.com/photo/2016/08/14/16/53/internet-1593378_1280.jpg"
    //     />
    //   </div>
    // </div>
  );
};

export default Hero;
