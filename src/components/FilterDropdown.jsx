// FilterDropdown.js
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context';
function FilterDropdown({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
}) {

  const values = useContext(AppContext);
  const groupingOptions = values.groupingOptions;
  const orderingOptions = values.orderingOptions;

  const handleGroupingChange = (e) => {
    console.log("handlegrouping",e.target.value);
    setSelectedGrouping(e.target.value);
  };
  const handleOrderingChange = (e) => {
    setSelectedOrdering(e.target.value);
  };

  return (
    
    <div className="filter-dropdown">
      <label>Grouping: 
        <select value={selectedGrouping} onChange={handleGroupingChange}>
          {groupingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <br></br>
      <label>Ordering: 
        <select value={selectedOrdering} onChange={handleOrderingChange}>
          {orderingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterDropdown;
