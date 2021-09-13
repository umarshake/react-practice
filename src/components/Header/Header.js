import React from 'react';
import {
    Container,
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";

import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
const Header = (props) => {
    const pathName = props?.location?.pathname;
    console.log(props.location);
    return (
        <Navbar expand="lg" sticky="top" className="header_navbar">
            <Nav.Link as={NavLink} to='/' className="header_home_link">
                <Navbar.Brand  className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle>

            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="header_left">

                    <Nav.Link as={NavLink} 
                    to='/'
                    className={pathName == '/' ? "header_link_active" : "header_link"}>
                        Resume
                    </Nav.Link>

                    <Nav.Link as={NavLink} 
                    to='/portfolio'
                    className={pathName == '/portfolio' ? "header_link_active" : "header_link"}>
                        Portfolio
                    </Nav.Link>

                </Nav>

                <div className="header_right">
                    { Object.keys(resumeData.socials).map( (item) => {

                            return (
                                <a key={resumeData.socials[item].link} href={resumeData.socials[item].link} target="_blank">
                                        {resumeData.socials[item].icon}
                                </a>
                            )

                    })}
                    <CustomButton text="Hire Me" icon={<Telegram/>}/>

                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;