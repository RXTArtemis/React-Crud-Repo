import React, {useEffect, useState} from 'react';
import {Button} from 'semantic-ui-react';
import axios from 'axios';
import './InputForm.css';
import EmergencyContacts from './EmergencyContacts';
import './Form.css';

//make sure to have all crud applications


export default function Update(props){
  
    const [id,setID] = useState('');

    // const [student, setStudent] = useState(null);

    // async function updateState(e){
    //     e.preventDefault();
    //     const updatedData = await postData
    // }

    //change to props.firstName or something

useEffect(()=>{
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'));
    //adding other variables to local storage
    setAddress(localStorage.getItem('Address'));
    setCity(localStorage.getItem('City'));
    setState(localStorage.getItem('State'));
    setZipCode(localStorage.getItem('Zip Code'));
    setDateOfBirth(localStorage.getItem('Date of Birth'));
    setPhoneNumber(localStorage.getItem('Phone Number'));
    setEmail(localStorage.getItem('Email'));
    setProgramOfStudy(localStorage.getItem('Program of Study'));
    setStudentID(localStorage.getItem('Student Id'));
    setDateEnrolled(localStorage.getItem('Date Enrolled'));
    setAcademicTransfer(localStorage.getItem('Academic Transfer'));
    setHighschool(localStorage.getItem('High School'));
    setGPA(localStorage.getItem('GPA'));

},[]);



//simplify update method so that it registers or unregisters student...

//basic information
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [checkbox, setCheckbox]=useState(false);
    const [address, setAddress]= useState('');
    const [city, setCity]= useState('');
    const [state, setState]= useState('');
    const [zipCode, setZipCode]= useState('');
    const [dateOfBirth, setDateOfBirth]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');
    const [email, setEmail]= useState('');

    //academic info
    const [programOfStudy, setProgramOfStudy]= useState('');
    const [studentID, setStudentID]= useState('');
    const [dateEnrolled, setDateEnrolled]= useState('');
    const [academicTransfer, setAcademicTransfer]=useState(false);
    //boolean value like checkbox
    const [highschool, setHighschool]=useState('');
    const [GPA, setGPA] = useState('');

    //maybe do a drop down for these forms with buttons on the side or the bottom..
    return(

        //do I need to pass props through the onChange events?? ex: props.target.value
        <div>
            <form className="create-form">
                <h2>Basic Student Information</h2>
                <div>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input placeholder='Date of Birth' onChange={(e)=>setDateOfBirth(e.target.value)}></input>
                </div>
                <div>
                    <label>E-mail</label>
                    <input placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                </div>

                <div>
                    <label>Address</label>
                    <input placeholder='Address' onChange={(e)=>setAddress(e.target.value)}></input>
                    {/* <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(!checkbox)}/>   */}
                </div>
                <div>
                    <label>City</label>
                    <input placeholder='City' onChange={(e)=>setCity(e.target.value)}></input>
                </div>
                <div>
                    <label>State</label>
                    <input placeholder='State' onChange={(e)=>setState(e.target.value)}></input>
                </div>

                <div>
                    <label>Zip Code</label>
                    <input placeholder='Zip Code' onChange={(e)=>setZipCode(e.target.value)}></input>
                </div>

                <Button type='submit' >Save Information</Button>
            </form>
            <span></span>
            <form className='academic-form'>
            <h2>Academic Information</h2>
            <div>
                    <label>Student ID</label>
                    <input placeholder='Student ID' onChange={(e)=>setStudentID(e.target.value)}></input>
                </div>
                <div>
                    <label>GPA</label>
                    <input placeholder='GPA' onChange={(e)=>setGPA(e.target.value)}></input>
                </div>
                <div>
                    <label>Program of Study</label>
                    <input placeholder='Program of Study' onChange={(e)=>setProgramOfStudy(e.target.value)}></input>
                </div>
                <div>
                    <label>Date Enrolled</label>
                    <input placeholder='Date Enrolled' onChange={(e)=>setDateEnrolled(e.target.value)}></input>
                </div>
                <div>
                    <label>High School</label>
                    <input placeholder='High School' onChange={(e)=>setHighschool(e.target.value)}></input>
                </div>
                <div>
                    <label>Academic Transfer</label>
                    <input placeholder='Academic Transfer' onChange={(e)=>setAcademicTransfer(e.target.value)}></input>
                </div>
                <Button type='submit' onClick={()=>props.updateAPIData()}>Save Information</Button>
            </form>
            {/* //put emergency contact component */}
            <EmergencyContacts/>
            
        </div>
    )
}

//may have to restructure this page