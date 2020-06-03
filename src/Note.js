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
    saveNote = function(e){
        e.preventDefault()
        console.log("save_note")
        this.props.onUpdate(this.props.id, this.new_title.value, this.new_text.value)
        this.setState({ editingMode: false})
    }
    deleteNote = function(){
        this.props.onRemove(this.props.id)
    }

    renderEditingMode(){
        return ( 
            <div className="note col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2_4 col-xxl-2 my-3">
                <div className="card">
                    <form className="d-contents"  onSubmit={this.saveNote}>
                        <div className="card-body">
                            <input className="card-title form-control"
                                type="text" ref={input => this.new_title = input}
                                id="input-note-title" defaultValue={this.props.title}/>
                            <textarea className="card-text form-control"
                                ref={input => this.new_text = input}
                                defaultValue={this.props.text} rows={7}/>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-outline-primary"><FaSave /></button>
                        </div>
                    </form>
                </div>
            </div>
         )
    }

    renderDefaultMode() { 
        return ( 
            <div id={this.props.id} className="note col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2_4 col-xxl-2 my-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-dark"><RiDragMove2Line /></button>
                        <button onClick={this.editNote} className="btn btn-outline-info"><FaPencilAlt /></button>
                        <button onClick={this.deleteNote} className="btn btn-outline-danger"><FaTrash /></button>
                    </div>
                </div>
            </div>
         )
    }
    render (){
        return this.state.editingMode ? this.renderEditingMode() : this.renderDefaultMode()
    }
}
 
export default Note