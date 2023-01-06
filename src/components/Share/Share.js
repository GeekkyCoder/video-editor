import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

import "./share.css";


// The url that we passed as a prop to these buttons is just  youtube link 
// we first have to convert our video to a valid url so we can post it!

function Share() {
  return (
    <div className="share-container">
      <div className="socials">
        <FacebookShareButton
          className="facebook-button"
          url={"https://youtu.be/N3AkSS5hXMA"}
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
          url="https://youtu.be/N3AkSS5hXMA"
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
          url="https://youtu.be/N3AkSS5hXMA"
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
