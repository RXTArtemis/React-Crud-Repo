import React from "react";
import { Button, } from "semantic-ui-react";
import {EditIcon, DeleteIcon} from '@mui/icons-material';

const ActionButtons = () => (
    <div>
      <Button
      // onClick={()=>onDelete(setAPIData(APIData.filter(data =>data.id !== idToDelete)))}
        color='red'
        content='Delete'
        // icon={DeleteIcon}
        label={{ basic: true, color: 'red', pointing: 'left' }}
      />
      <Button
      // onClick={()=>setAPIData(APIData.map
      //   (data =>(data.id === idToUpdate) ? {...data, ...updatedData}: data
      //   ))}
        color='blue'
        content='Edit'
        // icon={EditIcon}
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