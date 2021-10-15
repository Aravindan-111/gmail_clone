import React from "react";
import "./css/Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="Header">
      <div className="header_left">
        <MenuIcon />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <div className="header_search_container">
          <SearchIcon />
          <input type="text" placeholder="Search" />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="header_right">
        <div className="header_right_icons">
          <HelpOutlineOutlinedIcon />
          <SettingsOutlinedIcon />
          <DialpadOutlinedIcon />
        </div>
        <div className="headerAvatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
