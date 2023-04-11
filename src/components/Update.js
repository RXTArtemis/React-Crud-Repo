import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';
import axios from 'axios';
import {useHistory} from 'react-router';



export default function Update(){
    let history = useHistory();
    const [id,setID] = useState(null);

useEffect(()=>{
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'));
    //adding other variables to local storage
    setAddress(localStorage.getItem('Address'));
    setCity(localStorage.getItem('City'));
    setState(localStorage.getItem('State'));
    setZipCode(localStorage.getItam('Zip Code'));
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

const updateAPIData = () =>{
    axios.put(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData/${id}`,{
        firstName,
        lastName,
        checkbox,
        //add other variables and update API keys and pairs
        address,
        city,
        state,
        zipCode,
        dateOfBirth,
        phoneNumber,
        email,
        programOfStudy,
        studentID,
        dateEnrolled,
        academicTransfer,
        highschool,
        GPA
    })
}

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

    return(
        <div>
            <Form className="create-form">
                <h2>Basic Student Information</h2>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' onChange={(e)=>setAddress(e.target.value)}></input>
                    {/* <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(!checkbox)}/>   */}
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City' onChange={(e)=>setCity(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input placeholder='State' onChange={(e)=>setState(e.target.value)}></input>
                </Form.Field>

                <Form.Field>
                    <label>Zip Code</label>
                    <input placeholder='Zip Code' onChange={(e)=>setZipCode(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label></label>
                    <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}

//may have to restructure this page