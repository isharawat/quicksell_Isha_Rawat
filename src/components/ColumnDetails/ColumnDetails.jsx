import React from 'react'
import { useContext } from 'react';
import AppContext from '../../context';
import UserProfile from "../SingleCard/UserProfile";
import { plus, no_priority } from '../../assets';
import './ColumnDetails.css';
const ColumnDetails = ({title, tickets, userInfo, currentGrouping}) => {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  const priorityType = values.priorityType;
  let iconURL, columnDisplayText;

  if(currentGrouping === "user") {
    columnDisplayText = userInfo[title].name;
  }
  else if(currentGrouping === "priority") {
    iconURL = priorityIcon[title];
    columnDisplayText = priorityType[title];
  }
  else {
    iconURL = statusIcon[title];
    columnDisplayText = title;
  }

  return (
    <div className = "column-details-outer-box">
        <div className = "inner-left-box">
          <div style={{ display: "flex" }}>
            {(currentGrouping == "user") ? 
              <UserProfile userInfo={userInfo} currUserId={title} />:<img src={iconURL} />
            }
            <span className='columnDisplayText'> {columnDisplayText} </span>
            <span style={{ fontSize: "12px" }}>{tickets.length}</span>
          </div>
        </div>
        <div className = 'inner-right-box'>
          <img src={plus} style={{marginRight: "10px"}}/>
          <img src={no_priority} />
        </div>
      </div>
  )
}

export default ColumnDetails
