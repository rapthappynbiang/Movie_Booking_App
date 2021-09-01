import React from 'react';
import { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

export default class Header extends Component{
        render(){
         return <div id="header" className="header"><img src={logo} className="logoSvg" alt="logo" /></div>
        }
}