import React from 'react'
import styled from 'styled-components'
import Traffic from "../../assests/images/about-us.png"

export default function About() {
  return (
    <div>
        <MainContainer>
          <RightContainer>
              <ImageContainer>
                <Image src={Traffic} alt="images"/>
              </ImageContainer>
          </RightContainer>
          <LeftContainer>
              <Sentence>About Us</Sentence>
              <Title>Know <Small>More Us</Small></Title>
              <Paragraph>sublime A R World ipsum dolor sit amet consectetur adipisicing elit.
                 Consequatur ea molestias voluptas ex molestiae quia reprehenderit quasi archi
                 tecto at dolorum culpa tempore temporibus eius, fugiat, dolores veritatis in 
                 blanditiis quod.</Paragraph>
              <ButtonDiv>Learn More</ButtonDiv>
          </LeftContainer>
        </MainContainer>
    </div>
  )
}

const MainContainer=styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 200px;
`;
const RightContainer=styled.div`
  width: 50%;
`;
const ImageContainer=styled.div`
  width: 100%;
`;
const Image=styled.img`
  width: 100%;
  display: block;
`;
const LeftContainer=styled.div`
  width: 50%;
`;
const Sentence=styled.h3`
color: #ff7a00;
font-size: 23px;
font-weight: 400;
`;
const Title=styled.h1`
  color: #080133;
 
`;
const Small=styled.span`
color: #ff7a00;
`;
const Paragraph=styled.p`
      margin-top: 20px;
    color: #c0ccda;
    margin-bottom: 30px;
    font-size: 16px;
    max-width: 77%;
    line-height: 1.4;
`;
const ButtonDiv=styled.button`
    background: #fbd573;
    border: 1px solid #fbd573;
    width: 132px;
    height: 40px;
    border-radius: 30px 30px 27px 32px;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
-webkit-box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);
-moz-box-shadow: 0px 4px 8px 17px rgba(0,0,0,0.12);;

`;

