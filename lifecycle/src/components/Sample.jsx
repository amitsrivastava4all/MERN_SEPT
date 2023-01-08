import { Component } from "react";

export class Sample extends Component{
    render(){
        return (<h3>Sample Component</h3>)
    }
    componentDidMount(){
        console.log('Welcome ');
    }
    componentWillUnmount(){
        // Cancel Network calls
        // redux unsubscribe
        // Event listener remove
        // Resource Clean up
        console.log('Good Bye ...');
    }
}