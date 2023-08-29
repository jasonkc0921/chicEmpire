import React from 'react'
import styled from 'styled-components'
import BarChart from "./Chart";

export const Return = () => {
  return (
    <ReturnContainer>
    <section className='return-container'>
        <div className='return'>
            <div className='return-text'>
                <h2 className='text-title'>high value appreciation</h2>             
            {/* <br></br> */}
                <p>Assets like watches, whiskey and arts have enjoyed <span>higher average appreciation rate</span> than other mainstream asset classes in the past 7 years.</p>
                <p></p>
            </div>
            <div className='return-chart'>
                <BarChart />
            </div>
            <div className='chart'>
            <img src="./images/watch_vs_sp.PNG" alt="chart" className='chart-pic'/ >
            <p>Source: MoneyMade</p>

            </div>
        <div className='text'>
            <h2 className='text-title'>Low association</h2>  
        <p>These alternate assets are <span>not associated </span>to stock market performance, thus making them a great options to diversify into.</p>
        </div>
        </div>

    </section>
    </ReturnContainer>
  )
}

const ReturnContainer = styled.nav`

.return-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
}

.return {
    // display: flex;
    width: 60%;
    display: grid;
    // grid-template-columns: 450px 450px;
    // grid-template-rows: 450px 450px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 3rem;
}

.return-text {
    color: white;
    background-color: black;
    width: 100%;
    // border-radius: 5%;
    padding: 1.5rem;
}

.chart-pic {
    width: 100%;
    height: 100%;
}

.text-title {
    text-transform: capitalize;
    font-size: 2.5rem;

}

span {
    color: rgb(212, 175, 55);
}

.return-text p {
    font-size: 1.5rem;
}

.return-chart {
    width: 100%;
    padding: 1.5rem
}

.chart {
    padding: 1.5rem;
    background: white;
    width: 100%;
    font-weight: 500;
}

.text {
    padding: 1.5rem;
    width: 100%;
    background-color: black;
    color: white;
}

.text p {
    font-size: 1.5rem;
    
}

.text-title {
    text-transform: capitalize;
    font-size: 2.5rem;
}

`
