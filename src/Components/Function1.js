import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

class FunctionOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div class= "RandomOne">
                <Button onClick= {() => this.props.buttonPressed()} bsStyle="warning">Random</Button>
           </div>
         );
    }
}
 
export default FunctionOne;