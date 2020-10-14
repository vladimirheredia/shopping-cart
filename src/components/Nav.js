import React, {Component} from 'react';
import {NavLink}  from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
                <nav style={{borderRadius: '0px', zIndex: '500'}} id="nav" className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink to="/" className="navbar-brand">
                                <span style={{color: 'red'}}>PET</span>
                                <span className="glyphicon glyphicon-heart">
                                </span><span style={{color: 'green'}}>MART</span>
                            </NavLink>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/catfood">Cat Food</NavLink></li>
                            <li><NavLink to="/dogfood">Dog Food</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span>Jose</a></li>
                            <li>
                                <a id="login" href="#"><span className="glyphicon glyphicon-log-in"></span></a>
                            </li>
                            <li><a id="nav-bar" href="#"><span className="glyphicon glyphicon-shopping-cart"></span><span className="badge">0</span></a></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Nav;