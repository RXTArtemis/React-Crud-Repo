
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import 'semantic-ui-react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// //figure out why react bootstrap isn't working. error says can't resolve
// import {Nav, Navbar} from 'react-bootstrap';
import Navbar from './components/Navbar.js';
import HomePage from './components/Homepage';

function App() {
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
      <h2 className='main-header'>Student Registration Portal</h2>
      <Switch>
      <Route path='/home'>
      <HomePage/>
      </Route>

        <Route path='/create'>
        <Create/>
        </Route>
       
          <Route path='/read'>
          <Read/>
        </Route>

        <Route path='/update'>
          <Update/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
