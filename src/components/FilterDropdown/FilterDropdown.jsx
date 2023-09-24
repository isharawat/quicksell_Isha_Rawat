// FilterDropdown.js
import React, { useContext } from 'react';
import AppContext from '../../context';
import './FilterDropdown.css'
function FilterDropdown({selectedGrouping, setSelectedGrouping, selectedOrdering, setSelectedOrdering}) {

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
      <div className='filter-dropdown-div'>
        <div className='filter-display-text'>Grouping</div> 
        <select className = "filter-select" value={selectedGrouping} onChange={handleGroupingChange}>
          {groupingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className='filter-dropdown-div'>
        <div className='filter-display-text'>Ordering</div>
        <select className = "filter-select" value={selectedOrdering} onChange={handleOrderingChange}>
          {orderingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterDropdown;
 