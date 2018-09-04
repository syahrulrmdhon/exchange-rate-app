import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-5">
                    <span className="navbaer-brand mb-0 h4 mx-auto" style={{color:'wheat',padding:'5px'}}>Exchange Rate App</span>
                </nav>
            </div>
        );
    }
}

export default Navbar;