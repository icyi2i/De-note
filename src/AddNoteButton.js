import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'

class AddNoteButton extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.addNote = this.addNote.bind(this)
    }

    addNote = function(){
        this.props.onAdd("New Note", "Write something...")
    }

    render() { 
        return ( 
            <div onClick={this.addNote} id="add-note-btn" className="btn btn-outline-success">
                <FaPlus />
            </div>
        )
    }
}
 
export default AddNoteButton