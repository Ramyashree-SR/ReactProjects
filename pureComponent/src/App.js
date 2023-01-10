import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/ParentComponent';
import Myref from './Components/Myref';
import UseRef from './Components/UseRef';

function App() {
  return (
    <div className="App">
    <ParentComponent/> 
    {/* <Myref/>
    <UseRef/> */}
    </div>
  );
}

export default App;
