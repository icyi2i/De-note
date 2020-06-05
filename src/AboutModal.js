import React, { Component } from 'react';

class AboutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.removeAllNotes = this.removeAllNotes.bind(this)
    }
    removeAllNotes(){
        const choice = window.confirm(
            "Are you sure? This will remove all notes!")
        if(choice){
            this.props.onClear()
        }
    }
    render() { 
        return ( 
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
                    <div className="modal-body">
                        <p className="lead">
                            De-note is a simple and light-weight, web-based
                            note taking application made using ReactJS.
                            <br />
                            This offers a very minimal interface for taking
                            notes on-the-go and storing them to localStorage
                            or any integrated database.
                        </p>
                        <button className="btn btn-outline-danger"
                            onClick={this.removeAllNotes}>Clear all notes
                            </button>
                        <span className="small text-muted">A default note will
                            be present for demo on reload if all notes are
                            deleted.</span>
                        <hr className="w-100" />
                        <p className="text-muted lead">
                            Hi I'm Sarthak! A developer with interest in
                            design and automation. I like making things.
                            Have an idea?&nbsp;
                            <strong>Let's collaborate!</strong>
                        </p>
                        <p className="text-muted lead">
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
        );
    }
}
 
export default AboutModal;