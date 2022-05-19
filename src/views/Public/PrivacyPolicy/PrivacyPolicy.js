//libs
import React from "react";
//styles
import S from "./privacy.module.scss";
import { HeaderFooterHoc, PageHeading } from "src/components";
const PrivacyPolicy = ({ }) => {
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className='container px-2'>
              <PageHeading heading="Privacy Policy" />

              <p>At Postablur, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Postablur and how we use it.</p>

              <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

              <h3><strong>Log Files</strong></h3>

              <p>Postablur follows a standard procedure of using log files. These files log visitors when they use app. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the app, tracking users' movement on the app, and gathering demographic information.</p>

              <h3><strong>Our Advertising Partners</strong></h3>

              <p>Some of advertisers in our app may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

              <ul>
                <li>
                  <p>Google</p>
                  <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
                </li>
              </ul>

              <h3><strong>Privacy Policies</strong></h3>

              <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Postablur.</p>

              <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links that appear on Postablur. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on this app or other apps or websites.</p>

              <p>Note that Postablur has no access to or control over these cookies that are used by third-party advertisers.</p>

              <h3><strong>Third Party Privacy Policies</strong></h3>

              <p>Postablur's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

              <h3><strong>Children's Information</strong></h3>

              <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

              <p>Postablur does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our App, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

              <h3><strong>Online Privacy Policy Only</strong></h3>

              <p>This Privacy Policy applies only to our online activities and is valid for visitors to our App with regards to the information that they shared and/or collect in Postablur. This policy is not applicable to any information collected offline or via channels other than this app. Our Privacy Policy was created with the help of the <a href="https://www.app-privacy-policy.com/app-privacy-policy-generator/">App Privacy Policy Generator from App-Privacy-Policy.com</a></p>

              <h3><strong>Consent</strong></h3>

              <p>By using our app, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
            </div>
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default PrivacyPolicy;
