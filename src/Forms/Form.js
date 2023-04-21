import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Frm from './Frm.css';
import { stateContext } from '../Context/Statecontext';

const Form= () => {
    const {state, dispatch} = useContext(stateContext);
    console.log("state", state,"dispatch", dispatch);

    const [params] = useSearchParams();
    console.log(params.get("name"));
    const [username, setuserName] = useState("");
    const [userdes, setuserDes] = useState("");
    const [iscomplete, checkisComplete] = useState ("");
    // const [newarr, setnewArr] = useState([]);
    const [formsubmit, setformSubmit] = useState(false);


    useEffect(()=>{
        if(params.get("name")!= null){
            const ele = JSON.parse(localStorage.getItem("newarray"));
            console.log(ele);
            const obj = ele.find((element)=>element.name === params.get("name"));
            // console.log(obj);
            setuserName(obj.name);
            setuserDes(obj.description);
            checkisComplete(obj.iscomplete);

        }},[params])
    
   
    const handlename =(e)=>{
        console.log(e.target.value);
        setuserName(e.target.value);
    }
    const handledes = (e)=>{
        console.log(e.target.value);
        setuserDes(e.target.value);

    }
    const handleiscomplete =(e)=>{
        console.log(e.target.checked);
        checkisComplete(e.target.checked ? "YES" : "NO");
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        setformSubmit(true);

        if(username === "" || userdes === ""){
            return
        }
        console.log(username, userdes, iscomplete);




        if(params.get("name") == null){

            dispatch({type: "UPDATE_FORM", payload:[...state.newarr,{name:username, description:userdes, iscomplete:iscomplete}]})
        }else{
            const newvalue = state.newarr.map(el=>{
                if(el.name ===  params.get("name")){
                    return{name:username, description:userdes, iscomplete:iscomplete};
                }
                    return el;
                
                });
          
             console.log(newvalue);
             dispatch({type:"UPDATE_FORM",payload: newvalue})

            
        }
     }
    

    const Navigate=useNavigate();
    const gotohome =()=>{
       Navigate("/home");
   }

 return (
   <div><h2>Form Page</h2>
       <div className='main'>
       <form onSubmit={handlesubmit}>
       <label>Enter User_Name : </label>  <input type="text" onChange={handlename} value={username}/><br />
       {username ==="" && formsubmit && <div style={{color:"red"}}>User_Name Required!!!</div> }
       <label>Enter User_Description : </label> <input type='text' onChange={handledes} value={userdes}/> <br />
       {userdes === "" && formsubmit && <div style={{color:"red"}}>User_Des Required!!!</div>}
      <label>Iscompleted</label> <input type='checkbox'  onChange={handleiscomplete} checked={iscomplete}/> <br />
       <input type='submit'  /> 
      
   </form>
   <button onClick={()=>gotohome()}>Navigate To Home</button>
   

       </div>

   </div>
    )
}
export default Form
