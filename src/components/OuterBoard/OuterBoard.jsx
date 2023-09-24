import React from 'react';
import SingleColumn from '../SingleColumn/SingleColumn';
import './OuterBoard.css'; // Import custom styles for the Single board

function OuterBoard({userInfo, data, selectedGrouping}) {
  return (
    <div className="kanban-board">
      {data && data !== 'undefined' && Object.keys(data).map((key) => (
      <SingleColumn
        key={key}
        title={key}
        tickets={data[key]}
        userInfo = {userInfo}
        selectedGrouping = {selectedGrouping}
      />))
      }
    </div>
  );
 
}

export default OuterBoard;
