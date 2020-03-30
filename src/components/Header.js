import React from 'react';
import './Header.css';
import{Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <nav>
                Welcome to my Web Page
                <Link to="/aboutme">About me</Link>
            </nav>
                <h1>Hi my name is {props.name} </h1>
        </div>    
            
        
        
    )
}

export default Header
