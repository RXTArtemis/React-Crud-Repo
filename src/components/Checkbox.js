import React from 'react';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from 'semantic-ui-react';

//create logic for checked boxes; use ternary  operator if "checked then icon is checked box if not its normal box"
//this will  replace the checked or unchecked in table

const CheckBoxButton = () => (
  <Button className="icon">
    {/* <Icon name={checkbox? CheckBoxIcon:CheckBoxOutlineBlankIcon} /> */}
  </Button>
)

export default CheckBoxButton