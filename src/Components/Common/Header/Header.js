import React, { useRef, useState } from 'react'
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
  const toggler = useRef();
  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleSidebarClick = () => document.body.clientWidth < 991 && toggler.current.click();
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
                <Link to="/" onClick={handleSidebarClick} ><img src={siteLogo} alt='img' /></Link>
              </Navbar.Brand>
              <Nav className="ms-auto">
                <NavLink onClick={handleSidebarClick} to="/">Home</NavLink>
                <NavLink onClick={handleSidebarClick} to="/about-us">About us</NavLink>
                <Link onClick={handleSidebarClick} to="#" data-disabled="true">Whitepaper</Link>
              </Nav>
              <CommonButton disabled title="Join Community" icon={icon} btnicon="d-block" className="join_btn ms-lg-3" />
              <div className={isActive ? 'searchBar opensearch' : "searchBar"}>
                <span onClick={toggleClass} className='SearchIcon'><SearchIcon /></span>
                <input className='searchInput' type="text" id="" name="" placeholder="Search....... " />
              </div>
            </Navbar.Collapse>
            <div className='headerRight d-flex align-items-center'>
              <Navbar.Toggle ref={toggler} aria-controls="basic-navbar-nav">
                <span></span>
                <span></span>
                <span></span>
              </Navbar.Toggle>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header
