import React, {Component} from 'react';

class MyName extends Component {
    
    render(){
        return (
            <div>
                Hello my Name is <b> {this.props.name}</b>
                </div>
        );
    }
}

MyName.defaultProps ={
       name:'basic name'
};
export default MyName;