import "../styles/SingleCard.css";
import { fade_circle, dashed_circle, void_circle, done } from "../assets/index";
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
      <div className="top-row" style={{ textAlign: "start" }}>
        {ticket.id}
        {selectedGrouping !== "user" && <UserProfile userId={userId} userInfo={userInfo} />}
      </div>
      <div style={{display: "flex"}}>
        <div style={{display: "inline-block"}}>{selectedGrouping !== "status" && <img src={statusIcon[ticket.status]} />}</div>
        
        <div className="ticket-title">{ticket.title}</div>
      </div>
      <div style={{ display: "flex" }}>
        <span
          className="feature"
          style={{
            display: "inline-block",
            marginRight: "10px",
            display: "flex",
            justifyItems: "center",
            borderRadius: "3px"
          }}
        >
          {selectedGrouping !== "priority" && <img style={{ padding: "3px" }} src={priorityIcon[ticket.priority]}/>}
        </span>
        <div className="feature-request-button feature" style={{ display: "inline-block" }}>
          <img  style={{marginRight: "5px"}} src={fade_circle} />
          <span>Feature Request</span>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
