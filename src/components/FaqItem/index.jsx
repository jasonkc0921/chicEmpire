// Write your code here.
import {Component} from 'react'
// import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'
// import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <FaqItemContainer>
        <div>
          <hr className="horizontal-line" />
          {/* <p className="answer">{answerText}</p> */}
          {/* <p className="answer" dangerouslySetInnerHTML={{ __html: answerText }} /> */}
          {/* <ReactMarkdown children={answerText} /> */}
          {answerText.split('\n\n').map((content, index) => (
            <div key={index}>
              {content.startsWith('&#8226;') ? (
                <ul>
                  {content.split('\n').map((bulletPoint, bulletIndex) => (
                    <li key={bulletIndex}>{bulletPoint.slice(8)}</li>
                  ))}
                </ul>
              ) : (
                <p>{content}</p>
              )}
            </div>
          ))}
        </div>
        </FaqItemContainer>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <FaqItemContainer>
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
      </FaqItemContainer>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <FaqItemContainer>
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
      </FaqItemContainer>
    )
  }
}

export default FaqItem

const FaqItemContainer = styled.nav`

/* Write your code here. */
.faq-item {
    width: 100%;
    border: 1px solid #d7dae6;
    border-radius: 16px;
    margin-bottom: 24px;
    padding: 16px;
  }
  
  .question-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .question {
    color: #52606d;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 500;
  }
  
  @media screen and (min-width: 768px) {
    .question {
      font-size: 24px;
    }
  }
  
  .answer {
    color: #9aa5b1;
    font-family: 'Roboto';
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    .answer {
      font-size: 12px;
    }
  }
  
  .button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  @media (max-width: 576px) {
    .image {
      width: 15px;
      height: 15px;
    }
  }
  
  .horizontal-line {
    border: 1px solid #e4e7eb;
  }
  

`