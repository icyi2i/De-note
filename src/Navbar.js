import React, { Component } from 'react';

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
                    <a className="nav-link text-dark" role="button"
                        data-toggle="modal" data-target="#aboutModal"
                        href="#aboutModal">
                        About
                    </a>
                </nav>
                 

                <div className="modal fade" id="aboutModal" tabIndex="-1"
                    role="dialog" aria-labelledby="aboutModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center"
                                id="aboutModalLabel">About Denote</h5>
                            <button type="button" className="close"
                                data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body lead text-muted">
                            <p>
                                De-note is a simple and light-weight, web-based
                                note taking application made using ReactJS.
                            </p>
                            <p>
                                This offers a very minimal interface for taking
                                notes on-the-go and storing them to localStorage
                                or any integrated database.
                            </p>
                            <hr className="w-100" />
                            <p>
                                Hi I'm Sarthak! A developer with interest in
                                design and automation. I like making things.
                                Have an idea?&nbsp;
                                <strong>Let's collaborate!</strong>
                            </p>
                            <p>
                                Reach me at -
                                &nbsp;
                                <a href="mailto:sarthak3gambhir@gmail.com">
                                    sarthak3gambhir@gmail.com</a>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <a href="https://github.com/icyi2i/De-note"
                                target="_blank" rel="noopener noreferrer"
                                className="btn btn-outline-primary">
                                View on Github</a>
                            
                            <button type="button" data-dismiss="modal"
                                className="btn btn-outline-dark">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
         );
    }
}
 
export default Navbar;