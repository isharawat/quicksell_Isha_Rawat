// KanbanColumn.js
import React from "react";
import SingleCard from "./SingleCard";
import {
  Vector,
  plus,
  done,
  no_priority,
  low,
  medium,
  high,
  urgent,
  void_circle,
  dashed_circle,
  in_progress,
} from "../assets";
import UserProfile from "./UserProfile";
import { useContext } from "react";
import AppContext from "../context";
import "../styles/SingleColumn.css";

function SingleColumn({ title, tickets, userInfo, users, selectedGrouping }) {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  const priorityType = values.priorityType;
  console.log("selectedGroupinginsideprofile", selectedGrouping);
  return (
    <div className="kanban_column">
      <div style={{ display: "grid", gridTemplateColumns: "5fr 1fr" }}>
        <div style={{ display: "inline-block" }}>
          <div style={{ display: "flex" }}>
            {selectedGrouping == "user" && (
              <>
                <UserProfile users={users} userInfo={userInfo} userId={title} />
                <span
                  style={{
                    marginLeft: "20px",
                    marginRight: "5px",
                    fontSize: "13px",
                  }}
                >
                  {userInfo[title].name}
                </span>
              </>
            )}
            {selectedGrouping == "priority" && (
              <>
                <img src={priorityIcon[title]} />
                <span
                  style={{
                    marginLeft: "20px",
                    marginRight: "5px",
                    fontSize: "13px",
                  }}
                >
                  {priorityType[title]}
                </span>
              </>
            )}
            {selectedGrouping == "status" && (
              <>
                <img src={statusIcon[title]} />
                <span
                  style={{
                    marginLeft: "20px",
                    marginRight: "5px",
                    fontSize: "13px",
                  }}
                >
                  {title}
                </span>
              </>
            )}
            <span style={{ fontSize: "13px" }}>{tickets.length}</span>
          </div>
        </div>
        <div style={{ display: "inline-block", textAlign: "end" }}>
          <img src={plus} />
          <img src={no_priority} />
        </div>
      </div>

      {tickets.map((ticket) => (
        <SingleCard
          key={ticket.id}
          ticket={ticket}
          users={users}
          userInfo={userInfo}
          selectedGrouping={selectedGrouping}
        />
      ))}
    </div>
  );
}

export default SingleColumn;
