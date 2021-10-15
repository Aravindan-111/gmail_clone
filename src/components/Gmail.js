import Header from "./Header";
import Sidebar from "./Sidebar";
import GmailContent from "./Mail";
import Widgets from "./widgets";
import "./css/Gmail.css";

function Gmail() {
  return (
    <div className="Gmail">
      <Header />
      <div className="gmail_body">
        <Sidebar />
        <GmailContent />
        <Widgets />
      </div>
    </div>
  );
}

export default Gmail;
