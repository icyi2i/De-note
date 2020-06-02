import React, { Component } from 'react';
import {FaPencilAlt} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {RiDragMove2Line} from 'react-icons/ri';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { editingMode: false }
    }
    render() { 
        return ( 
            <div className="note col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    <div className="card-footer">
                            <button className="btn btn-outline-dark"><RiDragMove2Line /></button>
                            <button className="btn btn-outline-info"><FaPencilAlt /></button>
                            <button className="btn btn-outline-danger"><FaTrash /></button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Note;