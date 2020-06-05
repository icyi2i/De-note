import React, { Component } from 'react';
import AboutModal from './AboutModal'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="navbar">
                 <nav className="navbar navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <object data="edit.svg" width="30" height="30"
                            type="image/svg+xml" aria-label="De-note icon"
                            className="d-inline-block align-top"></object>
                        &nbsp;
                        De-note
                    </a>
                    <div className="d-flex">
                    <a className="nav-link text-dark" role="button"
                        data-toggle="modal" data-target="#aboutModal"
                        href="#aboutModal">
                        About
                    </a>
                    </div>
                </nav>
                <AboutModal onClear={this.props.onClear}/>
            </div>
           
         );
    }
}
 
export default Navbar;