import '../styles/SingleCard.css';
import { fade_circle, dashed_circle, void_circle, done } from '../assets/index';
import UserProfile from './UserProfile';
import { useContext } from 'react';
import AppContext from '../context';
const renderPriorityCard = (ticket, userInfo, selectedGrouping, statusIcon, priorityIcon) => {
  const userId = ticket.userId;

  return (
    <div className="kanban-card">
      <div className="top-row">
        <div className="user-id">
          {userId}
        </div>
        <UserProfile userId = {userId} userInfo={userInfo}/>
      </div>
      <div className="ticket-title">
      {selectedGrouping === 'priority' ? <img src = {statusIcon[ticket.status]}/>:<></>} 
        {ticket.title}
      </div>
      <div className="feature-request-button">
         {selectedGrouping !== 'priority' ? <img style = {{marginRight: "10px"}} src = {priorityIcon[ticket.priority]}/>:<></>}
          <img src = {fade_circle}/>
          <span style={{fontSize: "15px"}}> Feature Request</span> 
      
      </div>
    </div>
  );
};
const renderUserCard = (ticket, priorityIcon, statusIcon) => {
  // User card layout
  return (
    <div className="kanban-card">
      <div className="check-button">
        {/* Customize the check button based on 'status' */}
        <img src = {statusIcon[ticket.status]} className="empty-circle"/>
        <div className="ticket-title">
          {ticket.title}
        </div>
      </div>
    
      <div className="feature-request-button">
        
          <img style = {{marginRight: "10px"}} src = {priorityIcon[ticket.priority]}/>
          <img src = {fade_circle}/>
          <span> Feature Request</span> 
        
        
      </div>
    </div>
  );
};
function SingleCard({ticket, userInfo, selectedGrouping}) {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  return ( selectedGrouping !== "user" ? 
  renderPriorityCard(ticket, userInfo, selectedGrouping, statusIcon, priorityIcon) : 
  renderUserCard(ticket, statusIcon, priorityIcon)
  )
}

export default SingleCard;
