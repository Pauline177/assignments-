import React from 'react'
import {socialIcon, SocialIcon} from 'react-social-icons'

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-col1">
                <h2>WhereWork ✺</h2>
                <h6>connect with us </h6>
                <SocialIcon url="https://github.com/Pauline177" />
                <SocialIcon url="https://www.linkedin.com/in/pauline-makoma/" />
                <SocialIcon url="https://www.instagram.com/paldym/" />
            </div>
            <div className="footer-col">
                <h4>Search</h4>
                <span>Properties For Sale</span>
                <span>Properties For Lease</span>
                <span>Find a Broker</span>
            </div>
            <div className="footer-col">
                <h4>Products&service</h4>
                <span>Product Overview</span>
                <span>Premium Adevertising</span>
                <span>Power Ads</span>
                <span>Targeted Adevertising</span>
            </div>
            <div className="footer-col">
                <h4> Resources </h4>
                <span>Site Map</span>
                <span>Mobile</span>
                <span>More things </span>
            </div>
            <div className="footer-col">
                <h4>Company</h4>
                <span>About Us</span>
                <span>Terms of Use</span>
                <span> Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer