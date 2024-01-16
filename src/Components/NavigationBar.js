import React, { Component } from 'react'
import '../Styles/NavBar.css'
import { FaBrain } from "react-icons/fa6"
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class NavigationBar extends Component {


    state={clicked: false}

    handleClick = () =>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render =() => { 
  return (  <div className='navbars'> 




        <Nav className='contain_nav_bar' as="ul"  fixed="top" >

            <Nav.Item as="li" gap={3} className='logo_container'>
                <Nav className='logo_container'>
                    <Nav.Item as="li">
                < FaBrain className='logo_icon' />

                    </Nav.Item>
                    <Nav.Item as="li">
                <h2>COACH DIDI</h2>

                    </Nav.Item>

                </Nav>
            </Nav.Item>


            <Nav.Item as="li" className="page_links">
                < ul id='navbar' className={this.state.clicked ? "#navbar active"  : "#navbar"}
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Programmes</li>
                </ul>
            </Nav.Item>

        <Nav.Item as="li" id="mobile" onClick={this.handleClick}>
        {
        this.state.clicked ? <LiaTimesSolid className='menu_times_icon'  /> : 
        <CgMenuRight className='menu_times_icon'/>
        }
        </Nav.Item>
            
        </Nav>

    </div>
  );
};
};
export default NavigationBar;