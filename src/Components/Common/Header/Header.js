import React, { useState } from 'react'
import "./Header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import siteLogo from "../../../Assets/Images/logo.svg"
import CommonButton from "../CommonButton/CommonButton"
import icon from "../../../Assets/Images/users.svg"
import { SearchIcon } from '../../../Assets/svgs/svg';
const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className='siteHeader'>
        <Navbar expand="lg" className="p-0">
          <Container>
            <Navbar.Brand to="/">
              <Link to="/"><img src={siteLogo} alt='img' /></Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand className='d-block d-lg-none mb-5' to="/">
                <Link to="/"><img src={siteLogo} alt='img' /></Link>
              </Navbar.Brand>
              <Nav className="ms-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About us</NavLink>
                <Link to="/">Whitepaper</Link>
              </Nav>
              <CommonButton disabled title="Join Community" icon={icon} btnicon="d-block" className="ms-lg-3" />
            </Navbar.Collapse>
            <div className='headerRight d-flex align-items-center'>
              <div className={isActive ? 'searchBar opensearch' : "searchBar"}>
                <span onClick={toggleClass} className='SearchIcon'><SearchIcon /></span>
                <input className='searchInput' type="text" id="" name="" placeholder="Search....... " />
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header