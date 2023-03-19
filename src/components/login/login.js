import React ,{useState} from 'react'
import './login.css'
import { Link ,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../firebase"

function Login() {
  const navigate=useNavigate();

  const[user,setUser]= useState({
    email:'',
    pass:''
  })
  const [submitButtonDisabled,setSubmitButtonDisabled]= useState(false)
const[errormsg,setErrormsg]=useState("")
  const handleChange=(e)=>{
    const {name,value}=e.target
setUser({
  ...user,
  [name]: value
})
  }
  const handleSubmit=()=>{
    if( !user.email|| !user.pass) //agar name ni ha ya email ni hai ya fir passsword ni hai
    {
     setErrormsg("Fill all fields")
      return;
    }
      setErrormsg("")
      setSubmitButtonDisabled(true)
      signInWithEmailAndPassword (auth, user.email,user.pass).then(async(res)=>{
        console.log(res);
        setSubmitButtonDisabled(false);    
navigate('/');
      }).catch((err)=>{
        setSubmitButtonDisabled(false);
        setErrormsg(err.message)
      });
    }
  return (
    <div className="login">
    <h1>Login</h1>
    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name="pass" value={user.pass} onChange={handleChange} placeholder="Enter your Password" ></input>
    <b style={{fontSize:'15px',color:'red'}}>{errormsg}</b>
    <button className="button" disabled={submitButtonDisabled}  onClick={handleSubmit}>Login
    </button>
    <div>or</div>
    <div className="button" >
    <Link to ="/register" style={{color:'white',textDecoration:'none'}}>Register</Link></div>
   </div>
     )
}

export default Login