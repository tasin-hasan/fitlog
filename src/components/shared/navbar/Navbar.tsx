import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm border-b border-b-gray-700">
      <div className="max-w-7xl mx-auto navbar px-2 sm:px-4">
        <div className="navbar-start min-w-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={Logo} width={30} height={30} alt="Website Logo" />
            <Link href={"/"} className="text-md font-bold">
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 sm:gap-5">
          <Link href={"/my-plan"}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <p className="text-sm">Plan</p>
              <p className="text-black bg-[#c2f700] text-sm  rounded-full px-2 ">
                0
              </p>
            </div>
          </Link>

          <Link href={"/my-plan"}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <p className="text-sm">Saved</p>
              <p className="text-gray-300 border border-gray-400  rounded-full px-2 text-sm">
                0
              </p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
