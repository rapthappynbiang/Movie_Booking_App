import React from 'react';
import { Component } from 'react';
import './Header.css';
import LoginModal from './LoginModal.js';
import logo from './logo.svg';

export default class Header extends Component{

        state={open: false}
       
        render(){
         return <div id="header" className="header">
                        <img src={logo} className="logoSvg" alt="logo" />
                        {(()=>{
                                if(this.props.page === "Home"){
                                return;
                                }else{
                                        // if page is detatial page we render necessary buttons
                                        return(
                                                <div>
                                                <button id="book-movie-btn" className="btn btn-primary btn-sm" onClick={this.bookingHandler}>
                                                        <span>BOOK SHOW</span>
                                                </button>   
                                                <button id="login-btn" className="login-logout-button btn btn-primary btn-sm" onClick={this.handleModalOpen}>
                                                        <span>LOGIN</span>
                                                </button> 
                                                
                                                //Login Modal
                                                <LoginModal login={this.login} />

                                                <button id="logout-btn" className="login-logout-button btn btn-primary btn-sm" style={{display: 'none'}} onClick={this.logoutHandler}>
                                                        <span>LOGOUT</span>
                                                </button>  
                                                </div>
                                        )
                                }
                        })()}
                </div>
        }

        bookingHandler(){
                if(window.localStorage.userName === undefined || window.localStorage.userName === null){
                   alert("Please Login");
                }else{
                        //redirect to payment
                }
        }

        logoutHandler(){
            //clear local storage
            window.localStorage.clear();
            document.getElementById('logout-btn').style.display= "none";
            document.getElementById('login-btn').style.display= "inline-block";
        }
       
       
        login(){
                let userName = document.getElementById("username").value;
                let passWord = document.getElementById("password").value;
                if(userName == "admin" && passWord == "admin"){
                    alert("Successfully loggedin");
                    localStorage.setItem("userame", userName);
                    localStorage.setItem("password", passWord);
                    document.getElementById("logout-btn").style.display = "inline-block";
                    document.getElementById("login-btn").style.display = "none";
                    document.getElementById("loginModal").style.display = "none"; 
                    
                }
            }

     handleClose(){
             this.setState({open: false});
     }

     handleModalOpen(){
             this.setState({open: true});
     }
}