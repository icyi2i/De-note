import React, { Component } from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {FaSave} from 'react-icons/fa'
import {RiCloseLine} from 'react-icons/ri'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = { mode: this.DEFAULT_MODE }
        // this.editNote = this.editNote.bind(this)
        this.saveNote = this.saveNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)

        this.cancelEditing = this.cancelEditing.bind(this)
        this.enterReadingMode = this.enterReadingMode.bind(this)
        this.enterEditingMode = this.enterEditingMode.bind(this)
        this.enterDefaultMode = this.enterDefaultMode.bind(this)
        this.renderReadingMode = this.renderReadingMode.bind(this)
        this.renderEditingMode = this.renderEditingMode.bind(this)
        this.renderDefaultMode = this.renderDefaultMode.bind(this)
    }

    DEFAULT_MODE = 0
    READING_MODE = 1
    EDITING_MODE = 2

    enterReadingMode = function(){
        this.setState({ mode: this.READING_MODE})
    }
    
    enterEditingMode = function(){
        this.setState({ mode: this.EDITING_MODE})
    }

    enterDefaultMode = function(){
        this.setState({ mode: this.DEFAULT_MODE})
    }

    cancelEditing = function() {
        this.enterReadingMode()        
    }

    saveNote = function(e){
        e.preventDefault()
        console.log("save_note")
        this.props.onUpdate(this.props.id, this.new_title.value, this.new_text.value)
        this.setState({ mode: this.READING_MODE})
    }
    
    deleteNote = function(){
        this.props.onRemove(this.props.id)
    }

    minify(text, max_length){
        if (text.length < max_length) {
            return text
        } else {
            return text.slice(0, max_length).trim() + "..."
        }
    }

    renderReadingMode(){
        return (
            <div className="modal d-flex" id="noteModal" role="dialog" aria-labelledby="cardModalLabel">
                <div className="modal-dialog m-auto p-0 col-12 col-md-8">
                    <div className="modal-content note">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cardModalLabel">{this.props.title}</h5>
                            <button onClick={this.enterDefaultMode} type="button" className="close" data-dismiss="modal"
                                aria-label="Close"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <p className="custom-note-scrollbar">{this.props.text}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.enterEditingMode} className="btn btn-outline-info">
                                <span className="react-icon" role="img" aria-label="Edit note"><FaPencilAlt/></span>&nbsp;Edit note</button>
                            <button onClick={this.deleteNote} className="btn btn-outline-danger">
                                <span className="react-icon" role="img" aria-label="Delete note"><FaTrash /></span>&nbsp;Delete note</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderEditingMode(){
        return (
            <div className="modal d-flex" id="noteModal" role="dialog" aria-labelledby="cardModalLabel">
                <div className="modal-dialog m-auto p-0 col-12 col-md-8">
                    <div className="modal-content note">
                        <form className="d-contents"  onSubmit={this.saveNote}>
                        
                        <div className="modal-header">
                            <input className="card-title form-control" maxLength={100}
                                type="text" ref={input => this.new_title = input}
                                id="input-note-title" defaultValue={this.props.title}/>
                            
                            <button onClick={this.enterDefaultMode} type="button" className="close" data-dismiss="modal"
                                aria-label="Close"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <textarea className="card-text form-control custom-note-scrollbar pr-2"
                                ref={input => this.new_text = input}
                                defaultValue={this.props.text} rows={7}/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.cancelEditing} type="button" className="btn btn-outline-danger">
                                <span className="react-icon" role="img" aria-label="Cancel editing"><RiCloseLine /></span>&nbsp;Cancel</button>
                            <button type="submit" className="btn btn-outline-primary">
                                <span className="react-icon" role="img" aria-label="Save edits"><FaSave /></span>&nbsp;Save</button>
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

    renderDefaultMode() { 
        return ( 
            <div onClick={this.enterReadingMode} id={this.props.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2_4 col-xxl-2 my-3">
                <div className="card note">
                    <div className="card-body">
                        <h5 className="card-title">{this.minify(this.props.title, 40)}</h5>
                        <p className="card-text">{this.minify(this.props.text, 100)}</p>
                    </div>
                </div>
            </div>
         )
    }
    render (){
        return (this.state.mode === this.DEFAULT_MODE) ?
            this.renderDefaultMode() :
            ((this.state.mode === this.READING_MODE) ?
            this.renderReadingMode() :
            this.renderEditingMode())
    }
}
 
export default Note