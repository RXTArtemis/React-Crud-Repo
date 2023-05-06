//for emergency contacts with add and create buttons
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import './Form.css';

export default function EmergencyForm(){
  
 const [id, setId]= useState('');
 useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setFullName(localStorage.getItem('Full Name'));
        setPhoneNumber(localStorage.getItem('Phone Number'));
        setWorkNumber(localStorage.getItem('Work Number'));
        setEmail(localStorage.getItem('E-mail'));
        setRelationship(localStorage.getItem('Relationship'));

    },[]);

    const formRequest=()=>{
        axios.put(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData/${id}`,{

        fullName,
        phoneNumber,
        workNumber,
        email,
        relationship
        })
    };

    const [fullName, setFullName]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [workNumber, setWorkNumber]=useState('');
    const [email, setEmail]=useState('');
    const [relationship, setRelationship]=useState('');

return(
    
        <form className='styled-form'>
            <h2>Emergency Contacts</h2>
            <p>Please make sure this information is current</p>
            <div className='responsive-field'>
                <label> Full Name </label>
                <input placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}></input>
            </div>
            <h5> Add Contact Information</h5>
            <div>
                <label> Phone Number </label>
                <input placeholder="Phone Number" onChange={(e)=>setFullName(e.target.value)}></input>
            </div>
            <div>
                <label> Work Number </label>
                <input placeholder="Work Number" onChange={(e)=>setWorkNumber(e.target.value)}></input>
            </div>
            <div>
                <label> E-mail </label>
                <input placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label> Relationship </label>
                <input placeholder="Relationship" onChange={(e)=>setRelationship(e.target.value)}></input>
            </div>
            
        </form>
    
    )
}