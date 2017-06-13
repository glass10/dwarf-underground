import React, { Component } from 'react';
import './header.css'
import Nav from './nav'
import Logo from './logo'
import Title from './title';

class Header extends Component{
    render(){
        return(
            <div className="expanded row header">
          <div className="clearfix">
            <Logo />
            <Nav />
          </div>
          <Title />
        </div>
        )
    }
}

export default Header;

