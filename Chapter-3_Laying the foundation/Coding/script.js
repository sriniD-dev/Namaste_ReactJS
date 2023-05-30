import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = <h1 id="heading">Header</h1>;

// JSX ==> React.createElement ==>React.Element--Js Object ==>HTML Element(Renders)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
