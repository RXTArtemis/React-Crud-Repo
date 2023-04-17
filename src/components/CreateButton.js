//make a create button with icon

import React from 'react'
import { Button } from 'semantic-ui-react';
import {DrawIcon} from '@mui/icons-material';

export default function CreateButton() {
  return (
    <Button
    color='purple'
        content='Create'
        icon={DrawIcon}
        label={{ basic: true, color: 'purple', pointing: 'left' }}
      />
    
  )
}
