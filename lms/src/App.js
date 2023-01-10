import './App.css';
import Login from './components/Login/Login';
import AdminPage from './components/adminpage/AdminPage';
import React from 'react'
import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
  import AddBatch from './components/adminpage/AddBatch';
  import AddMentor from './components/adminpage/AddMentor';
import Request from './components/adminpage/Request';
import Test from './components/adminpage/Test';
import AddBatch1 from './components/AddBatch1';
  
function App() {
  return (
    <div className="App">
      <Test/>
         {/* <Login />   */}
       
       {/* <AdminPage/>  */}
         {/* <AddBatch/>     */}
       
         {/* <AddMentor/>   */}
         {/* <Request/> */}
       {/* <AddBatch1/> */}
    </div>
  );
}

export default App;