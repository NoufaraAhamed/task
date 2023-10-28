import { useEffect, useState } from 'react';

import Mainsection from './components/Mainsection/Mainsection';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [items,setItems]= useState([])
  return (
    <div className="App">
      <Navbar/>
      <Mainsection items={items}/>
     
    </div>
  );
}

export default App;
