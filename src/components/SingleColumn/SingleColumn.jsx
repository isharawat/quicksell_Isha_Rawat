// KanbanColumn.js
import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./SingleColumn.css";
import ColumnDetails from "../ColumnDetails/ColumnDetails";

function SingleColumn({ title, tickets, userInfo, selectedGrouping }) {
  
  return (
    <div className="kanban_column">
      <ColumnDetails title = {title} tickets = {tickets} userInfo = {userInfo} selectedGrouping={selectedGrouping}/>
      {tickets.map((ticket) => (
        <SingleCard
          key={ticket.id}
          ticket={ticket}
          userInfo={userInfo}
          selectedGrouping={selectedGrouping}
        />
      ))}
    </div>
  );
}

export default SingleColumn;
