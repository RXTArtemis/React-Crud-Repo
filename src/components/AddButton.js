import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import React from 'react';
import {Button} from 'semantic-ui-react';

const AddButton = () => (
    <div>
      <Button
        color='green'
        content='Add Emergency Contact'
        icon= {PersonAddAltIcon}
        label={{ basic: true, color: 'green', pointing: 'left'}}
      />
    </div>
  )
  
  export default AddButton

