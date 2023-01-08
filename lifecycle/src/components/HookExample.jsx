import { useState } from "react";
import { useEffect } from "react"

export const HookExample = ()=>{
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState('');
    const plus = ()=>{
        setCount(count + 1);
    }

    const nameChange= ()=>{
        setFirstName('Amit');
    }
    useEffect(()=>{
        // ComponentDidMount
        console.log('ComponentDidMount Call...');
        // ComponentDidUpdate
        // ComponentWillUnMount
       
    },[]);
    useEffect(()=>{
        // ComponentDidMount
        console.log('ComponentDidUpdate Call...');
        // ComponentDidUpdate
        // ComponentWillUnMount
       
    },[count]);

    useEffect(()=>{
        //ComponentWillUnMount
        return function(){
            console.log('ComponentWillUnMount Call');
        }
    }, [])

    return (<>
    <h1>Hook </h1>
    <p>Counter is {count}</p>
    <button onClick={plus}>+</button>
    <button onClick={nameChange}>Name Change</button>   
    <h4>Name is {firstName}</h4>

    </>)
}