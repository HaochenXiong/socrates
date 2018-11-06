import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

class FunctionTwo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "RandomTwo">
                
             <Button onClick= {() => this.props.buttonPressed()} bsStyle="warning">Random Without Repitition</Button>
           
            </div>
         );
    }
}
 
export default FunctionTwo;