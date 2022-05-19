import React from "react";

import S from "./idea.module.scss";

const Idea = () => {
    return <>
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
    </>
}

export default Idea