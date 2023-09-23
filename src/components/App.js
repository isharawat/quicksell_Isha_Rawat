// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterDropdown from './FilterDropdown';
import OuterBoard from './OuterBoard';
import '../styles/App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const userInfo = {};
  const [selectedGrouping, setSelectedGrouping] = useState("status");
  const [selectedOrdering, setSelectedOrdering] = useState('priority');
  // const [data, setData] = useState({});
  
  async function userMap() {
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
    fetchApi().then(() => {
      groupedAndSortedTickets();

      }
    );
    //userMap();
  }, []);
  
  function groupedAndSortedTickets(){
    let groupedTickets = {};
    console.log("insidegroupandsirt",selectedGrouping);
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
  
  userMap();
  const data = groupedAndSortedTickets();
  console.log("dataafterrerender",data, selectedGrouping);
  return (
    <div className="App">
      <FilterDropdown
        selectedGrouping={selectedGrouping}
        setSelectedGrouping={setSelectedGrouping}
        selectedOrdering={selectedOrdering}
        setSelectedOrdering={setSelectedOrdering}
        users={users}
      />
      <OuterBoard
        users = {users}
        userInfo = {userInfo}
        data = {data}
        selectedGrouping = {selectedGrouping}
      />
    </div>
  );
}

export default App;
