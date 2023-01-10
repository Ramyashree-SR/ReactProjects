import logo from './logo.svg';
import './App.css';
// import Data from './component/data';
import DataComponent from './component/DataComponent';
import { useState } from 'react';
import ComponentA from './component/ComponentA';

function App() {
 const [state,setState] = useState(true)
  return (
    <div className="App">
     {/* <Data/> */}
     {state ? <DataComponent  setState={setState}/> :<ComponentA/>}
    </div>
  );
}

export default App;
