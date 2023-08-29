import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  margin-top: 400px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  margin: 15px 0;
`;
const SubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 15px;
  font-family: "Quicksand", sans-serif;
`;
const StepContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }

  .img {
    // position: absolute;
    width: 100px;
    height: 100px;
    z-index: 69;
    background-color: white;
  }

  .arrow-first {
    &:before {
      border-color: #000000 !important;
      content: " ";
      // width: calc(100% + 45px);
      // height: calc(50% + 130px);
      width: calc(90% + 35px);
      height: calc(20% + 110px);
      top: -20%;
      border: 5px dotted transparent;
      position: absolute;
      border-radius: 50%;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      left: calc(-50% - 23px);
      z-index: 67;
      @media (max-width: 450px) {
        border-color: transparent !important;
      }
    }
  }
  .arrow-second {
    &:before {
      border-color: #000000 !important;
      border-top-width: 2px;
      border-bottom-width: 0 !important;
      top: 4%;
      content: " ";
      // width: calc(100% + 45px);
      // height: calc(50% + 130px);
      width: calc(90% + 35px);
      height: calc(20% + 110px);
      border: 5px dotted transparent;
      position: absolute;
      border-radius: 50%;
      border-left-width: 0;
      border-right-width: 0;
      left: calc(-50% - 23px);
      z-index: 67;
      @media (max-width: 450px) {
        border-color: transparent !important;
      }
    }
  }

  .arrow-third {
    &:before {
      border-color: #000000 !important;
      content: " ";
      // width: calc(100% + 45px);
      // height: calc(50% + 130px);
      width: calc(90% + 35px);
      height: calc(20% + 110px);
      // top: -52%;
      top: -20%;
      border: 5px dotted transparent;
      position: absolute;
      border-radius: 50%;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      left: calc(-50% - 23px);
      z-index: 67;
      @media (max-width: 450px) {
        border-color: transparent !important;
      }
    }
  }

  .arrow-forth {
    &:before {
      border-color: #000000 !important;
      border-top-width: 2px;
      border-bottom-width: 0 !important;
      top: 4%;
      content: " ";
      width: calc(90% + 35px);
      height: calc(20% + 110px);
      border: 5px dotted transparent;
      position: absolute;
      border-radius: 50%;
      border-left-width: 0;
      border-right-width: 0;
      left: calc(-50% - 23px);
      z-index: 67;
      @media (max-width: 450px) {
        border-color: transparent !important;
      }
    }
  }

`;
const StepBox = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  width: 20%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const Icon = styled.div`
  margin-bottom: 35px;
  background: #00a591;
  color: #ffffff;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  box-shadow: 0 0 0 10px #fff;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  flex-shrink: 0;
  .user {
  }
`;
const StepContent = styled.div``;
const StepContentHeader = styled.h5`
  margin: 0;
  margin-bottom: 15px;
  font-size: 18px;
`;
const StepContentText = styled.p`
  margin: 0;
  color: #999;
  line-height: 23px;
  opacity: 0.7;
`;
export default function HowItWork() {
  return (
    <Container>
      <Header id='how'>
        <Title>How It Works</Title>
        <SubTitle>Quick brief on how simple yet powerful site is</SubTitle>
      </Header>
      <StepContainer>
        <StepBox>
          {/* <Icon>
            <i className="user" />
          </Icon> */}
          <img src="../images/choice.png" alt="select" className="img"/>
          <StepContent>
            <StepContentHeader>We Choose The Assets</StepContentHeader>
            <StepContentText>
              Start your journey by creating your very first account to gain
              cool options which will allow you to create awesome ads
            </StepContentText>
          </StepContent>
        </StepBox>

        <StepBox className="arrow-first">
          {/* <Icon /> */}
          <img src="../images/buy-button.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>We Purchase the Chosen Asset</StepContentHeader>
            <StepContentText>
              Now when you are our member go to your account profile and post
              your very first advert and make sure you be descriptive as
              possible
            </StepContentText>
          </StepContent>
        </StepBox>

        <StepBox className="arrow-second">
          {/* <Icon /> */}
          <img src="../images/lock.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>We Secure It</StepContentHeader>
            <StepContentText>
              Is your advert ready and live? Now sit back, enjoy and wait for
              that very first phone call and start earning money
            </StepContentText>
          </StepContent>
        </StepBox>
        <StepBox className="arrow-third">
          {/* <Icon /> */}
          <img src="../images/market.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>We Securitize the Asset</StepContentHeader>
            <StepContentText>
              Is your advert ready and live? Now sit back, enjoy and wait for
              that very first phone call and start earning money
            </StepContentText>
          </StepContent>
        </StepBox>
        <StepBox className="arrow-forth">
          {/* <Icon /> */}
          <img src="../images/coin.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>Sell The Asset</StepContentHeader>
            <StepContentText>
              Is your advert ready and live? Now sit back, enjoy and wait for
              that very first phone call and start earning money
            </StepContentText>
          </StepContent>
        </StepBox>
      </StepContainer>
    </Container>
  );
}
