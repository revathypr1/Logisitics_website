import React from 'react'
import styled from 'styled-components'
import  Log from "../../assests/images/Logging - image.png"
import measure from "../../assests/images/Measurment - image.png"
import Industrial from "../../assests/images/industrial - image.png"
import Service from "../../assests/images/services - image.png"


export default function 
() {
  return (
    <div>
        <MainContainer>
            <Top>
              <Small>Services</Small>
              <Title>Best <Part>Solution For You</Part></Title>
              <Paragraph>Across all over the world dolor sit 
                amet consectetur, adipisicing elit. Doloremque 
                voluptas nisi possimus assumenda enim alias voluptatum 
                reiciendis reprehenderit? Nesciunt nulla error placeat quod 
                quam est neque reprehenderit cum! Quo, eum.</Paragraph>
            </Top>
            <Bottom>
              <BoxDiv>
                <Box>
                    <Flex>
                      <Leftdiv>
                        <Left>
                          <Img src={measure} alt="Images"/>
                        </Left>
                      </Leftdiv>
                      <Rightdiv>
                        <Heading>AR Logistics Well Services</Heading>
                        <Sentence>Services ipsum dolor sit amet, consectetur adipisicing elit. Avoluptatum reiciendis reprehenderit? Nesciunt nulla error placeat quod.</Sentence>
                      </Rightdiv>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Leftdiv>
                      <Left>
                        <Img src={Log} alt="Images"/>
                      </Left>
                    </Leftdiv>
                    <Rightdiv>
                      <Heading>AR Logistics Good Measurments</Heading>
                      <Sentence> Measurment ipsum dolor sit amet, consectetur adipisicing elit. A,voluptatum reiciendis reprehenderit? Nesciunt nulla error placeat quod..</Sentence>
                    </Rightdiv>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                  <Leftdiv>
                    <Left>
                      <Img src={Industrial} alt="Images"/>
                    </Left>
                  </Leftdiv>
                  <Rightdiv>
                    <Heading>AR Logistics Super Industrials</Heading>
                    <Sentence>Industrial ipsum dolor sit amet, consectetur adipisicing elit. A,voluptatum reiciendis reprehenderit? Nesciunt nulla error placeat quod.</Sentence>
                  </Rightdiv>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                  <Leftdiv>
                    <Left>
                      <Img src={Service} alt="Images"/>
                    </Left>
                  </Leftdiv>
                  <Rightdiv>
                    <Heading>AR Logistics Well Services</Heading>
                    <Sentence>Services ipsum dolor sit amet, consectetur adipisicing elit. Avoluptatum reiciendis reprehenderit? Nesciunt nulla error placeat quod.</Sentence>
                  </Rightdiv>
                  </Flex>
                </Box>
              </BoxDiv>
            </Bottom>
            <Button>Learn More</Button>
        </MainContainer>
    </div>
  )
}

const MainContainer=styled.div``;
const Top=styled.div``;
const Small=styled.h1`
    color: #ff7a00;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
`;
const Title=styled.h2`

 text-align: center;
 font-size: 33px;
 color: #ff7a00;
`;
const Part=styled.span`
 color: #080133;
`;
const Paragraph=styled.p`
color: #c0ccda;
text-align: center;
margin-bottom:40px;
`;
const Bottom=styled.div`
  display: flex;
`;
const Flex=styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  
`;
const BoxDiv=styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

`;
const Box=styled.li`
  width: 45%;
  list-style: none;
  border: 1px solid #c0ccda ;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
  &:hover{
    box-shadow:2px 4px 34px 3px rgba(153,148,148,0.75);
    margin-bottom: 20px;
  }
`;
const Leftdiv=styled.div`
  width: 50%;
`;
const Left=styled.div`
  width: 50%;
`;
const Img=styled.img`
  width: 100%;
  display: block;
  margin: 11px 0px 5px 0;
`;
const Rightdiv=styled.div`
 
`;
const Heading=styled.h1`
  font-size: 24px;
  color: #080133;

`;
const Sentence=styled.p`
color: #c0ccda;
font-size: 16px;
    max-width: 59%;
    line-height: 1.4;
`;
const Button=styled.button`
 background: #fbd573;
    border: 1px solid #fbd573;
    width: 132px;
    height: 40px;
    border-radius: 30px 30px 27px 32px;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
-webkit-box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
text-align: center;
align-items: center;
display: block;
margin: 0 auto;

`;


