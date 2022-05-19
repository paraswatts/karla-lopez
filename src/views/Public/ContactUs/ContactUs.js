//libs
import React from "react";
import SnapchatIcon from 'src/images/icons/snapchat icon.svg'
import FacebookIcon from 'src/images/icons/facebook icon.svg'
import YoutubeIcon from 'src/images/icons/youtube icon.svg'
import TwitterIcon from 'src/images/icons/twitter icon.svg'
import InstaIcon from 'src/images/icons/instagram icon.svg'
// import EmailIcon from 'src/images/icons/email.png'
import EmailIcon from 'src/images/icons/messageicon.svg'
//styles
import S from "./contact.module.scss";
import { HeaderFooterHoc, PageHeading } from "src/components";

const ContactUs = ({ }) => {
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className='container'>
              <PageHeading heading="Contact Us" />
              <div className="row">
                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3">
                  <div className={`${S.contact_snapchat} ${S.contact_details}`}>
                    <img
                      className={S.blur_logo_2}
                      src={SnapchatIcon}
                      alt="Snapchat" />
                    <h2 className={S.contact_snapchat_heading}> <a href="https://www.snapchat.com/add/postablur">Snapchat.com/postablur</a> </h2>
                    <p>Send us a message with a question or comment.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3">
                  <div className={`${S.contact_twitter} ${S.contact_details}`}>
                    <img
                      className={S.blur_logo_2}
                      src={TwitterIcon}
                      alt="Twitter" />
                    <h2 className={S.contact_twitter_heading}> <a href="https://www.twitter.com/postablur" target="_blank">Twitter.com/postablur</a> </h2>
                    <p>Send us a message with a question or comment.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3">
                  <div className={`${S.contact_youtube} ${S.contact_details}`}>
                    <img
                      className={S.blur_logo_2}
                      src={YoutubeIcon}
                      alt="Youtube" />
                    <h2 className={S.contact_youtube_heading}> <a href="https://www.youtube.com/watch?v=2ZXyml3fD-U" target="_blank">Youtube.com/postablur</a> </h2>
                    <p>Send us a message with a question or comment.</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3 mt-lg-3">
                  <div className={`${S.contact_facebook} ${S.contact_details}`}>
                    <img
                      className={S.blur_logo_2}
                      src={FacebookIcon}
                      alt="Facebook" />
                    <h2 className={S.contact_facebook_heading}> <a href="https://www.facebook.com/postablur" target="_blank">Facebook.com/postablur</a> </h2>
                    <p>Send us a message with a question or comment.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3 mt-lg-3">
                  <div className={`${S.contact_instagram} ${S.contact_details}`}>
                    <img
                      className={S.blur_logo_2}
                      src={InstaIcon}
                      alt="Instagram" />
                    <h2 className={S.contact_instagram_heading}> <a href="https://www.instagram.com/postablur" target="_blank">Instagram.com/postablur</a> </h2>
                    <p>Send us a message with a question or comment.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-12 mt-3 mt-md-3 mt-lg-3">
                  <div className={`${S.contact_email} ${S.contact_details}`}>
                    <div className={S.email_div}>
                      <img
                        className={S.blur_logo_2}
                        src={EmailIcon}
                        alt="Email" />
                    </div>

                    <h2 className={S.contact_email_heading}> Email Us
                      <span><a className={S.contact_email_link} href="mailto:info@postablur.com">info@postablur.com</a>  </span></h2>
                    <p>Send us a message with a question or comment.</p>
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

export default ContactUs;
