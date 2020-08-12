import React from 'react'
import { Container } from '@material-ui/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Container>
                    <div className="brand">
                        <EmojiTransportationIcon /> x<span>-town</span>
                    </div>
                    {                    
                        localStorage.getItem('xTown') ? <span>Logged In</span> :  <div className="auth">
                        <a href="/signIn"><FontAwesomeIcon icon={faUser} /> Sign In </a>
                        <span>|</span>
                        <a href="/signUp"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</a>
                        </div>
                    }
                </Container>
            </nav>

        )
    }
}

export default Navbar;