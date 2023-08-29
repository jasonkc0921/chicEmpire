import React from 'react'
import styled from 'styled-components'
import { reasons } from '../data'

export const Why = () => {



  return (
    <WhyContainer>
    <section className='why-container' id='why'>
      <h2>Why investing into luxury items?</h2>
      <div className='instruments-container'>
        {reasons.map((reason)=>{
          const {id, item, img, text} = reason;
          return (
            <div key={id} className='single-instrument'>
                <img src={img} alt={item}  className='instrument-img' />
                <p>{text}</p>
            </div>
          )
        })}

      </div>


    </section>
    </WhyContainer>
  )
}

const WhyContainer = styled.nav`

.why-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
}

.why-container h2 {
  font-size: 2.5rem;
}

.instruments-container {
  // padding: 5rem 0;
  // display: grid;
  // gap: 1rem;
  display: flex;
  justify-content: space-around;
  width: 80%;
}


.single-instrument {
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--borderRadius);
  // box-shadow: var(--shadow-1);
  // transition: var(--transition);
  position: relative;
  width: 80%;
  height: 150px;
  padding: 20px;
}

.single-instrument p {
  text-transform: capitalize;
  font-weight: 500;
}

.instrument-img {
  width: 100px;
  height: 100px;
  object-fit: fill;
  border-radius: 15px;
  border: solid 5px grey;
  padding: 5px;
}

`