// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import OuterBoard from './OuterBoard/OuterBoard';
import './App.css';
import { Vector1, arrow_down } from '../assets';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentGrouping, setCurrentGrouping] = useState("status");
  const [currentOrdering, setCurrentOrdering] = useState('priority');
  const [toggle, setToggle] = useState(false);
  let userInfo = {};

// Fetching api and setting state. 
  function fetchApi() {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) =>{
        setTickets(response.data.tickets);
        setUsers(response.data.users);    
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(() => {
    fetchApi();
  }, []);

// Function to update the userInfo after rerendering.
  function userMap() {
    users.forEach(user => {
      userInfo[user.id] = user;
    })
  }

// Sorting the tickets on the basis of desired ordering.
  function ticketsSorting(requiredTickets) {
    Object.keys(requiredTickets).forEach(key => {
      requiredTickets[key] = requiredTickets[key].sort((a, b) => {
        if (currentOrdering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
  }

  // Sorting the tickets on the basis of desired grouping.
  function ticketsGrouping(){
    let requiredTickets = {};
    tickets.forEach(ticket => {
      if (currentGrouping === 'user') {
        requiredTickets[ticket.userId] = requiredTickets[ticket.userId] || [];
        requiredTickets[ticket.userId].push(ticket);
      } else if (currentGrouping === 'priority') {
        requiredTickets[ticket.priority] = requiredTickets[ticket.priority] || [];
        requiredTickets[ticket.priority].push(ticket);
      } else {
        requiredTickets[ticket.status] = requiredTickets[ticket.status] || [];
        requiredTickets[ticket.status].push(ticket);
      }
      
    });
    ticketsSorting(requiredTickets);
    return requiredTickets;
  }

  // handling dropDown Menu.
  const handleClick= (e) => {
    if(toggle) {
      setToggle(false);
    }
    else {
      setToggle(true);
    }
  }

  // updating the latest data after rerendering.
  const data = ticketsGrouping();
  userMap();

  return (
    <div className="App">
      <div className="display-filter-button" onClick = {handleClick} >
        <img className = "display-filter-icon" src = {Vector1} alt = ""/>
        <div className = "display-filter-text">Display</div>
        <img className = "display-filter-icon" src = {arrow_down} alt = ""/>
      </div>
      {toggle && <FilterDropdown
        currentGrouping={currentGrouping}
        setCurrentGrouping={setCurrentGrouping}
        currentOrdering={currentOrdering}
        setCurrentOrdering={setCurrentOrdering}
      />}
      <OuterBoard userInfo = {userInfo} data = {data} currentGrouping = {currentGrouping}/>
    </div>
  );
}

export default App;
