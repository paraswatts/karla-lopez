//libs
import React from "react";
//styles
import S from "./projects.module.scss";
import { HeaderFooterHoc, Idea, PageHeading, Projects } from "src/components";
const ProjectsPage = ({ }) => {
  return (
    <>
      <main className={S.main}>
        <div className={S.banner_sec}>
          <HeaderFooterHoc showFooter>
            <div className='container'>
              <div className="row">
                <div className={S.banner_wrap}>
                  <PageHeading heading={"Projects"} subHeading={'UX/UI DESIGN'} />
                  <div className={S.projects_main_container}>
                    <Projects />
                  </div>
                  <div className={S.lets_turn_idea_container}>
                    <Idea />
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

export default ProjectsPage;
