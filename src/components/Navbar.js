import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar nav-bar-expand-sm bg-primary navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Products
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
            </nav>
        )
    }
}
const ButtonContainer = styled.button`
text-transform:capitalize;
`;
