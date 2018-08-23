import React, { Component } from 'react';
import {Jumbotron , Button} from 'react-bootstrap';
class JumboTronComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
            <Jumbotron>
            <h1>Hola a todos!</h1>
            <p> {this.props.children}</p>
            <p><Button bsStyle ="primary"> Aprende mas</Button> </p>
            </Jumbotron>
            </div>
        );
    }
}
       export default JumboTronComponent; 