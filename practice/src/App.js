
import './App.css';
import Parent from './component/usecallback/Counter';
import Data from './component/useref/Data';
import MyRef from './component/useref/MyRef';
import Counter from './component/usememo/Counter1';
import UseRef from './component/useref/UseRef';
import UseEffectWithArray from './component/useeffect/UseEffectWithArray';
import { useState } from 'react';
import MyComponent from './component/useeffect/MyComponent';
import Counter2 from './component/useeffect/Counter2';
import { ClickCounter } from './component/hoc/ClickCounter';
import HoverCounter from './component/hoc/HoverCounter';
import Parent2child from './component/p2cclass/Parent2child';

function App() {
  const [isRender, setisRender] = useState(true)
  return (
    <div className="App">
       <MyRef/>
      <UseRef/> 
      <Data/>
      {/* <Parent/> */}
      {/* <Counter/> */}

       {/* <Counter2/>  */}
     {/* {isRender && <MyComponent/>} 
     <button onClick={()=>{setisRender(false)}}>Unmount Component</button> 
     <UseEffectWithArray/> */}
      
      {/* <ClickCounter name="Lalisa"/> */}
      {/* <HoverCounter/> */}

      {/* <Parent2child/> */}
    </div>
  );
}

export default App;