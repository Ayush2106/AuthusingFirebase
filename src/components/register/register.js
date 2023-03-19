import React,{useState} from 'react'
import './register.css'
import { Link ,useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword  ,updateProfile} from 'firebase/auth'
import {auth} from "../../firebase"
function Register() {
  const navigate=useNavigate();
  const[user,setUser]= useState({
    name:'',
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
    if(!user.name|| !user.email|| !user.pass) //agar name ni ha ya email ni hai ya fir passsword ni hai
    {
     setErrormsg("Fill all fields")
      return;
    }
      setErrormsg("")
      setSubmitButtonDisabled(true)
      createUserWithEmailAndPassword (auth, user.email,user.pass).then(async(res)=>{
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
      await updateProfile(user,{
         displayName:user.name
       }
)
navigate('/');
      }).catch((err)=>{
        setSubmitButtonDisabled(false);
        setErrormsg(err.message)
      });
  }
  return (
    <div className="register">
    <h1>Register</h1>
    <input type="text" name='name' value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
    <input type="text" name='email' value={user.email}  placeholder="Your Email" onChange={handleChange} ></input>
    <input type="password" name='pass' value={user.pass}  placeholder="Your Password" onChange={handleChange} ></input>
    <b style={{fontSize:'15px',color:'red'}}>{errormsg}</b>
    <button className="button"  disabled={submitButtonDisabled}  onClick={handleSubmit}>Register</button>
    <div>or</div>
    <div className="button">
    <Link to ="/login" style={{color:'white',textDecoration:'none'}}>Login</Link></div>
</div> 
 )
}

export default Register

// 5 kg namkeen 750
// 1 kg kadhi 200
// 1 kg peda 70
// 5 katori 150
// 3 kg chips 2 masala 1 salted (6 packet)   540