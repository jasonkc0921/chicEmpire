import React, {useState} from 'react'
import styled from 'styled-components'
import { portfolios } from '../data'
import Bubbles from "../Bubbles";
import PortfolioChart1 from './PortfolioChart1'
import PortfolioChart2 from './PortfolioChart2'
import PortfolioChart3 from './PortfolioChart3'

export const Diversification_new = () => {

    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (buttonValue) => {
        setActiveButton(buttonValue);
      };
      const piechartComponents = {
        PortfolioChart1,
        PortfolioChart2,
        PortfolioChart3
      };
    

  return (
    <DiversifyContainer>

    <section className='container' id='diversify'>
        {/* <Bubbles /> */}
    <h2>Diversification</h2>
        <div className='portfolio-examples'>
            {portfolios.map((portfolio)=> {
                const {id, title, piechart, year1, year5} = portfolio;
                const PieChartComp = piechartComponents[piechart];
                // const PieChartComp = eval(piechart);

                return (

                    <div className='single-portfolio' key={id}>
                        <h2>{title}</h2>

                        <PieChartComp />

                        <br></br>
                        <div className='return-container'>
                            <div  className='returnDetails'>
                                <div>
                                    <p className='title'>You Invested</p>
                                    <p>$ 100,000</p>

                                </div>

                                <div>
                                    <p className='title'>Invested Period</p>
                                    <button onClick={() => handleButtonClick(1)} className='btn'>1 Year Ago</button>
                                    <button onClick={() => handleButtonClick(2)} className='btn'>5 Year Ago</button>
                                </div>
                            </div>
                            <div className='returnValue-container'>
                                <p>You would have made</p>
                                {activeButton === 1 && <p className='return-value'>{year1}</p>}
                                {activeButton === 2 && <p className='return-value'>{year5}</p>}
                                {activeButton === 1 && <p>In Past 1 year!</p>}
                                {activeButton === 2 && <p>In Past 5 Years!</p>}
                            </div>

                        </div>

                    </div>

                )
            })}
        </div>
            <a href="https://moneymade.io/learn/article/study-investment-whiskey-performance">Source: MoneyMade</a>

    </section>
    </DiversifyContainer>
  )
}

const DiversifyContainer = styled.nav`

.container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
    background-color: black;
    height: 400px;
}

.container h2 {
    font-size: 2.5rem;
    color: rgb(212, 175, 55);
}

.container a {
    color: white;
}

.portfolio-examples {
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.single-portfolio {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background: #F6F6F6;
    padding: 1rem;
    border-radius: 5%;
    width: 100%;
    height: 600px;
    margin-right: 20px;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    z-index: 67;
}

.single-portfolio:hover {
    box-shadow: var(--shadow-3);
    z-index: 67;
}

.single-portfolio h2 {
    font-size: 1.5rem;
    color: black;
}

.single-portfolio p, h2 {
    text-transform: capitalize;
}

td, th {
    border: 1px solid;

}

.tr {
    background: white;
}

th {
    background: black;
    color: white;
}

.return-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;


}

.returnDetails {
    width: 50%;
}

.returnDetails .title {
    font-weight: 700;
}

.btn {
    background-color: #CCE5FF;
    display: block;
    font-size: 1rem;
    margin: 2px 2px;
}

.btn:hover {
    background-color: #CCCCFF;
}

.returnValue-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    align-items: left;
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(212, 175, 55);
    height: 100%;
}

.returnValue-container {
    font-weight: 700;
}

.return-value {
    font-size: 1.5rem;
    color: white;
}

`