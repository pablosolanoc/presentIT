import React from 'react';

import PrivacyPolicyStyle from './PrivacyPolicyPage.styles';
import {ReactComponent as Logo} from '../../images/logo.svg';

const PrivacyPolicyPage = () => {
    
    return(
        <PrivacyPolicyStyle>
            
            <div className='centerPiece'>
                <div className='logo'>
                    <Logo className='image'></Logo>
                </div>
                
                <h1>Privacy Policy for presentIT</h1>

                <p>At presentIT, accessible from https://presentit.herokuapp.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by presentIT and how we use it.</p>

                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in presentIT. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Free Privacy Policy Generator</a>.</p>

                <h2>Consent</h2>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2>Information we collect</h2>

                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                {/* <p>When you sign-in with a Google Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p> */}
                <p>When you sign-in with a Google Account, we only get and store information such as your given name, family name, Google profile picture and your id.</p>

                <h2>How we use your information</h2>

                <p>We use the information we collect in various ways, including to:</p>

                <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                {/* <li>Understand and analyze how you use our website</li> */}
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                {/* <li>Send you emails</li> */}
                {/* <li>Find and prevent fraud</li> */}
                </ul>

                <h2>Log Files</h2>

                <p>presentIT follows a standard procedure of using log files. These files get a new entry when the request users have made result in a server error that needs to be logged for debbuging purposes.</p>

                <h2>Cookies and Web Beacons</h2>

                <p>Like any other website, presentIT uses 'cookies'. These cookies are used to store information for user session and security. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                <p>For more general information on cookies, please read <a href="https://www.generateprivacypolicy.com/#cookies">the Cookies article on Generate Privacy Policy website</a>.</p>

                <h2>Local Storage</h2>

                <p>We use local storage of the visitor to record the app state and improve user experience.</p>

                <h2>Advertising Partners Privacy Policies</h2>

                <p>Note that presentIT has no access to or control over these cookies that are used by third-party advertisers.</p>

                <h2>Third Party Privacy Policies</h2>

                <p>presentIT's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

                <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
                <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
                <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                <h2>GDPR Data Protection Rights</h2>

                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                <h2>Children's Information</h2>

                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                <p>presentIT does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
            </div>

        </PrivacyPolicyStyle>
    )

}

export default PrivacyPolicyPage;