// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import UserForm from './Components/UserForm';
import UserTable from './Components/UserTable';

function App() {

  //parse the data
  const GetLocalData = () => {
    let data = localStorage.getItem('userData')
    if (data) {
      return JSON.parse(localStorage.getItem('userData'))
    } else {
      return []
    }
  }

  const [userFormData, setUserFormData] = useState(GetLocalData())

  const getUserData = (userData) => {
    console.log(userData);

    // dont update state like below 
    // userFormData.push(userData)
    // setUserFormData(userFormData)

    // always update state like below array or Object
    // 1. Take a copy of state array
    const userFormDataCopy = [...userFormData]
    // 2. do all the necesssary changes / code changes 
    userFormDataCopy.push(userData)
    // 3. set the copied array to the state 
    setUserFormData(userFormDataCopy)

    
    //local
    localStorage.setItem('userData', JSON.stringify(userFormDataCopy))

  }
  return (
    <div className="App">
      <UserForm getUserData={getUserData} />
      <UserTable userFormData={userFormData} />
    </div>
  );
}

export default App;