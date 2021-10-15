import "./css/widgets.css";

function Widgets() {
  return (
    <div>
      <div className="widgets">
        <div className="pic">
          <img
            src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
            alt=""
          />
        </div>
        <div className="pic">
          <img
            src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
            alt=""
          />
        </div>
        <div className="pic">
          <img
            src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
            alt=""
          />
        </div>
        <div className="pic">
          <img
            src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
            alt=""
          />
        </div>
        <div className="pic">
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/add_white_24dp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
