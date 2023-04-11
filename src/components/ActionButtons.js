import React from "react";
import { Button, } from "semantic-ui-react";
import {EditIcon, DeleteIcon} from '@mui/icons-material';

const ActionButtons = () => (
    <div>
      <Button
        color='red'
        content='Delete'
        icon={DeleteIcon}
        label={{ basic: true, color: 'red', pointing: 'left' }}
      />
      <Button
        color='blue'
        content='Edit'
        icon={EditIcon}
        label={{
          basic: true,
          color: 'blue',
          pointing: 'left',
        }}
      />
    </div>
  )

  //edit button is to work for update, import in update component

  
  export default ActionButtons;