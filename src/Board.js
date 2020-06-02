import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            notes : [
                {
                    title: "physical brush teacher cause exact dust",
                    text: "divide examine describe affect occasionally pattern system refer won it tears lack wonder white introduced wrong grow frozen metal imagine escape riding scientist cover",
                    note_id: 0
                },
                {
                    title: "court pretty invented tail",
                    text: "tribe walk swung town draw travel help thousand usually breathing swept dry prepare correctly ready shoot charge pilot anyway throughout board went origin queen",
                    note_id: 1
                },
                {
                    title: "breeze guard calm orange military",
                    text: "above among idea purpose open out anyone your well member environment function further pound steady possibly church substance develop during actually cap tropical event",
                    note_id: 2
                },
                {
                    title: "bad split slowly courage score",
                    text: "fed powder wide those describe needed nice other either electric strange spread cross native command buy sand corn oldest combine nodded judge too brave",
                    note_id: 3
                },
                {
                    title: "us how jar",
                    text: "arrange silence cook rather weather cheese pocket uncle yourself teacher prepare wrong supply observe corn rising replace quite dance final living headed warm split",
                    note_id: 4
                }
            ]
        }
    }
    render() { 
        return (
            <div id="board" className="row m-0 p-0 bg-dark">
                {this.state.notes.map(note=><Note text={note.text} title={note.title} index={note.note_id}/>)}
                
            </div>
        )
    }
}
 
export default Board