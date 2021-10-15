import Header from "./Header";
import Sidebar from "./Sidebar";
import "./css/Gmail.css";

function Gmail() {
  return (
    <div className="Gmail">
      <Header />
      <div className="gmail_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default Gmail;
