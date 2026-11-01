import Image from "next/image";
import FooterLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className=" sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <div className="max-w-7xl mx-auto items-center footer flex flex-col gap-4 md:flex-row md:justify-between  sm:footer-horizontal">
        <aside className="grid-flow-col items-center">
          <div className="flex items-center gap-2">
            <Image src={FooterLogo} width={30} height={40} alt="Footer logo" />
            <h2 className="text-lg font-bold text-white">FITLOG</h2>
          </div>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-gray-500">Copyright © {new Date().getFullYear()} - Workout Library. Train hard, log honest.</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
