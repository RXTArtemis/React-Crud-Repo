import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
// let history=useHistory();
import './Form.css';

export default function Create(props){
    let history =  useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = (event) =>{
        event.preventDefault();
        axios.post(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData`,
        {
            firstName,
            lastName,
            checkbox
        }).then((data)=>{
            console.log(data);
            props.setAPIData(props.APIData.concat(data))
            history.push('/Read')
        })

        // console.log(firstName);
        // console.log(lastName);
        // console.log(checkbox);
    }
    return(
        <div>
            
            <Form className='create-form'>
                <h1>Create an Account</h1>
                 <Form.Field>
                 <label>First Name</label>
                     <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                  <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                 <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}


