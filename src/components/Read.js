import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import 'bootstrap';
import 'react-bootstrap';
import './StudentButton.css';


export default function Read(props){
    function updateStudent(student){
        axios.put(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData/${student.id}`, {
            ...student, 
            checkbox: !student.checkbox
        })
    }

  //for future reference I would have a function that handles new information and re-renders it without having to refresh page



    return(
        //may have to change table to add new students instead of student information
        <div>
              <div className='addOperation' id='center-content'>
                <h4 id=" header"> Add a New Student</h4>
                <Link to='/add'>
                    <span>
                    {<Button >Add Student</Button>}
                    </span>
                </Link>
                </div>
            
             <Table>  
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell>Name</Table.HeaderCell>
                         <Table.HeaderCell>Last Name</Table.HeaderCell>
                         <Table.HeaderCell>Status</Table.HeaderCell>
                         <Table.HeaderCell>Actions  </Table.HeaderCell>
                       
                     </Table.Row>
                </Table.Header>

              

           
             <Table.Body>
                {props.APIData.map((data, index)=>{
                    console.log(data);
                    return(
                        <Table.Row key={index}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Registered' : 'Unregistered'}</Table.Cell>
                      
    
           
                
                     <Table.Cell>
                        <Link to='/update'>
                          </Link>
                    </Table.Cell>
              
                <Table.Cell>
                    <Button onClick={()=>props.onDelete(data.id)}> Delete</Button>
                    <Button onClick={()=>updateStudent(data)}> Flip Status</Button>
                </Table.Cell>
         
                        </Table.Row>
                    )
                })}
              
             </Table.Body>
         </Table>
    </div>
    )
}