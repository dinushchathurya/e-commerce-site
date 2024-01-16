import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ThemeContext } from './context/ThemeContexts';
import { FaRegMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
      menuOpen: false,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
    });
  }

  handleMenu() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const { theme, toggleTheme } = this.context;
    const { isMobile, menuOpen } = this.state;

    return (
      <div>
        {isMobile ? (
          // Mobile View
          <MobileNavWrapper className="navbar nav-bar-expand-sm bg-slate-800 px-sm-5 w-100">
            <Link to="/" className="w-50">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <div className="text-white w-50 menu" onClick={this.handleMenu}>
              <AiOutlineMenu className="menubar" />
            </div>
            {menuOpen && (
              <div className=" resmenu w-100 ">
                <NavLink to="/" className={({isActive})=> isActive ? "text-primary" : "text-white hover"}>
                  Products
                </NavLink>
                <Link className="text-white bg-transparent themes" onClick={toggleTheme}>
                  {theme ? <h6>Dark Mode <FaRegMoon /></h6> : <h6>Light Mode <GoSun /></h6>}
                </Link>
                <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                    <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
                </Link>
              </div>
            )}
          </MobileNavWrapper>
        ) : (
          // Desktop View
          <DesktopNavWrapper className="navbar nav-bar-expand-sm bg-slate-800 px-sm-5">
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5 mainmenu">
                <Link to="/" className="nav-link">
                  Products
                </Link>
                <div className="text-white bg-transparent themes" onClick={toggleTheme}>
                  {theme ? <FaRegMoon /> : <GoSun />}
                </div>
              </li>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <i className="fas fa-cart-plus">my cart</i>
              </ButtonContainer>
            </Link>
          </DesktopNavWrapper>
        )}
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const MobileNavWrapper = styled(NavWrapper)`
  /* Add mobile-specific styles here */
`;

const DesktopNavWrapper = styled(NavWrapper)`
  /* Add desktop-specific styles here */
`;

export default Navbar;
