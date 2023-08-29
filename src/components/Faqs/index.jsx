// Write your code here.
import FaqItem from '../FaqItem'
import styled from 'styled-components'
// import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <FaqsContainer>
    <div className="app-container" id='faq'>
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
    </FaqsContainer>
  )
}

export default Faqs

const FaqsContainer = styled.nav`

/* Write your code here. */
.app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6F6F6;
    min-height: 100vh;
  }
  
  .faqs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
    padding-top: 32px;
    padding-right: 12px;
    padding-bottom: 32px;
    padding-left: 12px;
    max-width: 550px;
  }
  
  @media screen and (min-width: 768px) {
    .faqs-container {
      width: 90%;
      max-width: 1140px;
      padding: 32px;
    }
  }
  
  .faqs-list {
    width: 100%;
    list-style-type: none;
    padding: 0px;
  }
  
  @media screen and (min-width: 768px) {
    .faqs-list {
      width: 90%;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .faqs-list {
      width: 80%;
    }
  }
  
  .heading {
    color: #cb8805;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 700;
  }
  
  @media screen and (min-width: 768px) {
    .heading {
      font-size: 64px;
    }
  }


`