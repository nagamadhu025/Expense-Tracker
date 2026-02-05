import React from 'react'
import styled from 'styled-components'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom';


const LoginContainer=styled.div`
display:flex;
flex-direction:column;
font-family:Montserrat;
align-items:center;
margin:30px 0px 10px;
`
const Form=styled.form`
display:flex;
flex-direction:column;
background-color:white;
padding:30px;
border-radius:10px;
box-shadow:0px 0px 10px rgba(0,0,0,0.1);
width:250px;
height:250px;
justify-content:space-around;
input{
    padding:10px;
    border:none;
    border-radius:5px;
    box-shadow:0px 0px 5px rgba(0,0,0,0.1);
    width:200px;
    
`
const Button=styled.button`
padding:10px;
border:none;
border-radius:5px;
box-shadow:0px 0px 5px rgba(0,0,0,0.1);
background-color:blue;
color:white;
font-weight:bold;
cursor:pointer;
width:220px;
`
const Header=styled.div`
color:black;
font-size:25px;
font-weight:bold;
margin-bottom:20px;
align-items:center;
margin-left:70px;
`
const Button1=styled.button`
padding:10px;
background-color:white;
border:none;
color:blue;
cursor:pointer;
`

function Login() {

     function MyComponent() {
      const navigate = useNavigate();
        return (
            <button onClick={() => navigate('/Signup')}></button>
        );
    }
    const handleSignupClick = () => {
        MyComponent();
        };
  return (
    <LoginContainer>
    <div>
        <Header> 
            Login Page </Header>
            <Form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <Button type='submit'>Login</Button>
                <Button1 type='submit' onClick={handleSignupClick}>Sign up?</Button1>
            </Form>
       
    </div>
    </LoginContainer>
  )
}

export default Login