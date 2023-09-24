import React from 'react';
import SingleColumn from './SingleColumn';
import '../styles/OuterBoard.css'; // Import custom styles for the Single board

function OuterBoard({users, userInfo, data, selectedGrouping}) {
  return (
    <div className="kanban-board">
      {data && data !== 'undefined' && Object.keys(data).map((key) => (
      <SingleColumn
        key={key}
        title={key}
        tickets={data[key]}
        userInfo = {userInfo}
        users={users}
        selectedGrouping = {selectedGrouping}
      />))
      }
    </div>
  );
 
}

export default OuterBoard;
