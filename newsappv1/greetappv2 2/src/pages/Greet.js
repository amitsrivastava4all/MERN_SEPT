import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Message } from "../components/Message"
import Hello from '../assets/images/hello.png';
export const Greet = ()=>{
    //console.log('Greet Call');
    // Local Variables
    const [greetState, setGreetState] = useState({first:'', last:'', msg:''})
    const names = {first:greetState.first, last:greetState.last};
    let fullName = "";
    const recInputValue = (val, label)=>{
        console.log('***** Label ', label,' **** ', names[label.toLowerCase()]+" " + val);
        names[label.toLowerCase()] = val;
        setGreetState({first:names.first, last:names.last, msg :''});
        
       
        //firstName = val;
        //console.log('First Name is ', firstName);
    }

    const initCap = (currentName)=>
        currentName.charAt(0).toUpperCase() + currentName.substring(1).toLowerCase()+" ";
    

    const greet=()=>{
        for(let key in names){
            const val = names[key];
            fullName += initCap(val);
        }
        setGreetState({first:names.first, last:names.last, msg :'Welcome '+fullName});

        
    }

    const clearAll = ()=>{
        setGreetState({first:'', last:'', msg :''});
    }

    return (<div>
        <img width="100px" height="100px" src = "https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg"/>
            <img src = {Hello}/>
            <Message myclass="alert-info" msg="Greet App "/>
            <Input val={greetState.first} txtInput = {recInputValue} labelValue="First"/>
            <Input val={greetState.last} txtInput = {recInputValue} labelValue="Last"/>
            <Button operation = {greet} labelValue="Greet" myClass="primary"/> &nbsp;
            <Button operation={clearAll} labelValue="Clear All" myClass="secondary"/>
            <Message myclass="alert-success" msg = {greetState.msg}/>
    </div>)
}