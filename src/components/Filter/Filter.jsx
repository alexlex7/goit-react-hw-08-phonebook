import { FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Filter({ filter, handleChange }) {
  return (
    <>
      <InputGroup className="mb-3 mx-auto" style={{ width: '480px' }}>
        <InputGroup.Text id="basic-addon3">
          Find contact by name
        </InputGroup.Text>
        <FormControl
          id="basic-url"
          aria-describedby="basic-addon3"
          value={filter}
          name="filter"
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
}

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
