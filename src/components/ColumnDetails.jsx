import React from 'react'
import { useContext } from 'react';
import AppContext from '../context';
import UserProfile from "./UserProfile";
import { plus, no_priority } from '../assets';

const ColumnDetails = ({title, tickets, userInfo, selectedGrouping}) => {
  const values = useContext(AppContext);
  const statusIcon = values.statusIcon;
  const priorityIcon = values.priorityIcon;
  const priorityType = values.priorityType;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "5fr 1fr", margin:"15px 0px"}}>
        <div style={{ display: "inline-block" }}>
          <div style={{ display: "flex" }}>
            {selectedGrouping == "user" && (
              <>
                <UserProfile userInfo={userInfo} userId={title} />
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
          <img src={plus} style={{marginRight: "10px"}}/>
          <img src={no_priority} />
        </div>
      </div>
  )
}

export default ColumnDetails
