//libs
import React from "react";
import { HeaderFooterHoc, Idea, OtherProjects, PageHeading } from "src/components";
//styles
import S from "./animation.module.scss";
import AnimationOne from 'src/images/animation1.gif'
import AnimationTwo from 'src/images/animation2.gif'
import AnimationThree from 'src/images/animation3.gif'
import AnimationFour from 'src/images/animation4.gif'
import AnimationFive from 'src/images/animation5.gif'
import AnimationSix from 'src/images/animation6.gif'
import AnimationSeven from 'src/images/animation7.gif'

const Animations = ({ }) => {
  return (
    <>
      <main className={S.main}>
        <div className={S.banner_sec}>
          <HeaderFooterHoc showFooter>
            <div className='container'>
              <div className="row">
                <div className={S.banner_wrap}>
                  <PageHeading heading={"Motion graphics"} subHeading={'Looped Animations'} />
                  <div className={S.animation_page_container}>
                    <div>
                      <img src={AnimationOne} className={S.animation1} />
                    </div>
                    <div className={S.animation_container}>
                      <img src={AnimationTwo} className={S.animation2} />
                      <img src={AnimationThree} className={S.animation3} />
                    </div>
                    <div className={S.animation_container}>
                      <img src={AnimationFour} className={S.animation4} />
                      <img src={AnimationFive} className={S.animation5} />
                    </div>
                    <div className={S.animation_container}>
                      <img src={AnimationSix} className={S.animation6} />
                      <img src={AnimationSeven} className={S.animation7} />
                    </div>
                    <div className={S.other_projects_container}>
                      <OtherProjects />
                    </div>
                    <div className={S.lets_turn_idea_container}>
                      <Idea />
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

export default Animations;
