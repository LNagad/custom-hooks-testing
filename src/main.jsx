import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { HooksApp } from './HooksApp.jsx';
// import { TodoApp } from './08-useReducer/TodoApp.jsx';
import { MainApp } from './09-useContext/MainApp';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
);
