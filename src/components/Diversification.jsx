import React from 'react'
import styled from 'styled-components'
import { portfolios } from '../data'
import Bubbles from "../Bubbles";
import PortfolioChart1 from './PortfolioChart1'
import PortfolioChart2 from './PortfolioChart2'
import PortfolioChart3 from './PortfolioChart3'

export const Diversification = () => {
  return (
    <DiversifyContainer>

    <section className='container'>
        <Bubbles />
    <h2>Diversification</h2>
        <div className='portfolio-examples'>
            {portfolios.map((portfolio)=> {
                const {id, title, piechart, year1, year5} = portfolio;
                const PieChartComp = eval(piechart);
                return (

                    <div className='single-portfolio' key={id}>
                        <h2>{title}</h2>

                        <PieChartComp />

                        <br></br>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>If you'd invested $100,000…</th>
                                        <th>You'd have this much now…</th>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 year ago</td>
                                        <td>{year1}</td>
                                    </tr>
                                    <tr>
                                        <td>5 year ago</td>
                                        <td>{year5}</td>
                                    </tr>
                                </tbody>
                            </table>
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
    height: 300px;
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
    height: 500px;
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

`