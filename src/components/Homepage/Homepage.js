import React from 'react'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Homepage() {
  const navigate= useNavigate();
  const handleSubmission=()=>{
    signOut(auth).then((res)=>{
console.log("logged out successfully ")
    }).catch((error)=>{
      console.log(error)
    })
    navigate('/login')
  }
  return (
    <div>Homepage
<button onClick={handleSubmission}>LOGGING OUT</button>

    </div>
  )
}

export default Homepage