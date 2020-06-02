import React, { Component } from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {FaSave} from 'react-icons/fa'
import {RiDragMove2Line} from 'react-icons/ri'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = { editingMode: false }
        this.editNote = this.editNote.bind(this)
        this.saveNote = this.saveNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.renderEditingMode = this.renderEditingMode.bind(this)
        this.renderDefaultMode = this.renderDefaultMode.bind(this)
    }

    editNote = function(){
        this.setState({ editingMode: true})
    }
    saveNote = function(event){
        event.preventDefault()
        this.setState({ editingMode: false})
    }
    deleteNote = function(){
        alert("deleting")
    }

    renderEditingMode(){
        return ( 
            <div className="note col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div className="card">
                    <form className="d-contents">
                        <div className="card-body">
                            <input className="card-title form-control" type="text" id="input-note-title"/>
                            <textarea className="card-text form-control" rows={5}/>
                        </div>
                        <div className="card-footer">
                            <button type="submit" onClick={this.saveNote} className="btn btn-outline-primary"><FaSave /></button>
                        </div>
                    </form>
                </div>
            </div>
         )
    }

    renderDefaultMode() { 
        return ( 
            <div className="note col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-dark"><RiDragMove2Line /></button>
                        <button onClick={this.editNote} className="btn btn-outline-info"><FaPencilAlt /></button>
                        <button onclick={this.deleteNote} className="btn btn-outline-danger"><FaTrash /></button>
                    </div>
                </div>
            </div>
         )
    }
    render (){
        if (this.state.editingMode) {
            return this.renderEditingMode()
        } else {
            return this.renderDefaultMode()
        }
    }
}
 
export default Note