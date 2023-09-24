import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./SingleColumn.css";
import ColumnDetails from "../ColumnDetails/ColumnDetails";

function SingleColumn({ title, tickets, userInfo, currentGrouping }) {
  return (
    <div className="kanban_column">
      <ColumnDetails title = {title} tickets = {tickets} userInfo = {userInfo} currentGrouping={currentGrouping}/>
      {tickets.map((ticket) => (
        <SingleCard
          key={ticket.id}
          ticket={ticket}
          userInfo={userInfo}
          currentGrouping={currentGrouping}
        />
      ))}
    </div>
  );
}

export default SingleColumn;
