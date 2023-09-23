// KanbanColumn.js
import React from 'react';
import SingleCard from './SingleCard';
import { Vector, plus, done, no_priority, low, medium, high, urgent, void_circle, dashed_circle, in_progress } from '../assets';
import UserProfile from './UserProfile';
import { useContext } from 'react';
import AppContext from '../context';

function SingleColumn({ title, tickets, userInfo, users, selectedGrouping}) {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  console.log("selectedGroupinginsideprofile",selectedGrouping)
  return (
    <div className="kanban-column">
      <div style = {{display: "flex"}}>
        <div style ={{display: "inline-block", marginRight: "120px"}}>
          
          <div style = {{display: "flex"}}>
            {(selectedGrouping == 'user')? 
            <UserProfile users = {users} userInfo = {userInfo} userId={title}/>
          : ((selectedGrouping == 'priority')? <img src = {priorityIcon[title]}/>:<img src = {statusIcon[title]}/>)}
          <span style={{marginLeft: "20px", marginRight: "10px"}}>{title}</span>
          <span>{tickets.length}</span>
          </div>
        </div>
        <div style ={{display: "inline-block"}}>
          <img src = {plus}/>
          <img src = {no_priority}/>
        </div>
      </div>
      
      {tickets.map(ticket => (
      <SingleCard
        key={ticket.id}
        ticket={ticket}
        users={users}
        userInfo = {userInfo}
        selectedGrouping = {selectedGrouping}
      />
    ))}
    </div>
  );
}

export default SingleColumn
