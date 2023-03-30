import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";
import { useRouter } from "next/router";

import logo from "@@/public/logo_without_bg.png";

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--raleway-font",
});

const NavMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center justify-between flex-wrap p-6">
      <div className="flex text-center items-center cursor-pointer">
        <Image src={logo} alt="logo" className="mx-2" />
        <h1>
          <Link href="/">WOAMAZING</Link>
        </h1>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3"
      >
        <svg
          className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>

      <nav
        style={raleway.style}
        className={`w-full block flex-grow items-center justify-center
        mx-2 mt-4 pb-5 text-center
        border-b-2
        md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <Link
          href="/"
          className={`block pb-1 
            ${router.pathname == "/" ? "text-[#6E9C9F] font-bold" : ""}`}
        >
          Главная
        </Link>
        <Link
          href="/shop"
          className={`block pb-1
            ${router.pathname == "/shop" ? "text-[#6E9C9F] font-bold" : ""}`}
        >
          Магазин
        </Link>
        <Link
          href="/about"
          className={`block pb-1
          ${router.pathname == "/about" ? "text-[#6E9C9F] font-bold" : ""}`}
        >
          О бренде
        </Link>
        <Link
          href="/contacts"
          className={`block ${
            router.pathname == "/contacts" ? "text-[#6E9C9F] font-bold" : ""
          }`}
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};

export default NavMenu;
