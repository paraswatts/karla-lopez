import React, { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { getFunctions, httpsCallable, functions } from 'firebase/functions';
import S from "./cart.module.scss";
import { useSnackbar } from "notistack";

export default function ShoppingCart({ handleClose = () => { }, showCancel }) {
    const [productsList, setProductsList] = useState([])
    const { cartCount, cartDetails, formattedTotalPrice, setItemQuantity, redirectToCheckout } = useShoppingCart();
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    useEffect(() => {
        const products = []
        for (let product in cartDetails) {
            const productDetail = cartDetails[product]
            products.push(productDetail)
        }
        setProductsList(products)
    }, [cartDetails])

    const handleCheckout = () => {
        const functions = getFunctions();
        const createStripeSession = httpsCallable(functions, 'createStripeSession');
        setLoading(true)
        createStripeSession({ cartDetails: cartDetails })
            .then((result) => {
                const data = result.data
                if (data && data.id) {
                    redirectToCheckout({ sessionId: data.id })
                }
                else {
                    setLoading(false)
                }
            }).catch((err) => {
                enqueueSnackbar("Oops! Please try again", { variant: "error" });
                setLoading(false)
                console.log("err", err)
            });
    }
    return (
        <div className={S.shopping_cart}>
            {loading ?
                <div className={S.loader_container}>
                    <div className={S.loader}></div>
                </div> :
                <>
                    <div className={S.cart_container}>
                        <div className={S.shopping_cart_header}>
                            <div className="shopping-cart-total">
                                <span className={S.lighter_text}>Total: </span>
                                <span className={S.main_color_text}>{formattedTotalPrice}</span>
                            </div>
                            <span className={S.cancel} onClick={handleClose}>CANCEL</span>
                        </div>
                        {cartCount > 0 ? <ul className={S.shopping_cart_items}>
                            {productsList.map((product, index) => (
                                <div key={index.toString()} className={S.cartItem}>
                                    <span onClick={() => setItemQuantity(product.id, 0)} className={S.cross}>X</span>
                                    <li className={S.clearfix} >
                                        <img className={S.cart_image} src={product.image} alt="item1" />
                                        <span className={S.item_name}>{product.name}</span>
                                        <span className={S.item_price}>{product.formattedValue}</span>
                                        <span className={S.quantity_change} onClick={() => setItemQuantity(product.id, product.quantity - 1)}>-</span>
                                        <span className={S.item_quantity}>{product.quantity}</span>
                                        <span className={S.quantity_change} onClick={() => setItemQuantity(product.id, product.quantity + 1)}>+</span>
                                    </li></div>))}
                        </ul> : <p style={{ textAlign: 'center', marginTop: 20 }}>Your cart is empty</p>}

                        <button disabled={cartCount > 0 ? false : true} onClick={() => handleCheckout()} className={S.button}>Checkout</button>
                        <p className={S.tax_disclaimer}><span>Taxes are included at the completion of the Checkout.<br />All orders over $150 USD automatically receive free shipping.</span></p>
                    </div>
                </>}
        </div>
    );
}