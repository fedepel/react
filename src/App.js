import React from 'react';
import NavBar from './components/Header/NavBar.jsx';
import BasicExample from './components/Main/itemListContainer.jsx';
import './index.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <BasicExample/>
    </div>
  );
}
