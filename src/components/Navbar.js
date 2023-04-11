import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <AppRegistrationIcon size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Registration CRUD App
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>Sign in</Dropdown.Item>
    //make a sign in page

            <Dropdown.Item>Create Account</Dropdown.Item>
            //create page
            <Dropdown.Divider />
            <Dropdown.Header>Registration Info</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>View</span>
              <Dropdown.Menu>
                <Dropdown.Item>Edit Registration Information</Dropdown.Item>
                //read page and update page
                {/* <Dropdown.Item>List Item</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

  </div>
)

export default FixedMenuLayout