import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

import "./share.css";

// import React, { useContext } from "react";
// import { Context } from "../Context/Context";

function Share() {
  // const {choosenVideo} = useContext(Context)
  // console.log("choosenVideo", choosenVideo)
  return (
    <div className="share-container">
      <div className="socials">
        <FacebookShareButton
          className="facebook-button"
          url={"https://youtu.be/9WzIACv_mxs"}
          quote="hey bro"
          hashtag="#yt"
        >
          <FacebookIcon
            className="social-icon"
            size={"35px"}
            round
            iconFillColor={"lightblue"}
          />
        </FacebookShareButton>

        <LinkedinShareButton
          className="linkdein-button"
          url="https://youtu.be/9WzIACv_mxs"
        >
          <LinkedinIcon
            className="social-icon"
            size={"35px"}
            round
            iconFillColor={"lightblue"}
          />
        </LinkedinShareButton>

        <EmailShareButton
          className="email-button"
          url="https://youtu.be/9WzIACv_mxs"
        >
          <EmailIcon
            className="social-icon"
            size={"35px"}
            round
            bgStyle={{ fill: "grey" }}
          />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default Share;
