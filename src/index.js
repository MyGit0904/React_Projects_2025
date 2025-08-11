import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MapData from './MapData';
import reportWebVitals from './reportWebVitals';
import Operations from './Operations';
import User from './User';
import Parent from './Parent';
import StateDemo from './StatesDemo';
import MapDemo from './MapDemo';
import MyMap from './MyMap';
import Child1 from './Child1';
import Parent1 from './Parent1';
import List from './List';
// import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MapData/> */}
    {/* <Operations /> */}
    {/* <User /> */}

    {/* <Parent /> */}
    {/* <StateDemo /> */}


    {/*  */}

    <Child1 />

    {/* <Parent1 /> */}

     {/* <MyMap /> */}

     {/* <List /> */}
     {/* <Counter /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
