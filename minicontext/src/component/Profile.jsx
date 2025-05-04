import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
   
    if(!user) {
        return <h2>please login</h2>
    }
    return(
        <>
            <h2>profile page</h2>
            <h3>{user.userName}</h3>
            <h3>{user.password}</h3>
            <button onClick={() => alert('logout')}>logout</button>
        </>
    )
}

export default Profile
