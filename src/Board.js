import React, { Component } from 'react'
import Note from './Note'
import AddNoteButton from './AddNoteButton'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            notes : []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.create_note = this.create_note.bind(this)
        this.update_note = this.update_note.bind(this)
        this.remove_note = this.remove_note.bind(this)
        this.render_each_note = this.render_each_note.bind(this)
    }

    update_note = function(id, new_title, new_text){
        this.setState(
            (prevState) => ({
                notes : prevState.notes.map(
                    (note) => ( id !== note.id) ? note : {
                        ...note,
                        title : new_title,
                        text : new_text
                    }
                )
            })
        )
    }

    remove_note = function(id){
        this.setState(
            (prevState) => ({
                notes : prevState.notes.filter( note =>(id !== note.id))
            })
        )
    }
    
    create_note = function(new_title, new_text){
        const new_id = Date.now()
        this.setState(
            (prevState) => ({
                notes : [...prevState.notes, {
                    id : new_id,
                    title : new_title,
                    text : new_text
                }]
            })
        )
    }

    componentDidMount(){
        let loaded_notes = JSON.parse(localStorage.getItem("notes"))

        if(loaded_notes === null || loaded_notes.length === 0){
            loaded_notes = [
                    {
                        title: "Sample note",
                        text:   
                            ["This is a demo-version of the application.",
                            "The notes are stored in localStorage!",
                            "Click here to view the note!",
                            "Click this text or the edit button to edit.",
                            "Click on Save button to update the changes!"
                        ].join("\n"),
                        id: 1
                    }
                ]
            }
        this.setState(()=>({notes : loaded_notes}))
    }

    componentDidUpdate(){
        localStorage.setItem("notes", JSON.stringify(this.state.notes))
    }

    componentWillReceiveProps(){
        this.setState({notes:[]})
    }

    render_each_note = function(note){
        return (
            <Note
                text={note.text}
                title={note.title}
                id={note.id}
                key={note.id}
                onRemove={this.remove_note}
                onUpdate={this.update_note}/>
        )
    }

    render() { 
        return (
            <div id="board">
                <div className="row m-0 p-0">
                    {this.state.notes.map(this.render_each_note)}
                </div>
                <AddNoteButton onAdd={this.create_note}/>
            </div>
        )
    }
}
 
export default Board