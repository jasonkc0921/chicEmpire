import React from 'react'
import styled from 'styled-components'
import MailchimpSignup from './MailchimpSignup'

export const Register = () => {

  const handleInquiry = () => {
    const email = 'contact@example.com'; // Replace with your email address
    const subject = 'Inquiry';
    const body = 'Hello, I have a question...'; // Pre-filled body

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };
  

  return (
    <RegisterContainer>
    <div className='register-container'>

            <p className='title'>We Will Offer Our <span>1st Asset </span> for</p>
            <p className='title'> <span>Share Subscription</span> in Q1 2024 </p>
            {/* <button onClick={handleInquiry} className='btn'>Keep Me Informed</button> */}
            <MailchimpSignup />
 
    </div>
    </RegisterContainer>
  )
}

const RegisterContainer = styled.nav`

.register-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
    background-image: url("../images/register.jpg"); 
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.title {
  font-size: 3rem;
  color: white;
  font-weight: 700;
  line-height: 0.1;
}

span {
  color: rgb(212, 175, 55);
}

.btn {
  color: white;
  background-color: black;
  margin-top: 2rem;
  font-size: 1.5rem;
}

#mc_embed_signup {
  background:#ffffff; 
  font-size:14px;
  width: 600px;
}

`