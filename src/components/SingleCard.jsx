import "../styles/SingleCard.css";
import { fade_circle} from "../assets/index";
import UserProfile from "./UserProfile";
import { useContext } from "react";
import AppContext from "../context";

function SingleCard({ ticket, userInfo, selectedGrouping }) {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  console.log(statusIcon);
  const userId = ticket.userId;
  return (
    <div className="kanban-card">
      <div className="top-row">
        {ticket.id}
        {selectedGrouping !== "user" && (
          <UserProfile userId={userId} userInfo={userInfo} />
        )}
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {selectedGrouping !== "status" && (
            <img
              style={{ display: "inline-block", marginRight: "7px" }}
              src={statusIcon[ticket.status]}
            />
          )}
        </div>

        <div className="ticket-title">{ticket.title}</div>
      </div>
      <div style={{ display: "flex" }}>
        <span>
          {selectedGrouping !== "priority" && (
            <img
              className="feature"
              style={{
                width: "10px",
                height: "10px",
                display: "inline-block",
                marginRight: "10px",
                display: "flex",
                justifyItems: "center",
                borderRadius: "3px",
                padding: "3px",
              }}
              src={priorityIcon[ticket.priority]}
            />
          )}
        </span>
        <div className="feature-request-button feature">
          <div style={{ display: "inline-block" }}>
            <img style={{ marginRight: "5px" }} src={fade_circle} />
          </div>
          <div style={{ display: "inline-block" }}>Feature Request</div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
