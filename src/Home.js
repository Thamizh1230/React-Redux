import React ,{useContext} from 'react'
import { stateContext } from './Context/Statecontext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { newarr } from './Context/stateSlice';
import { login } from './Context/stateSlice';

const Home = () => {

  
  //  const storage = JSON.parse(localStorage.getItem("newarray"));
  //  const [datas, setdatas] = useState(storage);

  //  const {state, dispatch} = useContext(stateContext);
  const state = useSelector(({sample})=>sample);
  const dispatch = useDispatch();
   console.log("state", state.newarr);

  //  const [datas, setdatas]= useState(state.newarr)
   
  //  console.log(datas);
  //  localStorage.removeItem("newarray");

  
  const removeElement = (id) => {
    //  setdatas(()=> datas.filter((val, i) => i!== id));
    //  console.log(datas);
    dispatch(newarr(state.newarr.filter((val,i)=>i!=id)));
      
  };
  // localStorage.setItem("newarray",JSON.stringify(datas));


  const editElement = (info)=>{
    Nav(`/form?name=${info.name}`)

  }
  
 const Nav = useNavigate();
 const gotoforms = ()=>{
  Nav("/form")

    }

    const logout=()=>{
      // dispatch({type:"LOGOUT", payload: localStorage.clear()});
      dispatch(login(localStorage.clear()));
    }

  return (
    <div>
       <table border="3"> 
       <caption style={{color:"black", fontSize:"25px"}}>User Details</caption>
        <thead>
          <tr>
            <th>ID</th>
           <th>UserName</th>
           <th>UserDescription</th>
           <th>IsCompleted</th>
           <th>Update</th> 
           <th>Delete</th>
           </tr>
    
        </thead>
        <tbody>
          {state.newarr?.map((items,i)=>(<tr key={i}>
            <td>{i+1}</td>
            <td>{items.name}</td>
            <td>{items.description}</td>
            <td>{items.iscomplete}</td>
            <td><button onClick={(()=>editElement(items))} >Edit</button></td>
            <td><button onClick={()=>removeElement(i)}>Delete</button></td>
          </tr>))}

        </tbody>
       </table>
        
       <div>
       <button onClick={()=>gotoforms()}>NavigateToForm</button><br /><br />

       </div>

       <div>
         <Button variant="contained" color='error'size="small" onClick={()=>logout()}>Logout</Button> 
       </div>
       
    </div>
  )
}

export default Home


