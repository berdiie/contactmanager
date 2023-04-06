// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
// import { json } from 'react-router-dom';
import Add from './components/Add/Add';
import Contactlist from './components/contactlist/Contactlist';
import { v4 as uuidv4 } from 'uuid';
import { Update } from '@mui/icons-material';

function App() {
  const Local_Storage="details"
  const[info,setInfo]=useState(JSON.parse(localStorage.getItem(Local_Storage))||[])
  const[editlist,setEdit]=useState({})
  const[editform,setForm]=useState(false)
  
  const contactHandler=(details)=>{
    setInfo([...info,{...details,id:uuidv4()}])
    console.log(info)
  }
  const facts=(id)=>{
    console.log("facts"+id);
  const  removelist=info.filter((details)=>{
    return details.id!==id
  })
  setInfo(removelist)
}
const option=(id)=>{
  console.log("option"+id);
const  editlist=info.filter((details)=>{
  return details.id==id
})
localStorage.setItem("storage",JSON.stringify(editlist[0]))
setForm(true)

}
  
  useEffect(()=>{
    localStorage.setItem(Local_Storage,JSON.stringify(info))
   },[info])
  return (
   <>
      
     <Add handler={contactHandler} state={editform} updates={editlist}/>
     <br/><br/>
     <Contactlist yes={info} no={facts} edit={option}/>

   

     )
    </>
  );
}

export default App;
