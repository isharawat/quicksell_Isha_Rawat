// FilterDropdown.js
import React, { useContext } from 'react';
import AppContext from '../../context';
import './FilterDropdown.css'

function FilterDropdown({currentGrouping, setCurrentGrouping, currentOrdering, setCurrentOrdering}) {
  const values = useContext(AppContext);
  const groupingOptions = values.groupingOptions;
  const orderingOptions = values.orderingOptions;

  return (
    <div className="filter-dropdown">
      <div className='filter-dropdown-div'>
        <div className='filter-display-text'>Grouping</div> 
        <select className = "filter-select" value={currentGrouping} onChange={(e) => setCurrentGrouping(e.target.value)}>
          {groupingOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className='filter-dropdown-div'>
        <div className='filter-display-text'>Ordering</div>
        <select className = "filter-select" value={currentOrdering} onChange={(e) => setCurrentOrdering(e.target.value)}>
          {orderingOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterDropdown;
 