import React from 'react';
import S from "./heading.module.scss";

const PageHeading = ({ heading }) => {
    return (<div className="row">
        <h2 className={`text-center  ${S.contact_heading}`}>{heading}</h2>
    </div>)
}
export default PageHeading;