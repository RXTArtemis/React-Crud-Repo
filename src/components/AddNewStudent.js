//goes into read component for final crud operation


import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddNewStudent() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () =>{
        axios.post(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData`,
        {
            firstName,
            lastName,
            checkbox
        }).then(()=>{
            history.push('/Read')
        })
}
  return (
    <div>
        <Form className='create-form'>
                 <Form.Field>
                 <label>First Name</label>
                     <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                  <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                 <Checkbox label='Do you want to confirm student registration?' onChange={(e)=> setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
    </div>
  )
}
