import React,{useState} from 'react'
import './UserForm.css'

function UserForm(props) {

    const [firstNameError,setFirstNameError]=useState('')
    const [lastNameError,setLastNameError]=useState('')
    const [ageError,setAgeError]=useState('')


    const [userData, setUserData] = useState({
        firstName:'',
        lastName:'',
        age:''
    });

    const updateUserData=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value,
        });
    };


// regex 
let validateFirstName = () => {
    if (userData.firstName) {
        let regex = /^[a-zA-Z]{2,30}$/;
        if (regex.test(userData.firstName)) {
            setFirstNameError("")
            return true;
        } else {
            setFirstNameError("*Enter valid first name, only characters allowed")
        }
    } else {
        setFirstNameError('*First Name Required')
    }
    return false;
   }

let validateLastName = () => {
    if (userData.lastName) {
        let regex = /^[a-zA-Z]{2,30}$/;
        if (regex.test(userData.lastName)) {
            setLastNameError("")
            return true;
        } else {
            setLastNameError("*Enter valid last name, only characters allowed")
        }
    } else {
        setLastNameError('*Last Name Required')
    }
    return false;
}

const validateAge = () => {
    if(userData.age){
        if(userData.age>0 && userData.age<=125){
            setAgeError("")
            return true
        }
        else{
            setAgeError("Enter Valid Age, should be between 0-125")
        }
       
    }
    else{
        setAgeError("Age is Required")
    }
    return false;

}
    const saveData=(event)=>{
        //validation
        validateFirstName();
        validateLastName();
        validateAge();
        if(validateFirstName() && validateLastName() && validateAge()){
            props.getUserData(userData); 
            setUserData({
                firstName:'',
                lastName:'',
                age:''
            })     
        }
        //do all the validation 
        //once valid send the data to app
        // props.getUserData(userData);
        // clearing the form if saved successfully
       }

    return (
        <div className='userDisplay'>
            <h2 className="title">Login Form</h2>

            <input className="ipField" name='firstName' placeholder="Enter First Name" value={userData.firstName}
            onChange={(event)=>{updateUserData(event)}} />

            {/* error validation  */}
            {firstNameError && <p className="errorMsg">{firstNameError}</p>}

            <input className="ipField" name='lastName' placeholder="Enter Last Name" value={userData.lastName}
            onChange={(event)=>{updateUserData(event)}} />

            {/* error validation  */}
            {lastNameError && <p className="errorMsg">{lastNameError}</p>}

            <input className="ipField " name='age' type="number"  placeholder="Enter Age" value={userData.age}
            onChange={(event)=>{updateUserData(event)}} />

             {/* error validation  */}
             {ageError && <p className="errorMsg">{ageError}</p>}

            <button className='btn btn-primary' onClick={saveData}>SAVE</button>
        </div>
    )
}

export default UserForm