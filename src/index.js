import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/App.css'; 
import App from './components/App';
import AppContext from './context';
import {in_progress, no_priority, low, medium, high, urgent, fade_circle, dashed_circle, void_circle, done} from '../src/assets/index';

ReactDOM.render(
  <React.StrictMode>
    <Outer/>   
  </React.StrictMode>,
  document.getElementById('root')
);
function Outer () {
  const app = {
    priorityType: ["No priority", "Low", "Medium", "High", "Urgent"],
    priorityIcon: [no_priority, low, medium, high, urgent],
    statusIcon: {
      "In progress": in_progress,
      "Todo": void_circle,
      "Done": done,
      "Backlog": dashed_circle,
    },
    groupingOptions: ["user", "priority", "status"],
    orderingOptions: ["priority", "title"],
  }
  return(
  <AppContext.Provider value={app}>
      <App />
  </AppContext.Provider>  
  )
}