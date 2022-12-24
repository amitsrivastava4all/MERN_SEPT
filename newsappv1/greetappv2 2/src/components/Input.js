import React from 'react'

const Input = ({labelValue, txtInput, val}) => {
  //console.log('Rec Value ', val);
    const placeHolder = `Type ${labelValue} Name Here`;
    const takeInput = (event)=>{
        const txtBoxValue =  event.target.value;
        //console.log('TextBox Value ', txtBoxValue);
        txtInput(txtBoxValue, labelValue); // child call parent fn and pass textbox value to the parent
    }
  return (
    <div>
        <label>{labelValue} Name</label>
        <input value = {val}  onChange={takeInput} className='form-control' type='textbox' placeholder={placeHolder}/>
    </div>
  )
}

export default Input