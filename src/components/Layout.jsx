import Head from "next/head";
import { Raleway } from "next/font/google";
import Header from "./Header";

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
      <main style={raleway.style}>{children}</main>
    </>
  );
};

export default Layout;
