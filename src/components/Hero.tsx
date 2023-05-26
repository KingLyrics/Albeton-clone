export default function Hero() {
  return (
    <main className="p-5">
      <ul className="text-sm flex items-center space-x-3 font-medium md:ml-5 md:pb-6 md:text-[16px]">
        <li>
          <a href="#" className="text-brickorange">
            About
          </a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Apprenticeships</a>
        </li>
      </ul>
      <section className="flex justify-center items-center md:h-screen mt-5 relative">
        <img
          src="../../src/assets/pexels-cottonbro-studio-4064840.jpg"
          alt="A Man staring at a computer"
          className="w-full h-auto md:w-auto md:h-full"
        />
        <h1 className="absolute text-9xl font-bold text-brickorange">
          EkomTon
        </h1>
      </section>
    </main>
  );
}
