
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import 'semantic-ui-react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="main">
        <nav>
          <ul>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/read">Read</Link>
            </li>
          </ul>
        </nav>
      <h2 className='main-header'>React Crud App</h2>
      <Switch>
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
