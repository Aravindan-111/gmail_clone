import "./css/Sidebar.css";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { Avatar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import PhotoIcon from "@material-ui/icons/Photo";
import ScreenLockRotationIcon from "@material-ui/icons/ScreenLockRotation";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import TextFormat from "@material-ui/icons/TextFormat";
import { useState } from "react";
import Modal from "react-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Sidebar() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [subject, setSubject] = useState("");
  const [compose, setCompost] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <div className="compose_pic">
          <img
            onClick={() => setmodalOpen(true)}
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt="compose"
          />

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
                  <p>New Message</p>
                  <div className="modal_top_right">
                    <IconButton onClick={() => setmodalOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
                <div onClick={() => setFocus(true)} className="modal_recipient">
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
                  <ReactQuill placeholder="Compose Mail..." />
                </div>
              </div>
              <div className="modal_bottom">
                <div className="modal_bottom_left">
                  <button>Send</button>
                  <TextFormat />
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
        </div>
        <div className="sidebar_top_icon">
          <InboxOutlinedIcon />
        </div>
        <div className="sidebar_top_icon">
          <StarOutlinedIcon />
        </div>
        <div className="sidebar_top_icon">
          <WatchLaterIcon />
        </div>
        <div className="sidebar_top_icon">
          <SendIcon />
        </div>
        <div className="sidebar_top_icon">
          <InsertDriveFileIcon />
        </div>
        <div className="sidebar_top_icon">
          <LabelImportantIcon />
        </div>
      </div>
      <div className="sidebar_bottom">
        <div className="video_pic">
          <img
            src="	https://www.gstatic.com/images/icons/material/system/1x/meet_white_20dp.png"
            alt=""
          />
        </div>
        <div className="sidebar_top_icon">
          <VideocamIcon />
        </div>
        <div className="sidebar_top_icon">
          <KeyboardIcon />
        </div>
      </div>
      <div className="sidebar_bottom_end">
        <div className="hangout_pic">
          <img
            src="	https://www.gstatic.com/images/icons/material/system/1x/hangout_white_20dp.png"
            alt=""
          />
        </div>
        <div className="sidebar_Avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
