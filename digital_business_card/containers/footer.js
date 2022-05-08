import React from "react"
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
    <div className="footer">
        <SocialIcon className="twitter" url="https://twitter.com/jakeleaves"/>
        &nbsp
        <SocialIcon className="instagram" url="https://instagram.com/@jakeleaves"/>
        &nbsp
        <SocialIcon className="github" url="https://github.com/jakeleaves"/>
    </div>
    )
}