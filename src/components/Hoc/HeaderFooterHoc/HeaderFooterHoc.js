//libs
import React from "react";
import { Header, Footer } from "src/components";

//styles
import S from "./HeaderFooterHoc.module.scss";

const HeaderFooterHoc = ({ children, showHeader = true, showFooter = false, isLight }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', justifyContent: 'space-between' }}>
      {!!showHeader && <Header isLight={isLight} />}
      {children}
      {!!showFooter && <Footer />}
    </div>
  );
};

export default HeaderFooterHoc;
