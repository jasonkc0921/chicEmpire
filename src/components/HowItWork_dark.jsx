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
  background-color: black;
  color: white;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 2.5rem;
  margin: 15px 0;
`;
const SubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 15px;
  font-family: "Quicksand", sans-serif;
  color: rgb(212, 175, 55);
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
    background-color: black;
  }

  .arrow-first {
    &:before {
      border-color: #ffffff !important;
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
      border-color: #ffffff !important;
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
      border-color: #ffffff !important;
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
      border-color: #ffffff !important;
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
  color: rgb(212, 175, 55)
`;
const StepContentText = styled.p`
  margin: 0;
  color: white;
  line-height: 23px;
  opacity: 0.7;
`;
export default function HowItWork_dark() {
  return (
    <Container id='how'>
      <Header>
        <Title>How It Works</Title>
        <SubTitle>Quick brief on how the process works</SubTitle>
      </Header>
      <StepContainer>
        <StepBox>
          {/* <Icon>
            <i className="user" />
          </Icon> */}
          <img src="../images/choice_white.png" alt="select" className="img"/>
          <StepContent>
            <StepContentHeader>We Choose The Assets</StepContentHeader>
            <StepContentText>
              We work with reputable partners to identify assets that have the potential of high investment return
            </StepContentText>
          </StepContent>
        </StepBox>

        <StepBox className="arrow-first">
          {/* <Icon /> */}
          <img src="../images/buy-button_white.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>We Purchase the Chosen Asset</StepContentHeader>
            <StepContentText>
              We filter though the potential list of assets, then purchase those that will maximize the return
    
            </StepContentText>
          </StepContent>
        </StepBox>

        <StepBox className="arrow-second">
          {/* <Icon /> */}
          <img src="../images/market-share_white.png" alt="purchase" className="img"/>
          <StepContent>

            <StepContentHeader>We Securitize the Asset</StepContentHeader>
            <StepContentText>
                We offer partial or 100% of the asset on our site to allow public to invest into
            </StepContentText>
          </StepContent>
        </StepBox>
        <StepBox className="arrow-third">
          {/* <Icon /> */}
          <img src="../images/lock_white.png" alt="purchase" className="img"/>
          <StepContent>
          <StepContentHeader>We Secure It</StepContentHeader>
            <StepContentText>
              The asset will be secured and insured by a reputable trustee upon the closing of the share subscription
            </StepContentText>
          </StepContent>
        </StepBox>
        <StepBox className="arrow-forth">
          {/* <Icon /> */}
          <img src="../images/coin_white.png" alt="purchase" className="img"/>
          <StepContent>
            <StepContentHeader>Sell The Asset</StepContentHeader>
            <StepContentText>
              We work closely with reputable partners in various industries to identify buyers/collectors to sell the assets at the highest price possible, then distribute the profits proportionally to all investors
            </StepContentText>
          </StepContent>
        </StepBox>
      </StepContainer>
    </Container>
  );
}
