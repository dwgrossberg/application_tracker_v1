import { useState } from "react";
import classNames from "classnames";
import BurgerMenu from "../assets/burger-menu-left-svgrepo-com.svg";

const TableRow = () => {
  const [appliedStatus, setAppliedStatus] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCheck = () => {
    setAppliedStatus(!appliedStatus);
  };

  const handleExpandRow = () => {
    setShowDetails(!showDetails);
  };

  const rowClassNames = classNames({
    applied: appliedStatus,
    expandRow: showDetails,
  });

  return (
    <tr className={rowClassNames}>
      <td>
        <input type="checkbox" onChange={handleCheck}></input>
      </td>
      <td>Meta</td>
      <td>
        <a href="/">Backend Internship</a>
      </td>
      <td>Oct 19</td>
      <td>Mountain View, CA</td>
      <td>
        <details>
          <summary>Details</summary>
          <div className="detailRow">
            <label for="dateApplied">Date Applied</label>
            <input name="dateApplied" type="date" />
          </div>
          <div className="detailRow">
            <label for="onlineAssessment">Online Assessment</label>
            <input type="checkbox" name="onlineAssessment"></input>
          </div>
          <div className="detailRow">
            <label for="phoneScreen">Phone Screen</label>
            <input type="checkbox" name="phoneScreen"></input>
          </div>
          <div className="detailRow">
            <label for="interview">Interview Round</label>
            <select name="interview">
              <option></option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
              <option>Five</option>
            </select>
          </div>
        </details>
      </td>
    </tr>
  );
};

export default TableRow;
