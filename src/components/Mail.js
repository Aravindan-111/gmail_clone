import MailContent from "./mail_content";

import { Checkbox } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";

import "./css/Mail.css";

function GmailContent() {
  return (
    <div className="mail">
      <div className="mail_top">
        <div className="mail_top_left">
          <Checkbox className="checkbox" />
          <ArrowDropDown />
          <RefreshIcon />
          <MoreVertIcon />
        </div>
        <div className="mail_top_right">
          <ChevronLeftIcon />
          <ChevronRightIcon />
          <KeyboardIcon />
          <ArrowDropDown />
        </div>
      </div>
      <div className="mail_bottom">
        <div className="mail_container">
          <InboxIcon />
          <h3>Primary</h3>
        </div>
        <div className="mail_container">
          <PeopleAltIcon />
          <h3>Social</h3>
        </div>
        <div className="mail_container">
          <LocalOfferIcon />
          <h3>Promotion</h3>
        </div>
        <div className="mail_container">
          <InfoIcon />
          <h3>Updates</h3>
        </div>
        <div className="mail_container">
          <ForumIcon />
          <h3>Forums</h3>
        </div>
      </div>
      <div className="main_mail_container">
        <div className="individual_mail_container">
          <MailContent />
        </div>
      </div>
    </div>
  );
}

export default GmailContent;
