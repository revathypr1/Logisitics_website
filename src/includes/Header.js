import React from 'react'
import styled from 'styled-components';
import Logo from "../assests/images/AR - logo.png"
import {Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <MainHeader>
            <Pick>
                <Icon>
                    <Img src={Logo} alt="imges"/>
                </Icon>
            </Pick>
            <Navigation>
                <Lists>
                    <List to="/">Home</List>
                    <List>About Us</List>
                    <List>services</List>
                    <List>QHSE</List>
                    <List>News</List>
                    <List>Career</List>
                    <List>Contact us</List>
                </Lists>
            </Navigation>
        </MainHeader>
    </div>
  )
}

const MainHeader=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
`;
const Pick=styled.h1`
    width: 5%;
`;
const Icon=styled.a`
   
`;
const Img=styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
`;
const Navigation=styled.nav`
    
`;
const Lists=styled.ul`
display: flex;


`;
const List=styled.li`
margin-left: 23px;
list-style: none;
font-weight:700;
font-size: 18px;
cursor: pointer;
`;


