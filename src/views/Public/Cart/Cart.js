//libs
import React, { } from "react";
//styles
import S from "./cart.module.scss";
import { HeaderFooterHoc, PageHeading } from "src/components";
import ShoppingCart from "src/components/common/ShoppingCart";
import { useHistory } from "react-router-dom";


const Cart = ({ }) => {
  const history = useHistory()
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <ShoppingCart handleClose={() => history.push('/our-gear')} />
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default Cart;
