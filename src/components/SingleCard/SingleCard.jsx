import "./SingleCard.css";
import UserProfile from "./UserProfile";
import { useContext } from "react";
import AppContext from "../../context";

// Component for handling a single ticket.
function SingleCard({ ticket, userInfo, currentGrouping }) {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  const currUserId = ticket.userId;
  return (
    <div className = "outer-card">
      <div className = "top-row">
        {ticket.id}
        {currentGrouping !== "user" && (
          <UserProfile currUserId={currUserId} userInfo={userInfo} />
        )}
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {currentGrouping !== "status" && (
            <img className = "inlineblock marginright"
              src={statusIcon[ticket.status]} alt = ""
            />
          )}
        </div>

        <div className = "ticket-title">{ticket.title}</div>
      </div>
      <div style={{ display: "flex" }}>
        <span>
          {currentGrouping !== "priority" && (
            <img className = "feature-request-left-icon" src={priorityIcon[ticket.priority]} alt = ""/>
          )}
        </span>
        <div className = "feature-request-button feature">
          <div className = "feature-request-icon">
          </div>
          <div className = "inlineblock">Feature Request</div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
