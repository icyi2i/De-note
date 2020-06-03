import React, { Component } from 'react'
import Note from './Note'
import AddNoteButton from './AddNoteButton'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            notes : [
                {
                    title: "physical brush teacher cause exact dust",
                    text: "divide examine describe affect occasionally pattern system refer won it tears lack wonder white introduced wrong grow frozen metal imagine escape riding scientist cover",
                    id: 0
                },
                {
                    title: "court pretty invented tail",
                    text: "tribe walk swung town draw travel help thousand usually breathing swept dry prepare correctly ready shoot charge pilot anyway throughout board went origin queen",
                    id: 1
                },
                {
                    title: "breeze guard calm orange military",
                    text: "above among idea purpose open out anyone your well member environment function further pound steady possibly church substance develop during actually cap tropical event",
                    id: 2
                },
                {
                    title: "bad split slowly courage score",
                    text: "fed powder wide those describe needed nice other either electric strange spread cross native command buy sand corn oldest combine nodded judge too brave",
                    id: 3
                },
                {
                    title: "us how jar",
                    text: "arrange silence cook rather weather cheese pocket uncle yourself teacher prepare wrong supply observe corn rising replace quite dance final living headed warm split",
                    id: 4
                }
            ]
        }
        this.create_note = this.create_note.bind(this)
        this.update_note = this.update_note.bind(this)
        this.remove_note = this.remove_note.bind(this)
        this.render_each_note = this.render_each_note.bind(this)
    }

    update_note = function(id, new_title, new_text){
        this.setState(
            (prevState) => ({
                notes : prevState.notes.map(
                    (note) => ( id !== note.id) ? note : {...note, title:new_title, text:new_text}
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
                notes : [...prevState.notes, {id:new_id, title:new_title, text:new_text}]
            })
        )
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
            <div id="board" className="bg-dark">
                <div className="row m-0 p-0">
                    {this.state.notes.map(this.render_each_note)}
                </div>
                <AddNoteButton onAdd={this.create_note}/>
            </div>
        )
    }
}
 
export default Board