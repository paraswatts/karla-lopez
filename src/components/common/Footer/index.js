//libs
import React from "react";
import FooterApple from 'src/images/icons/appstore.svg'
import PostablurLogo from 'src/images/banner_logo.png'
import { useHistory } from "react-router-dom";
import { ABOUT_US, CCPA_PAGE, EULA, FAQS } from "src/shared/constants";
import { SocialMediaStrip } from "src/components";
import DiagonalArrow from 'src/images/diagonal_arrow.svg'

//styles
import S from "./Footer.module.scss";

const Footer = ({ }) => {
  const history = useHistory();
  const goTo = (route) => {
    history.push(route)
  }

  const socialLinks = [{
    _id: 1,
    _url: 'https://www.behance.net/nekoshi',
    _name: 'Behance'
  }, {
    _id: 2,
    _url: 'https://www.linkedin.com/in/nekoshi/',
    _name: 'Linked In'
  }, {
    _id: 3,
    _url: 'https://www.instagram.com/nekoshi.motion/',
    _name: 'Instagram'
  }]
  const SocialContacts = () => {
    return <div className={S.social_container}>{socialLinks.map((link) => (
      <div className={S.contact_container}><a className={S.social_media_name} href={link._url} target="_blank">{link._name}</a><img src={DiagonalArrow} /></div>
    ))}</div>
  }

  return (
    <footer className={S.footer}>
      <SocialContacts />
      <div className={S.contact_container}>
        <p className={S.contact_line1}>iamnekoshi@gmail.com</p>
        <p className={S.contact_line2}>+52 1 771 700 2281</p>
      </div>
    </footer>
  );
};

export default Footer;
