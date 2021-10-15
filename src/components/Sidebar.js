import "./css/Sidebar.css";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <div className="compose_pic">
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt=""
          />
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
