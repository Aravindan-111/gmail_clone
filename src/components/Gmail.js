import Header from "./Header";
import Sidebar from "./Sidebar";
import Gmail_content from "./Mail";
import Widgets from "./widgets";
import "./css/Gmail.css";

function Gmail() {
  return (
    <div className="Gmail">
      <Header />
      <div className="gmail_body">
        <Sidebar />
        <Gmail_content />
        <Widgets />
      </div>
    </div>
  );
}

export default Gmail;
