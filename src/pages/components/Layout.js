import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
