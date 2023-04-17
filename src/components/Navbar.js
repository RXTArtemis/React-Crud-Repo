import React from 'react'
import {Container} from 'semantic-ui-react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {BrowserRouter as Route, Link} from 'react-router-dom';



export default function workingNavBar(){
  return(
    <nav className="navbar navbar-expand bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Student Registration Portal</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/home">Home</Link>
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          </li>
          <li className="nav-item">
            <Link to='/create'>Register</Link>
            {/* <a class="nav-link" href="#">Link</a> */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More Actions
            </a>
            <ul className="dropdown-menu">
              <Link to='/read'>View Registration Information</Link>
              <Link to="/update">Update Student Information</Link>
              {/* <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li> */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}





{/* // const FixedMenuLayout = () => (
 
//   <div>
//     <Menu fixed='top' inverted>
//       <Container>
//         <Menu.Item as='a' header>
//           <AppRegistrationIcon size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
//           Registration CRUD App
//         </Menu.Item>
//         <Menu.Item as='a'>Home</Menu.Item>

//         <Dropdown item simple text='Dropdown'>
//           <Dropdown.Menu>
//             <Dropdown.Item>Sign in</Dropdown.Item>
//     //make a sign in page

//             <Dropdown.Item>Create Account</Dropdown.Item>
//             //create page
//             <Dropdown.Divider />
//             <Dropdown.Header>Registration Info</Dropdown.Header>
//             <Dropdown.Item>
//               <i className='dropdown icon' />
//               <span className='text'>View</span>
//               <Dropdown.Menu>
//                 <Dropdown.Item>Edit Registration Information</Dropdown.Item>
//                 //read page and update page
//                 {/* <Dropdown.Item>List Item</Dropdown.Item> */}
{/* //               </Dropdown.Menu>
//             </Dropdown.Item> */}
{/* //           </Dropdown.Menu>
//         </Dropdown> */}
{/* //       </Container>
//     </Menu> */}
{/* 
//   </div>
// )

// export default function workingNavBar(){ */}
{/* //   return FixedMenuLayout; */} 


