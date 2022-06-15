// import React from 'react';
// // import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom'
// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById("root"));
// root.render(
//     <Router>
//          <App />
//     </Router>
//    );



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
// document.getElementById('root'));
// import {BrowserRouter as Router} from 'react-router-dom'
// import App from './App';
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <Router>
//         <App />
//     </Router>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import {BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
  
);