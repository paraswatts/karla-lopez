//libs
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
//styles
import S from "./faqs.module.scss";
import { HeaderFooterHoc, PageHeading } from "src/components";
const faqsList = [
  {
    _id: 'panel1',
    _title: 'About Postablur?',
    _body: 'Conceptualized in 2009 to try and help a cousin turn his book exposure into sales, Written out/designed in 2010, Prototyped built by 2013 using justinMind, Business Incorporated in 2013, Raised $15,000 from friends to build MVP in 2015, turned down a $20 million Line of Credit in exchange for 65% from an Architural firm, filed a Patent & Trademark, MVP build was pitched in 2016 at 1MillionCups Dallas, MVP redesigned 2nd time 1/2018, website launched at Superbowl 52 in Minnesota in 2018, Raised $400,000 since 2018, MVP redesigned 3rd time in 2020 during Pandemic, Made it to the 2nd round of auditions for Season 11 of NBCs Shark Tank, Full Version 1.0 BETA release on 2-22-22, V1.0 Official Launch TBD.'
  },
  {
    _id: 'panel2',
    _title: 'What is Postablur & are all post blurred?',
    _body: 'Postablur is a social networking app where fans can directly support content creators. Conctent creators can upload or create a post, set a Like or Credit goal, add a Co-Creator, and select to share it on their other connected social networks. Then your fans or followers interested can come to your posted blurred post and each Like or Credit they give you, incrementally unblurs your post.\n\nOn Postablur all post do not have to be posted blurred; we will never have only blurred posts. Post can be posted unblurred everytime.'
  },
  {
    _id: 'panel3',
    _title: 'What are the immediate benefits of using Postablur?',
    _tableData: [{
      _id: 1,
      _heading: 'For Content Creators',
      _points: [
        "Every post you create or upload can earn money",
        "You can add a like or dollar goal to your post and keep 70% of your post earnings",
        "The money you earn can be withdrawn the same day",
      ]
    },
    {
      _id: 2,
      _heading: 'For Content Consumers',
      _points: [
        "No Advertisements/Ads",
        "The engagement you give help to unblur creators post",
        "You get more exposure for supporting our creators",
        "After you Subscribe to a creator you can DM them"
      ]
    },
    {
      _id: 3,
      _heading: 'For Postablur, Inc.',
      _points: [
        "Credit for building the first social platform that blocks and seperates all forms of nudity, valguarity, & bullying",
        "30% of each $1 earn by post",
        "100% for all private accounts",
        "10% from every Subscription"
      ]
    },
    {
      _id: 4,
      _heading: 'For Investors',
      _points: [
        "Credit for funding the first social platform that upon day one of launching give its users the immediate ability to earn money via a social network with all (4) forms of content creation and that blocks and seperates all forms of nudity, valguarity, & bullying",
        "A chance for return on investtment from supporting a business owned, built, and run by people of color",
      ]
    }
    ]
  },
  {
    _id: 'panel4',
    _title: 'Does every post have to be posted blurred to earn money?',
    _body: 'No, every post does not have to have a goal(the blur) to earn money.\n\nEvery post including post without a goal can be given Likes or Credits, so every post can earn money without being blurred.\n\nYou can also earn money from your followers that chose to Subscribe to you on Postablur.'
  },
  {
    _id: 'panel5',
    _title: 'Do I have to have a Private Account to have Subscribers on Postablur?',
    _body: 'Yes, in order to have Subscribers you must have a Private account.\n\nWith a Public account, anyone that Subscribes to you, only pays $1/mth and serves as turning on notification of your Public post.\nWith a Private account',
    _sub_items: [
      "you can set the Subscription fee from $2-$10 a month",
      "you can select to the Public or post directly to those that are Subscribed to you",
      "those Subscribed to you can view all of your Private post AND preview your Public post that have a goal."
    ]
  }
]
const FAQs = ({ }) => {

  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none"
          },
          ".expandIconWrapper": {
            display: "none"
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block"
          }
        }}
      >
        <div className={`expandIconWrapper ${S.accordian_icon}`}>-</div>
        <div className={`collapsIconWrapper ${S.accordian_icon}`}>+</div>
      </Box>
    );
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className='container'>
              <PageHeading heading="Frequently Asked Questions" />
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                  {
                    faqsList.map((faq, index) => (
                      <Accordion key={index.toString()} className={`${index !== 0 ? 'mt-3' : ''} ${S.accordian_container}`} expanded={expanded === faq._id} onChange={handleChange(faq._id)}>
                        <AccordionSummary
                          expandIcon={<CustomExpandIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            <ul>
                              <li>{faq._title}</li>
                            </ul>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className={S.accordian_content} style={{ whiteSpace: 'pre-line' }}>
                            {faq?._body}
                            {faq?._sub_items && faq?._sub_items?.length &&
                              <ul>
                                {
                                  faq._sub_items.map((line, index) => (
                                    <li key={index.toString()}>{line}</li>
                                  ))
                                }
                              </ul>}
                            {console.log("faq?._tableData", faq?._tableData)}
                            {faq?._tableData && faq?._tableData.length &&
                              <div className={S.table}>
                                {
                                  faq._tableData.map((_row, index) => (
                                    <div key={index.toString()}>
                                      <h3>{_row._heading}</h3>
                                      {_row?._points && _row?._points?.length &&
                                        <ul>
                                          {
                                            _row._points.map((line, index) => (
                                              <li key={index.toString()}>{line}</li>
                                            ))
                                          }
                                        </ul>}
                                    </div>
                                  ))
                                }
                              </div>}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    </HeaderFooterHoc >
  );
};

export default FAQs;
