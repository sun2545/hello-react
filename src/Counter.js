import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number:0
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount (deprecated');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shoouldComponentUpdate');
        if(nextState.number % 5 === 0)  return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }

    handleIncrease =() => {
        const {number} = this.state;
       this.setState({
           number: number +1
       });
    }

    handleDecrease =() => {
        this.setState(
        ({number }) => ({
            number: number -1
        })
    );          
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Counter </h1>
                <div> result: {this.state.number}</div>
                <button onClick ={this.handleIncrease}> + </button>
                <button onClick ={this.handleDecrease}> - </button>
                </div>
        )
    }
}

export default Counter;