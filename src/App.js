import React, { Component } from 'react';

import Board from './Board';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onClear = this.onClear.bind(this)
    }

    onClear(){
        this.setState({})
    }

    render() { 
        return ( 
            <div>
                <Navbar onClear={this.onClear}/>
                <Board clearTrigger={this.state}/>
                <Footer />
            </div>
        );
    }
}
 
export default App;