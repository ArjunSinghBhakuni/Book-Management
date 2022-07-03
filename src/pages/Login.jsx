import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../Redux/AuthReucer/action'

 

const Login = () => {
  
const location = useLocation();
const comingFrom = location.state?.from?.pathname || '/';


  const [email,setEmail] = useState("eve.holt@reqres.in")
  const [password,setPassword] = useState('cityslicka')
const dispatch = useDispatch()
const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
if(email && password){
  dispatch(login({email,password })).then((r)=>{

    if(r.type ==='USER_LOGIN_SUCCESS'){
      navigate(comingFrom,{replace:true});
    }
  })
}
  }



  return (

  <DivWrapper>
<center>

    <h1>Login</h1>
</center>

<form  onSubmit={handleSubmit}>
  <INputWrapper>
    <label htmlFor="">User Email :</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" />
  </INputWrapper>
  <INputWrapper>
    <label htmlFor="">User Password :</label>
    <input onChange={(e)=>setPassword(e.target.value)}  type="password" />
  </INputWrapper>
  <Button style={{
border:"1px solid teal",
width : "90%",
padding:"2px",
margin:"auto",
cursor:"pointer",

  }}>
    

    Login
   
    </Button>
</form>


</DivWrapper>
  )
}

export default Login;

const DivWrapper = styled.div`

width:350px;
margin:auto;
margin-top:20px;
padding:2px 0px 20px 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 
`
const INputWrapper = styled.div`
 
width:300px;
display:flex;
justify-content : space-between;
margin : 10px;

`

const Button = styled.button`
border:1px solid teal;
width : 300px
padding:10px;
margin:auto;
cursor:pointer;

`