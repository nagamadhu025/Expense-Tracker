import React, { useState } from "react";
import styled from "styled-components";
import Expense from "./components/Expense";
import Login from "./assets/Login/Login";

const Container=styled.div`
display:flex;
flex-direction:column;
font-family:Montserrat;
align-items:center;
margin:30px 0px 10px;
`;

const Header=styled.span`
color:black;
font-size:25px;
font-weight:bold;
`;

function App(){
    return (
    <Container>
        <>
        <Header>Expense Tracker</Header>
        {/* <Login></Login> */}
        <Expense></Expense>
        </>
    </Container>
    )
}

export default App