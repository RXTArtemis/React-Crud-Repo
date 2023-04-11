import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table, Button, TableHeader} from 'semantic-ui-react';
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
        <div>
            <Table>
                <TableHeader> New Users</TableHeader>
                <TableRow>Add User Information:</TableRow>
                <AddButton/>
            </Table>
            <span></span>
             <Table>
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Name</Table.HeaderCell>
                         <Table.HeaderCell>Last Name</Table.HeaderCell>
                         <Table.HeaderCell>Status</Table.HeaderCell>
                         <Table.HeaderCell>Actions  </Table.HeaderCell>
                       
                     </Table.Row>
                  
                </Table.Header>
{/* 
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Link to='/update'>
                     <Table.Cell>
                         <Button onClick={()=> setData(data)}>Update</Button>
                    </Table.Cell>
                </Link>
                <Table.Cell>
                    <Button onClick={()=>onDelete(data.id)}>Delete</Button>
                </Table.Cell> */}

             <Table.Body>
                {APIData.map((data, index)=>{
                    return(
                        <Table.Row key={index}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <ActionButtons/>
                        </Table.Row>
                    )
                })}
              
             </Table.Body>
         </Table>
    </div>
    )
}