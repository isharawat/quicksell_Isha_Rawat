import "./SingleCard.css";
import { fade_circle} from "../../assets/index";
import UserProfile from "../UserProfile";
import { useContext } from "react";
import AppContext from "../../context";

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
            <img className="inlineblock marginright"
              src={statusIcon[ticket.status]}
            />
          )}
        </div>

        <div className="ticket-title">{ticket.title}</div>
      </div>
      <div style={{ display: "flex" }}>
        <span>
          {selectedGrouping !== "priority" && (
            <img className="feature-request-left-icon" src={priorityIcon[ticket.priority]} />
          )}
        </span>
        <div className="feature-request-button feature">
          <div className = "inlineblock">
            <img className = "marginright" src={fade_circle} />
          </div>
          <div className="inlineblock">Feature Request</div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;