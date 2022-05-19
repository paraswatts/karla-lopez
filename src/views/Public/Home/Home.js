//libs
import React from "react";
//styles
import S from "./home.module.scss";
import Monkey from 'src/images/monkey.gif'
import { HeaderFooterHoc } from "src/components";
import DiagonalArrow from 'src/images/diagonal_arrow.svg'
import Karla from 'src/images/karla.png'
import Projects from "./Projects";

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

const Home = ({ }) => {
  const SocialContacts = () => {
    return <div className={S.social_container}>{socialLinks.map((link) => (
      <div><a className={S.social_media_name} href={link._url} target="_blank">{link._name}</a><img src={DiagonalArrow} /></div>
    ))}</div>
  }
  return (
    <div className={S.container}>
      <main className={S.main}>
        <div className={S.banner_sec}>
          <HeaderFooterHoc showFooter>
            <div className='container'>
              <div className="row">
                <div className={S.banner_wrap}>
                  <div className={S.introduction_section}>
                    <div className={S.monkey_container}>
                      <img src={Monkey} className={S.monkey} />
                    </div>
                    <div className={S.introduction_lines}>
                      <p className={S.introduction_line1}>
                        Hello I'm
                      </p>
                      <p className={S.introduction_line2}>
                        Karla López
                      </p>
                      <p className={S.introduction_line3}>
                        UX/UI & Motion Designer
                      </p>
                      <p className={S.introduction_line4}>
                        Welcome to my portfolio. Inside this portfolio/prototype you will find my recent projects that I’ve been working.
                        I love creating innovative interfaces and enjoyable experiences for the user.
                      </p>
                      <p className={S.introduction_line5}>
                        SEE PROJECTS
                      </p>
                    </div>
                  </div>
                  <div className={S.social_media_links}>
                    <SocialContacts />
                  </div>
                  <div className={S.lets_turn_idea_container}>
                    <div className={S.idea_outer_container}>
                      <div className={S.idea_inner_container}>
                        <p className={S.idea_line1}>
                          LET’S TURN YOUR IDEAS<br />
                          INTO REALITY.
                        </p>
                        <p className={S.idea_line2}>
                          CONTACT
                        </p>
                        <p className={S.idea_line3}>
                          Feel free to get in touch with me.<br />
                          I am always open to discussing new projects, creative ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={S.about_me_container}>
                    <img src={Karla} className={S.karla}></img>
                    <div className={S.about_me_lines}>
                      <p className={S.about_me_line1}>
                        About me
                      </p>
                      <p className={S.about_me_line2}>
                        My name is Karla López and I am from Mexico.<br />
                        I’m a UX/UI and motion designer with a keen eye for detail.
                        <br /><br />
                        My passion for art and animation ventured me into the design<br /> field where I challenge and push myself to the<br /> fullest in every project.
                      </p>
                    </div>
                  </div>
                  <div className={S.software_skills_container}>
                    <p className={S.software_line1}>
                      Software and Skills
                    </p>
                    <p className={S.software_line2}>
                      #figma&nbsp;&nbsp;&nbsp;&nbsp;#miro&nbsp;&nbsp;&nbsp;&nbsp;#prototyping&nbsp;&nbsp;&nbsp;&nbsp;#after effects&nbsp;&nbsp;&nbsp;&nbsp;#photoshop<br /><br />
                      #motion graphics&nbsp;&nbsp;&nbsp;&nbsp;#illustrator&nbsp;&nbsp;&nbsp;&nbsp;#design thinking&nbsp;&nbsp;&nbsp;&nbsp;#whimsical<br /><br />
                      #english&nbsp;&nbsp;&nbsp;&nbsp;#japanese&nbsp;&nbsp;&nbsp;&nbsp;#auto-layout&nbsp;&nbsp;&nbsp;&nbsp;#components
                    </p>
                    <p className={S.software_line2_mobile}>
                      #figma&nbsp;&nbsp;&nbsp;&nbsp;#miro&nbsp;&nbsp;&nbsp;&nbsp;#prototyping<br /><br />
                      #after effects&nbsp;&nbsp;&nbsp;&nbsp;#photoshop<br /><br />
                      #motion graphics&nbsp;&nbsp;&nbsp;&nbsp;#illustrator<br /><br />
                      #design thinking&nbsp;&nbsp;&nbsp;&nbsp;#whimsical<br /><br />
                      #english&nbsp;&nbsp;&nbsp;&nbsp;#japanese<br /><br />
                      #auto-layout&nbsp;&nbsp;&nbsp;&nbsp;#components
                    </p>
                  </div>
                  <Projects />
                  <div className={S.quote_container}>
                    <p className={S.quote_line1}>
                      “
                    </p>
                    <p className={S.quote_line2}>
                      Design is not just what it looks like<br />and feels like. Design is how it works.
                    </p>
                    <p className={S.quote_line3}>
                      — Steve Jobs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HeaderFooterHoc>
        </div>
      </main>
    </div>
  );
};

export default Home;
