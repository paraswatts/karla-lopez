//libs
import React, { useState } from "react";
//styles
import S from "./contact.module.scss";
import { HeaderFooterHoc } from "src/components";
import DiagonalArrow from 'src/images/diagonal_arrow.svg'

const Contact = ({ }) => {
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
      <div className={S.contact_container1}><a className={S.social_media_name} href={link._url} target="_blank">{link._name}</a><img src={DiagonalArrow} /></div>
    ))}</div>
  }

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
      <main className={S.main}>
        <div className={S.banner_sec}>
          <HeaderFooterHoc>
            <div className='container'>
              <div className="row">
                <div className={S.banner_wrap}>
                  <div className={S.contact_page_container}>
                    <div>
                      <p className={S.idea_line1}>
                        Let’s turn your ideas<br />
                        into reality.
                      </p>
                      <div className={S.contact_container}>
                        <div className={S.contact_line1}>iamnekoshi@gmail.com</div>
                        <div className={S.contact_line2}>+52 1 771 700 2281</div>
                      </div>
                      <SocialContacts />
                    </div>

                    <div>
                      <form onSubmit={handleSubmit} className={S.form}>
                        <p className={S.form_title}>
                          Tell me abour ur project
                        </p>
                        <input
                          type="text"
                          name="name"
                          value={inputs.name || ""}
                          onChange={handleChange}
                          className={S.input}
                          placeholder="Name"
                          required
                        />
                        <input
                          type="text"
                          name="email"
                          value={inputs.email || ""}
                          onChange={handleChange}
                          className={S.input}
                          placeholder="Email"
                          required
                        />
                        <input
                          type="text"
                          name="subject"
                          value={inputs.subject || ""}
                          onChange={handleChange}
                          className={S.input}
                          placeholder="Subject"
                          required
                        />
                        <textarea
                          name="message"
                          value={inputs.message || ""}
                          onChange={handleChange}
                          className={S.input}
                          placeholder="Message"
                          rows={6}
                          required
                        />
                        <button className={S.send_button_container} type="submit">
                          <div className={S.send_button_text}>SEND</div>
                          <svg className={S.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HeaderFooterHoc>
        </div>
      </main>
    </>
  );
};

export default Contact;
