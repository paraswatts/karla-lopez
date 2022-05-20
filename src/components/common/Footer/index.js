//libs
import React from "react";
import { useHistory } from "react-router-dom";
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
    return <div className={S.social_container}>{socialLinks.map((link, idx) => (
      <div key={idx.toString()} className={S.contact_container}><a className={S.social_media_name} href={link._url} target="_blank">{link._name}</a><img src={DiagonalArrow} /></div>
    ))}</div>
  }

  return (
    <footer className={S.footer}>
      <SocialContacts />
      <div className={S.contact_container1}>
        <div className={S.contact_line1}>iamnekoshi@gmail.com</div>
        <div className={S.contact_line2}>+52 1 771 700 2281</div>
      </div>
    </footer>
  );
};

export default Footer;
