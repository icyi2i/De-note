import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="footer" className="w-100 p-1 px-3 fixed-bottom">
                <p className="text-muted text-center text-lg-right">
                    Copyright by Sarthak Gambhir (Ice bear) &#169;2020</p>
            </div>
         );
    }
}
 
export default Footer;