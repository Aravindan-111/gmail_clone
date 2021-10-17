import * as React from "react";
import useState from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "react-modal";
import ReactQuill from "react-quill";
import {
  ScreenLockRotationIcon,
  TextFormatIcon,
  LinkIcon,
  PhotoIcon,
  CloseIcon,
  SentimentSatisfiedIcon,
  MoreVertIcon,
  DeleteIcon,
} from "@material-ui/icons/Link";
import { Avatar, IconButton, Checkbox } from "@material-ui/core";
import {
  Forward,
  Launch,
  MoreVert,
  Print,
  Reply,
  Star,
} from "@material-ui/icons";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./css/mail_content.css";

function SimpleAccordion() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [subject, setSubject] = useState("");
  const [compose, setCompost] = useState("");
  const [recipient, setRecipient] = useState("");

  const [forward, setForward] = useState(false);

  const handleReply = () => {
    setmodalOpen(true);
    setForward(false);
  };

  const handleForward = () => {
    setmodalOpen(true);
    setForward(true);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className="accordian">
            <div className="accord_left">
              <Checkbox />
              <Star />
              <Typography className="user_name">User Name</Typography>
            </div>
            <div className="accord_mid">
              <Typography className="subject">Subject</Typography>
              <p className="subject">Click Here to See Mail Content</p>
            </div>
            <div className="accord_right">
              <Typography className="timestamp">TimeStamp</Typography>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="mail_expand">
            <div className="mail_top">
              <div className="mail_top_icons">
                <Print />
                <Launch />
              </div>
            </div>
            <div className="mail_info">
              <Avatar />
              <div className="mail_info_details">
                <h4 className="sender_name">
                  Sender Name<small>Email of sender</small>
                </h4>
                <small>To whome the mail is sent</small>
              </div>
              <div className="senders_info_date">
                <div className="time_stamp">
                  <small>TimeStamp</small>
                  <Star />
                  <Reply />
                  <MoreVert />
                </div>
              </div>
            </div>
            <div className="mail_content">
              <div className="real_content">Content</div>
              <ReplyedMail />
              <ForwordedMail />
              <Modal
                isOpen={modalOpen}
                onRequestClose={() => setmodalOpen(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                  overlay: {
                    width: 680,
                    height: "auto",
                    zIndex: "1000",
                    top: "50%",
                    left: "50%",
                    marginTop: "-250px",
                    marginLeft: "-350px",
                    borderRadius: "none",
                    backgroundColor: "transparent",
                  },
                  content: {
                    marginTop: 0,
                    marginLeft: 0,
                    border: "none",
                    padding: "0px",
                  },
                }}
              >
                <div className="modal_container">
                  <div className="modal_top">
                    <div className="modal_top_left">
                      <p>{forward ? "Forward" : "Reply"}</p>
                      <div className="modal_top_right">
                        <IconButton onClick={() => setmodalOpen(false)}>
                          <CloseIcon />
                        </IconButton>
                      </div>
                    </div>
                    <div
                      onClick={() => setFocus(true)}
                      className="modal_recipient"
                    >
                      <p>{focus ? "To" : "Recipients"}</p>
                      <input
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="modal_subject">
                      <input
                        value={subject}
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                      />
                    </div>
                    <div className="quill">
                      <ReactQuill
                        placeholder={
                          forward
                            ? "Add Content and Forward this Mail"
                            : "Reply to this mail"
                        }
                      />
                    </div>
                  </div>
                  <div className="modal_bottom">
                    <div className="modal_bottom_left">
                      <button>Send</button>
                      <TextFormatIcon />
                      <AttachFileIcon />
                      <LinkIcon />
                      <SentimentSatisfiedIcon />
                      <PhotoIcon />
                      <ScreenLockRotationIcon />
                      <div className="modal_bottom_right">
                        <MoreVertIcon />
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              <div className="reply_forword_mail">
                <div onClick={handleReply} className="reply_mail">
                  <Reply />
                  <a href="#">Reply</a>
                </div>
                <div onClick={handleReply} className="forward_mail">
                  <Forward />
                  <a href="#">Forward</a>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const ReplyedMail = () => {
  return <h1>Replyed Mail</h1>;
};

const ForwordedMail = () => {
  return <h1>ForwordedMail</h1>;
};

function MailContent() {
  return (
    <div>
      <SimpleAccordion />
    </div>
  );
}

export default MailContent;
