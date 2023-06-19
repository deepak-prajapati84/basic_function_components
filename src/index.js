import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MyFunction, { My1 } from './components/MyFunction';
// import './index.css';

function MyFuntion1(){

const [y,setY]=useState(30);

return <h1>The value of {y}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyFuntion1 />
    <MyFunction />

    <My1 />
  </React.StrictMode>
);


