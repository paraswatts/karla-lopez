import React from "react";
import { useHistory } from "react-router-dom";
import { CONTACT } from "src/shared/constants";

import S from "./idea.module.scss";

const Idea = () => {
    const history = useHistory();
    const goTo = (route) => {
        history.push(route)
    }
    return <>
        <div className={S.idea_outer_container}>
            <div className={S.idea_inner_container}>
                <p className={S.idea_line1}>
                    LET’S TURN YOUR IDEAS<br />
                    INTO REALITY.
                </p>
                <p className={S.idea_line2} onClick={() => goTo(CONTACT)}>
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