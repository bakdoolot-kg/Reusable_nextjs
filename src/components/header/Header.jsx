import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { useRouter } from "next/router";
import Container from "../Container";

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--raleway-font",
});

import telephoneIcon from "@/static/telephone.svg";
import logo from "@@/public/logo_without_bg.png";
import cartIcon from "@/static/cart.png";
import SvgTelephone from "./lib/svgTelephone";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <header className="header py-6 hidden md:block" style={raleway.style}>
        <div className="flex items-center justify-between">
          {/* === Logo block === */}
          <div className="flex text-center items-center cursor-pointer">
            <Image src={logo} alt="logo" className="mx-2" />
            <h1>
              <Link href="/">WOAMAZING</Link>
            </h1>
          </div>

          {/* === navigation === */}
          <nav className="flex flex-wrap">
            <Link
              href="/"
              className={`mr-9 ${
                router.pathname == "/" ? "text-[#6E9C9F] font-bold" : ""
              }`}
            >
              Главная
            </Link>
            <Link
              href="/shop"
              className={`mr-9 ${
                router.pathname == "/shop" ? "text-[#6E9C9F] font-bold" : ""
              }`}
            >
              Магазин
            </Link>
            <Link
              href="/about"
              className={`mr-9 ${
                router.pathname == "/about" ? "text-[#6E9C9F] font-bold" : ""
              }`}
            >
              О бренде
            </Link>
            <Link
              href="/contacts"
              className={`${
                router.pathname == "/contacts" ? "text-[#6E9C9F] font-bold" : ""
              }`}
            >
              Контакты
            </Link>
          </nav>

          {/* === Contacts === */}
          <div className="flex text-center items-center">
            <div className="flex items-center justify-items-center">
              {/* <Image
                src={telephoneIcon}
                alt="telephone"
                className="hover:bg-[#6E9C9F] mr-1 icon-svg"
                quality="100"
              /> */}

              <SvgTelephone background="none" fill="#6E9C9F" />

              <p>+7 (495) 823-54-12</p>
            </div>

            <Link href="/cart">
              <Image src={cartIcon} alt="cart icon" className="mx-4" />
            </Link>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
