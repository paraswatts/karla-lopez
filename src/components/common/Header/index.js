import S from "./Header.module.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
const HEADER_LINKS = [{
    title: 'Projects',
    link: '/projects',
    isDownload: false
}, {
    title: 'Contact',
    link: '/contact',
    isDownload: false
},
{
    title: 'Download CV',
    // link: '/our-gear',
    isDownload: true
},
]
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.getElementById('header');
        const scrollTop = window.scrollY;
    };

    const history = useHistory();
    const goTo = (route) => {
        history.push(route)
    }

    const downloadFile = () => {
        window.open('https://firebasestorage.googleapis.com/v0/b/karla-lopez.appspot.com/o/karla-lopez.pdf?alt=media&token=280a4844-f052-491f-a219-0050245e091c')
    }

    return (<header id="header" className={`${S.header}`}>
        <div className="container">
            <nav className={`navbar px-0`}>
                <a className={`${S.navbar_brand} ${S.main_logo}`} href="/">
                    <div className={S.logo}>KL</div>
                </a>
                <div className={`justify-content-end ${S.main_menu}`} id={S.main_menu}>
                    <ul className="navbar-nav ml-auto align-items-center flex-row justify-content-end">
                        {HEADER_LINKS.map((option, idx) =>
                        (option.isDownload ?
                            <div className={S.download_container} onClick={downloadFile}>
                                <div className={S.download_button}>
                                    DOWNLOAD CV
                                </div>
                            </div> :
                            <li className={`${S.menu_option} ${location.pathname === option.link ? S.active : ''}`} key={idx}>
                                <p
                                    onClick={() => goTo(option.link)}
                                    className={`${S.link}`}
                                >
                                    {option.title}
                                </p>
                            </li>))}
                    </ul>
                </div>
            </nav>
        </div>
        <div className={S.border_bottom}></div>
    </header>)
}

export default Header;