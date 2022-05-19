import S from "./social.module.scss";
import React from "react";
import SnapchatIcon from 'src/images/icons/snapchat_icon.png'
import FacebookIcon from 'src/images/icons/facebook_icon.png'
import YoutubeIcon from 'src/images/icons/youtube_icon.png'
import TwitterIcon from 'src/images/icons/twitter_icon.png'
import InstaIcon from 'src/images/icons/instagram_icon.png'
const SOCIAL_ICONS = [
    {
        _id: 1,
        _icon: TwitterIcon,
        _url: 'https://www.twitter.com/postablur',
        _alt: 'Twitter'
    },
    {
        _id: 2,
        _icon: YoutubeIcon,
        _url: 'https://www.youtube.com/watch?v=2ZXyml3fD-U',
        _alt: 'Youtube'
    },
    {
        _id: 3,
        _icon: SnapchatIcon,
        _url: 'https://www.snapchat.com/add/postablur',
        _alt: 'Snapchat'
    },
    {
        _id: 4,
        _icon: InstaIcon,
        _url: 'https://www.instagram.com/postablur',
        _alt: 'Instagram'
    },
    {
        _id: 5,
        _icon: FacebookIcon,
        _url: 'https://www.facebook.com/postablur',
        _alt: 'Facebook'
    }
]
const SocialMediaStrip = ({ classes }) => {
    return (<ul className={`d-flex ${S.social_icons} ${classes}`}>
        {
            SOCIAL_ICONS.map((obj, index) => (
                <li key={index.toString()}>
                    <a href={obj._url} target="_blank">
                        <img
                            src={obj._icon}
                            alt={obj._alt}
                        />
                    </a>
                </li>))
        }
    </ul>)
}

export default SocialMediaStrip;