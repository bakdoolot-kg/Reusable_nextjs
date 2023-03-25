import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import logo from "../../public/logo_without_bg.png";

const Header = () => {
  return (
    <header className="header py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex text-center items-center">
            <Image src={logo} alt="logo" className="mx-2" />
            <h1>WOAMAZING</h1>
          </div>

          <nav className="flex space-x-4">
            <Link href="/">Главная</Link>
            <Link href="/shop">Магазин</Link>
            <Link href="/about">О бренде</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>

          <div>
            contacts
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
