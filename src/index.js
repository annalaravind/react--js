import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ClassApp1 from './components/classcomp/ClassApp1';
import ClassApp2 from './components/classcomp/ClassApp2';
import ClassApp3 from "./components/classcomp/ClassApp3";
import ClassApp4 from "./components/classcomp/ClassApp4";
import ClassApp5 from "./components/classcomp/ClassApp5";
import FuncApp1 from "./components/functioncomp/FuncApp1"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassApp1 />
    <ClassApp2 />
    <ClassApp3 />
    <ClassApp4 />
    <ClassApp5 />
    <FuncApp1/>
  </div>
);


