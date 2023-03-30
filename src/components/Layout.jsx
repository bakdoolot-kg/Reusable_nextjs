import Head from "next/head";
import Header from "./header/Header";
import NavMenu from "./NavMenu";
import {Raleway} from "next/font/google"

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--raleway-font",
});

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title || "WOAMAZING: Онлайн магазин женской одежды"}</title>
        <meta
          name="description"
          content={
            description ||
            "WOAMAZING: невероятный стиль для неповторимых женщин!"
          }
        />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      <Header />
      <NavMenu />

      <main style={raleway.style}>{children}</main>
    </>
  );
};

export default Layout;
