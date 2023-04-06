import React, { useState } from 'react'
import  './add.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Add({state,handler,updates}) {
    const[inputs,setInputs]=useState({})
    const editform=state
    const[inputs2,setInputs2]=useState(JSON.parse(localStorage.getItem("storage")) || "")
    console.log(inputs2);
    const notify=(data)=>toast(data); //notify is given in case of using multiple toast
    const setLogin=(event)=>{
    const name=event.target.name;
    // console.log("value" value)
      const value=event.target.value;

      setInputs({...inputs,[name]:value})
}
 const pageSubmit=(event)=>{
    event.preventDefault();
    if(!inputs.name|| !inputs.email){
      notify("Enter something") //display note
    }
    else{
    handler(inputs)
    console.log(inputs)
    setInputs("")
 }
}
    return(
        <>
        {editform==false&&(
        <center>
        <div class="list">
          <ToastContainer/>
        
            <h3 class="head"><i>Contact List</i></h3>
            <form onSubmit={ pageSubmit}>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">
      <p >Name:</p>
    </label>
    <div class="col-sm-10">
      <input type="text" id="inputEmail3" value={inputs.name||""} placeholder='Name' name="name" onChange={setLogin}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">
    <p>Email:</p>
    </label>
    <div class="col-sm-10">
      <input type="email"  id="inputPassword3" value={inputs.email||""}  placeholder='Email' onChange={setLogin} name="email"/>
    </div>
    </div>
    <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="sub" onClick={pageSubmit}>Add</button>
    </div>
  </div>
</form>
</div>
        </center>
        )}

        {editform==true&&(
          <center>
                  <div class="list">
                  <ToastContainer/>
                
                    <h3 class="head"><i>Edit Contact</i></h3>
                    <form onSubmit={ pageSubmit}>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              <p >Name:</p>
            </label>
            <div class="col-sm-10">
              <input type="text" id="inputEmail3" value={inputs2.name||""} placeholder='Name' name="name" onChange={setLogin}/>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
            <p>Email:</p>
            </label>
            <div class="col-sm-10">
              <input type="email"  id="inputPassword3"  placeholder='Email' onChange={setLogin} name="email"/>
            </div>
            </div>
            <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="sub" onClick={pageSubmit}>Update</button>
            </div>
          </div>
        </form>
        </div>
        
            </center>
        )}
        </> 
    )
}