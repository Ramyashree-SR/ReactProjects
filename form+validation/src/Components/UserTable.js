import React from 'react'
import User from './User'

function UserTable({userFormData}) {
    return (
        <div>
             <h3>Details of Users</h3>
            <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
            <tbody>
              {
                userFormData.map((user,index)=>{
                    return <User key={index} user={user} />
                })
            }
            </tbody>
            </table>
        </div>
    )
}

export default UserTable
