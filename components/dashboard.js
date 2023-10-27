import Badge from "@mui/material/Badge";
import DropDown from "../components/dropdown";
import CaptainsLog from "../components/captainslog";

export default function Dashboard() {
  return (
    <>
      <div className="right-container">
        <DropDown />
        <div className="welcome">
          <span>Welcome</span>
          <h5>Danny</h5>
        </div>
        <CaptainsLog />
        <div className="currency-1">
          <img
            src="/image/currency-1.png"
            className="currency-1-icon"
            width="15px"
          />
          <h6>7033</h6>
        </div>
        <div className="currency-2">
          <img
            src="/image/currency-2.svg"
            className="currency-2-icon"
            width="25px"
          />
          <h6>54</h6>
        </div>
        <div className="currency-3">
          <img
            src="/image/currency-3.svg"
            className="currency-3-icon"
            width="15px"
          />
          <h6>1049</h6>
        </div>
      </div>
    </>
  );
}
