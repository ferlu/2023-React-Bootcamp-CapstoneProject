// @vendors
import React from "react";

// @components
import Header from "./header";
import Footer from "./footer";

// @styles
import styles from "./styles.module.scss";

const Layout = ({ render, children }) => {
  return (
    <>
      <Header render={render} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
