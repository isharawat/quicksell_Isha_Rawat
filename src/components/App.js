// App.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FilterDropdown from './FilterDropdown';
import OuterBoard from './OuterBoard';
import '../styles/App.css';
import { Vector1, arrow_down } from '../assets';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  let userInfo = {};
  const [selectedGrouping, setSelectedGrouping] = useState("status");
  const [selectedOrdering, setSelectedOrdering] = useState('priority');
  
  function userMap() {
    users.forEach(user => {
      userInfo[user.id] = user;
    })
  }

  function fetchApi() {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) =>{
        setTickets(response.data.tickets);
        setUsers(response.data.users);
       // await groupedAndSortedTickets();       
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(() => {
    fetchApi();
  }, []);
  
  function groupedAndSortedTickets(){
    let groupedTickets = {};
    tickets.forEach(ticket => {
      
      if (selectedGrouping === 'user') {
        groupedTickets[ticket.userId] = groupedTickets[ticket.userId] || [];
        groupedTickets[ticket.userId].push(ticket);
      } else if (selectedGrouping === 'priority') {
        groupedTickets[ticket.priority] = groupedTickets[ticket.priority] || [];
        groupedTickets[ticket.priority].push(ticket);
      } else {
        groupedTickets[ticket.status] = groupedTickets[ticket.status] || [];
        groupedTickets[ticket.status].push(ticket);
      }
      
    });

    // Sort tickets based on selectedOrdering
    Object.keys(groupedTickets).forEach(key => {
      groupedTickets[key] = groupedTickets[key].sort((a, b) => {
        if (selectedOrdering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    return groupedTickets;
  }
  
  
  const data = groupedAndSortedTickets();
  userMap();
  const handleClick= (e) => {
    if(toggle) {
      setToggle(false);
    }
    else {
      setToggle(true);
    }
  }

  const [toggle, setToggle] = useState(false);
  console.log("dataafterrerender",data, selectedGrouping);
  return (
    <div className="App">
      <div style={{display: "flex", width: "70px", justifyContent: "space-evenly"}}>
        <img src = {Vector1}></img>
        <div style={{fontSize: "12px"}}>Display</div>
        <img src = {arrow_down} onClick = {handleClick} />
      </div>
      {toggle && <FilterDropdown
        selectedGrouping={selectedGrouping}
        setSelectedGrouping={setSelectedGrouping}
        selectedOrdering={selectedOrdering}
        setSelectedOrdering={setSelectedOrdering}
        
      />}
      <OuterBoard
        userInfo = {userInfo}
        data = {data}
        selectedGrouping = {selectedGrouping}
      />
    </div>
  );
}

export default App;
