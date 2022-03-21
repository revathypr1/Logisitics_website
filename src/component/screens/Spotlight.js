import React from 'react'
import styled from 'styled-components'
import Spot from "../../assests/images/spotlight - image - 01.png"
import Crane from "../../assests/images/crane.png"
import "../../App.css"

export default function 
() {
  return (
    <div>
        <Main>
            <LeftDiv>
                <Heading>Welcome to <Span>AR Logistics</Span></Heading>
                <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit guatimala indo quisquam modi odio nostrum ad reiciendis.</Paragraph>
                <Buttondiv>Learn More</Buttondiv>
            </LeftDiv>
            <RightDiv>
              <ImageContainer>
                  <Images  src={Spot} alt="images"/>
                </ImageContainer>
                <Container>
                  <ImagesOne src={Crane} alt="images"/>
                </Container>
               
            </RightDiv>
           
        </Main>
    </div>
  )
}
const Main=styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  padding-top: 54px;
`;
const Wrapper=styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1480px;
`;
const LeftDiv=styled.div`
  width: 50%;
`;
const Heading=styled.h1`
color: #080133;
font-size: 61px;
    width: 68%;
    font-weight: 500;
`;
const Span=styled.span`
color: #ff7a00;
`;
const Paragraph=styled.p`
  margin-top: 20px;
    max-width: 77%;
    color: #c0ccda;
    margin-bottom: 30px;
`;
const Buttondiv=styled.button`
background: #fbd573;
border: 1px solid #fbd573;
width: 130px;
height: 40px;
border-radius: 30px 30px 27px 32px;
font-size: 15px;
font-weight: 800;
box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
-webkit-box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
-moz-box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
`;
const RightDiv=styled.div`
  width: 50%;
  display: flex;
  position: relative;
`;
const ImageContainer=styled.div`
  width: 99%;
 
`;
const Images=styled.img`
  display: block;
  width: 100%;
 
`;
const Container=styled.div`
  width: 20%;
 
`;

const ImagesOne=styled.img`
  display: block;
  width: 47%;
    position: absolute;
    left: -93px;
    top: 76px;

`;
