import React from 'react';
import SingleColumn from '../SingleColumn/SingleColumn';
import './OuterBoard.css';

function OuterBoard({userInfo, data, currentGrouping}) {
  return (
    <div className="outer-board">
      {data && data !== 'undefined' && Object.keys(data).map((key) => (
        <SingleColumn
          key={key}
          title={key}
          tickets={data[key]}
          userInfo = {userInfo}
          currentGrouping = {currentGrouping}
        />))
      }
    </div>
  );
 
}

export default OuterBoard;
