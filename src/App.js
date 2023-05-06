
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import 'semantic-ui-react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '@mui/material';
import '@mui/icons-material';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage';
import AddNewStudent from './components/AddNewStudent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [APIData, setAPIData]= useState([]);
  useEffect(()=>{
  axios.get(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData`)
  .then((response)=>{
      setAPIData(response.data);
  })
  },[])

  const onDelete = (id) =>{
    axios.delete(`https://642a2fd700dfa3b54740f1fb.mockapi.io/fakeData/${id}`)
    .then(()=>{
      setAPIData(APIData.filter(student => student.id !== id))

    })
}

  return (
   
    <Router>
      <Navbar />
    <div className="main">
        {/* <nav className="nav-design">
          <ul>
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/create">Create a New Student</Link>
            </li>
            <li>
              <Link to="/update">Update Student Information</Link>
            </li>
            <li>
              <Link to="/read">View Student Information</Link>
            </li>
          </ul>
        </nav> */}
      
      <Switch>
      <Route path='/home'>
      <HomePage/>
      </Route>

        <Route path='/create'>
        <Create APIData={APIData} setAPIData={setAPIData}/>
        </Route>
       
          <Route path='/read'>
          <Read APIData={APIData} onDelete={onDelete}/>
        </Route>

        <Route path='/update' APIData={APIData}>
          <Update/>
        </Route>

        <Route path='/add'>
          <AddNewStudent/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
