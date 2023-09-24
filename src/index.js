import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import AppContext from './context';
import {in_progress, no_priority, low, medium, high, urgent, dashed_circle, void_circle, done} from './assets/index';
import './styles/App.css';
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
//   return(
//       <AppContext.Provider value={app}>
//           <App />
//       </AppContext.Provider> 
     
//   )
// }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( 
<React.StrictMode>
  <AppContext.Provider value={app}>
    <App />
  </AppContext.Provider> 
</React.StrictMode>
);


