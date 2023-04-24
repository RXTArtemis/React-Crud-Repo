import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ActionButtons from './ActionButtons';
import AddButton from './AddButton';


export default function Read(){
    const [APIData, setAPIData]= useState([]);
useEffect(()=>{
axios.get(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData`)
.then((response)=>{
    setAPIData(response.data);
})
},[])



const setData= (data) =>{
    let{id, firstName, lastName, checkbox} = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

const onDelete = (id) =>{
    axios.delete(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData/${id}`)
    .then(()=>{
        getData();
    })
}

const getData=()=>{
    axios.get(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData`)
    .then((getData)=>{
        setAPIData(getData.data);
    })
}

    return(
        //may have to change table to add new students instead of student information
        <div>
            {/* <Table>
                <Table.Header> New Student</Table.Header>
                <Table.Row>Add Student Information</Table.Row>
                <AddButton/>
            </Table>
            <span></span> */}
             <Table>
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Name</Table.HeaderCell>
                         <Table.HeaderCell>Last Name</Table.HeaderCell>
                         <Table.HeaderCell>Status</Table.HeaderCell>
                         <Table.HeaderCell>Actions  </Table.HeaderCell>
                       
                     </Table.Row>
                </Table.Header>

                <div className='addOperation'>
                <Table.HeaderCell> Add a New Student</Table.HeaderCell>
                <Link to='/add'>
                    <Table.Cell>
                    {<Button  onClick={()=>setAPIData(APIData.concat(newData))}>Add Student</Button>}
                    </Table.Cell>
                </Link>
                </div>

           
             <Table.Body>
                {APIData.map((data, index)=>{
                    console.log(data);
                    return(
                        <Table.Row key={index}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Registered' : 'Unregistered'}</Table.Cell>
                            {/* <ActionButtons/> */}
                            <div>
                {/* <div> */}
                <Link to='/update'>
                     <Table.Cell>
                        {<Button onClick={()=>setAPIData(APIData.map
                        (data =>(data.id === idToUpdate) ? {...data, ...updatedData}: data
                        ))}>Update</Button>}
                         {/* <Button onClick={()=> setData(data)}>Update</Button> */}
                    </Table.Cell>
                </Link>
                {/* </div> */}
                {/* <div> */}
                <Table.Cell>
                    {<Button onClick={()=>onDelete(setAPIData(APIData.filter(data =>data.id !== idToDelete)))}> Delete</Button>}
                    {/* <Button onClick={()=>onDelete(data.id)}>Delete</Button> */}
                </Table.Cell>
                {/* </div> */}
            </div>
                        </Table.Row>
                    )
                })}
              
             </Table.Body>
         </Table>
    </div>
    )
}