//libs
import React, { useState } from "react";
//styles
import S from "./about.module.scss";
import CarouselOne from 'src/images/carousal_one.jpg'
import CarouselTwo from 'src/images/carousal_two.jpg'
import CarouselThree from 'src/images/carousal_three.png'

import Carousel from 'react-bootstrap/Carousel';

import { HeaderFooterHoc, PageHeading } from "src/components";
import './about.module.scss';
import './about.css'
const AboutUs = ({ }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className='container'>
              <PageHeading heading="About Us" />
              <div className="row">
                <div className="col-md-12 col-lg-4 mt-3 mt-md-0">
                  <div className={S.aboutUs_carousel_div}>
                    {/* <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                      <Carousel.Item> */}
                    <img
                      className={S.aboutus_img}
                      src={CarouselOne}
                      alt="CarouselOne" />

                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <img
                          className={S.aboutus_img}
                          src={CarouselTwo}
                          alt="CarouselTwo" />

                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={S.aboutus_img}
                          src={CarouselThree}
                          alt="CarouselThree" />

                      </Carousel.Item> */}

                    {/* </Carousel> */}
                  </div>

                </div>
                <div className="col-md-12 col-lg-8">
                  <div className={S.aboutus_contain}>
                    <h3>Our Mission Statement:</h3>
                    <p>We at Postablur, Inc. aim to create and maintain a social networking environment where all content creators can earn from what they post and reach their audience without being charged to or paying a premium to do so and where their audience can reach them directly.</p>
                    <h3>Our Experience:</h3>
                    <p>We are a team of software designers and developers, still and motion graphic designers, audio engineers, photographers, videographers, salesman, customer service agents, advisors, consultants, influencers, business owners, entrepreneurs and content creators having over 60 combined years of still active experience in technology and marketing.</p>
                    <h3>Our Goals:</h3>
                    <ul>
                      <li>Create a new way for content creators to create, distrubute, and engage with fans.</li>
                      <li>Create a new way for fans to connect, share, and communicate with content creators.</li>
                      <li>Create a new way for us all to earn and withdraw money fairly from what we create.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default AboutUs;
