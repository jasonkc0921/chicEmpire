import React, { useState } from "react";
import styled from 'styled-components'
// import logo from '../images/logo1.svg'
import { FaBars } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa'
import { links } from '../data'
// import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <NavbarContainer>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
            <img src="../images/chicempire_logo-1.png" className='logo' alt="yijiajuang" />
            </a>
          </div>


        <ul className={click ? "nav-options active" : "nav-options"}>
          {links.map((link)=>{
            const {id, text, url} = link;
            return (
              <li key={id} className="option" onClick={closeMobileMenu}>
                <a href={url}>{text}</a>
                {/* <Link to={url}>{text}</Link> */}
              </li>
            )
          })}

        </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaCrosshairs />
          ) : (
            <FaBars />
          )}
        </div>
      </div>
      </NavbarContainer>
    );
}

const NavbarContainer = styled.nav`

.header {
    display: flex;
    background: black;
    justify-content: space-around;
    align-items: center;
    // padding: 0px 40px;
    height: 80px;
    width: 100%;
    // position: fixed;
    // z-index: 67;
  }
  .logo-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 80px;
    height: 80px;
  }
  .nav-options {
    padding-left: 25px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 20px;
    list-style-type: none;
  }
  .mobile-option {
    display: none;
  }
  .mobile-menu {
    display: none;
  }

  .option a {
    text-transform: capitalize;
    color: white;
    text-decoration: none;
  }
  
  .option a:hover {
    font-weight: 500;
  }
 
  /*Desktop View*/
  @media (max-width: 550px) {
    /*Mobile View */
    .header {
      padding: 0px 10px;
    }
    .nav-options {
      display: flex;
      width: 100%;
      height: 350px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
    }
    .nav-options.active {
      background: white;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }
  
    .logo {
      width: 3rem;
      height: 3.5rem;
    }
  
    .menu-icon {
      width: 45px;
      height: 45px;
    }
    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10vw;
      padding: 30px 0px;
    }

    .mobile-menu {
      display: block;
    }

  }
  

`
