//libs
import React, { useEffect, useState } from "react";
//styles
import S from "./gear.module.scss";
import Shortshirt from '../../../images/short_shirt.png';
import Longshirt from '../../../images/long_shirt.png';
import Sweaters from '../../../images/sweater_image.png';
import Hoodies from '../../../images/hoodies.png';
import FullScreen from '../../../images/icons/fullscreen.svg';

import { collection, addDoc, query, onSnapshot, orderBy, doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { db } from '../../../App';

import { HeaderFooterHoc, PageHeading } from "src/components";
import { useShoppingCart } from "use-shopping-cart";
import { withSnackbar } from "notistack";
import { useSnackbar } from 'notistack';
import { PRODUCTS, SKUS } from "../../../shared/constants/constants";
import Popup from 'reactjs-popup';
import Carousel from 'react-bootstrap/Carousel';
import './gear.css'
const OurGear = ({ }) => {
  const { addItem } = useShoppingCart();
  const [skus, setSkus] = useState([])
  const [products, setProducts] = useState([])
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [index, setIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    fetchProducts()
    async function pushData() {
      for (let i = 0; i < PRODUCTS.length; i++) {
        let product = PRODUCTS[i]
        const productRef = doc(db, 'products', product.id);
        try {
          setDoc(productRef, { ...product }, { merge: true });
        } catch (error) {
          console.log("ehhehe")
        }
      }
      for (let i = 0; i < SKUS.length; i++) {
        let sku = SKUS[i]
        const skuRef = doc(db, 'skus', sku.id);
        setDoc(skuRef, {
          ...sku, available: 20
        }, { merge: true });
      }
    }
    pushData()
  }, [])

  const fetchProducts = () => {
    onSnapshot(collection(db, "products"), async (doc) => {
      const data = doc.docs
      let productsData = []
      for (let i = 0; i < data.length; i++) {
        let doc = data[i]
        let docData = doc.data()
        productsData.push(docData)
      }
      setProducts(productsData)
    })

    onSnapshot(collection(db, "skus"), async (doc) => {
      const data = doc.docs
      let skuData = []
      for (let i = 0; i < data.length; i++) {
        let doc = data[i]
        let docData = doc.data()
        skuData.push(docData)
      }
      setSkus(skuData)
    })
  }

  const Product = ({ product }) => {
    const { id, sizes, name, description, mainClassName, image, alt, altName, backImage } = product
    return (
      <div key={id} className={`${S[mainClassName]} ${S.gear_div}`}>

        <img
          className={S.product_img}
          src={image}
          alt={alt} />
        <div className={S.img_content}>
          <h3 >{name}</h3>
          {!!description && <ul>
            <li>{description}</li>
          </ul>}
          <div>
            <ul className={S.sizes}>
              {sizes.map((size) => (
                size.quantity > 0 ? <li key={size.id} onClick={() => {
                  enqueueSnackbar(`${size.description} ${altName} added to cart`, { variant: "success" });
                  addItem({ currency: product.currency, price: product.price, description: product.description, image: product.image, id: SKUS.find((sku) => sku.id === size.id).id, name: name + ' (' + size.description + ')' })
                }}>
                  <span>{size.description}</span></li> :
                  <li key={size.id}>{size.description}</li>
              ))}
            </ul>
            <p className={S.shop_info_message}>(Tap on any size to Select and Add it to Cart for Purchase)</p>
          </div>
        </div>
        <img className={S.fullscreen} src={FullScreen} onClick={() => {
          setCurrentProduct(product)
          handleOpen()
        }} />
      </div >
    )
  }
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className="container">
              <PageHeading heading="Our Gear" />
              {/* <div className={S.custom_snack_bar}><div className={S.snack_bar_message}>
                <svg className={S.snack_icon} focusable="false" aria-hidden="true" viewBox="0 0 24 24" style={{ fontSize: 20, marginInlineEnd: 8 }}><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg>Product Added to cart</div></div> */}
              <div className="row">
                <div className={S.main_grid}>
                  {
                    products.map((product, index) => (
                      <Product product={product} key={index.toString()} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <Popup
            closeOnDocumentClick
            overlayStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 99999999999999
            }}
            modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className={S.modal_container}>
              <div className={S.modal_heading}>
                <span >{index === 0 ? 'Front' : 'Back'}</span>
              </div>
              <Carousel
                nextIcon={<i className='fa fa-angle-right arrow' />}
                prevIcon={<i className='fa fa-angle-left arrow' />}
                activeIndex={index}
                onSelect={handleSelect} interval={null}
              >
                <Carousel.Item>
                  <img
                    className={S.product_image}
                    // src={'https://picsum.photos/200'}
                    src={currentProduct?.image}
                    alt="CarouselOne" />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={S.product_image}
                    // src={'https://picsum.photos/200'}
                    src={currentProduct?.backImage}
                    alt="CarouselTwo" />

                </Carousel.Item>
              </Carousel>
              <div className={S.size_container}>
                <span>{'AVAILABLE SIZES'}</span>
                <ul className={S.sizes}>
                  {currentProduct && currentProduct?.sizes && currentProduct?.sizes?.length && currentProduct.sizes.map((size) => (
                    size.quantity > 0 ? <li key={size.id} onClick={() => {
                      enqueueSnackbar(`${size.description} ${currentProduct.altName} added to cart`, { variant: "success" });
                      addItem({ currency: currentProduct.currency, price: currentProduct.price, description: currentProduct.description, image: currentProduct.image, id: SKUS.find((sku) => sku.id === size.id).id, name: currentProduct.name + ' (' + size.description + ')' })
                    }}>
                      <span>{size.description}</span></li> :
                      <li key={size.id}>{size.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Popup>
        </main>
      </div>

    </HeaderFooterHoc >
  );
};

export default OurGear;
