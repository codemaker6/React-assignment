import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import VoicemailIcon from "@material-ui/icons/Voicemail";
import AttachFileIcon from "@material-ui/icons/AttachFile";
function Faviconlist() {
  return (
    <>
      <div className="faviconlist">
        <AvTimerIcon className="icon1"></AvTimerIcon>
        <PersonIcon className="icon1"></PersonIcon>
        <AccountCircleIcon className="icon1"></AccountCircleIcon>
        <PersonAddIcon className="icon1"></PersonAddIcon>
        <SettingsIcon className="icon1"></SettingsIcon>
        <VoicemailIcon className="icon1"></VoicemailIcon>
        <GroupIcon className="icon1"></GroupIcon>
        <LocalMoviesIcon className="icon1"></LocalMoviesIcon>
        <PermIdentityIcon className="icon1"></PermIdentityIcon>
        <AttachFileIcon className="icon1"></AttachFileIcon>
        <MailOutlineIcon className="icon1"></MailOutlineIcon>
      </div>
    </>
  );
}
export default Faviconlist;
