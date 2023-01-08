import { Component } from "react";
import { PureComponent } from "react";
import { Sample } from "./Sample";
import { HookExample } from "./HookExample";

export class LifeCycle extends Component{
    constructor(props){
         // props initalize by calling super constructor call
         super(props); // Calling parent class constructor
        // Initalize the State
        this.state = {counter : 1, content : ''};
       
        // Event Binding
        this.plus  = this.plus.bind(this);
        this.writeMail  = this.writeMail.bind(this);
        //console.log("1. Mounting ::: Constructor Call");
    }

    static getDerivedStateFromProps(props, state){
       // console.log("2. Mounting ::: getDerivedStateFromProps Call ",props, state);
        // return {
        //     counter : parseInt(props.count) + state.counter
        // }
        return null;
    }

    plus(){
       // console.log('Plus call ', this);
        this.setState({counter:this.state.counter + 1})
       
    }

    writeMail(event){
        this.setState({...this.state, content: event.target.value });
    }

    render(){
        // write a JSX
       // console.log("3. Mounting ::: render Call");
    //    return (
    //     <h1>Counter is {this.state.counter}</h1>
    //    ); 
    //return "Amit";
    //return 1000;
    //return [100,200];
    //return [<h1>Counter is </h1>,<h2>Value is </h2>]
    return (<>
    {this.state.counter<10?<HookExample/>:<p>Gone...</p>}
    <h1>Counter is {this.state.counter}</h1>
    <br/>
    <textarea onChange={this.writeMail} rows="5" cols="20" placeholder="Type Mail Here"></textarea>
    <button onClick= {this.plus}>Plus</button>
    </>)
   // return (10 + 10 ===20) && <h1>Hello react</h1>
   //return (10 + 10 ===20);
   //return null
    }

    componentDidMount(){
        console.log("4. Mounting ::: componentDidMount");
        const h1Tag = document.querySelector('h1');
        h1Tag.style.backgroundColor = 'red';
        // Network call (fetch , axios)
        // Redux Subscribe
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.wishList!==this.props.wishList;
    //     //return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
       // console.log("Updation Phase After render call ");
        // if(prevProps.messages.length<this.props.messages.length){
        //     const oldMessages = prevProps.messages;
        // }
        // if(prevState.songs.song.isPlaying){
        //     this.state.songs.song.isPlaying = true;
        //     prevState.songs.song.isPlaying = false;
        //     return false;
        // }
        return null;
    }

    saveAsDraft(){
        localStorage.mail = this.state.content;
       // console.log('Mail Saved...');
    }

    componentDidUpdate(prevProps, prevState){
       // console.log(":::::: Updation Phase After getSnapshotBeforeUpdate call ");
        this.saveAsDraft();
    }
}