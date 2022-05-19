//libs
import React, { useEffect } from "react";
//styles
import S from "./thankyou.module.scss";
import Shortshirt from '../../../images/short_shirt.png';
import { HeaderFooterHoc, PageHeading } from "src/components";
import { useShoppingCart } from "use-shopping-cart";


const ThankYou = ({ }) => {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart()
  }, [])
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <h1 className={S.site_title}>THANK YOU!</h1>
            <div className={S.main_content}>
              <i className="fa fa-check main-content__checkmark" id="checkmark"></i>
              <p>Thanks a bunch for supporting us. It means a lot to us, just like you do!<br />We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
            </div>
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default ThankYou;
