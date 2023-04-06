import React from 'react'
import  './contactlist.css';
import {Contacts,Delete,Create} from "@mui/icons-material";

export default function contactlist(props) {
    const i=props.yes
    console.log(i);

   

    return(
        <center>
            {i.map((data)=>

<div className='data'>
<tr>
<th><p className="icon1"><Contacts/></p></th>
<th><p className='text'>{data.name}<br/>{data.email}</p></th>
<th><p className="icon3"><Create onClick={()=> props.edit(data.id)}/></p></th>
<th><p className="icon2"><Delete onClick={()=> props.no(data.id)} /></p></th>
</tr>
</div>
)}
            
        </center>
    )
}