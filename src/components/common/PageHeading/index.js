import React from 'react';
import S from "./heading.module.scss";

const PageHeading = ({ heading, subHeading }) => {
    return (<div className={S.heading_container}>
        <h2 className={S.contact_heading}>{heading}</h2>
        <h2 className={S.contact_sub_heading}>{subHeading}</h2>
    </div>)
}
export default PageHeading;