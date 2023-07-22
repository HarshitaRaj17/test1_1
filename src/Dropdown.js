import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample({title}) {
  return (
    <DropdownButton id="dropdown-primary-button" style={{marginTop:'10px',paddingTop:'4px'}}title={title}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

    </DropdownButton>
  );
}

export default BasicButtonExample;
