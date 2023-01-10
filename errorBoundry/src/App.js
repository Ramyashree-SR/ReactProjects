import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Components/Person';
 import React, { Suspense, useState } from 'react';
 
const PersonDetailsComponent= React.lazy(()=>import('./Components/PersonDetails'))

function App() {

   const [isShow, setisShow] = useState(false)
  return (
    <div className="App">
      {/* <ErrorBoundary>

        <Person />
      </ErrorBoundary> */}

      {isShow && <Suspense fallback={<h1>Loading....</h1>}>
  <
    PersonDetailsComponent/>
  </Suspense>}
  <button onClick={()=>{setisShow(true)}}>PersonDetails</button>

    </div>
  );
}

export default App;
