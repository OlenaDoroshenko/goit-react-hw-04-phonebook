import PropTypes from 'prop-types';
import Input from 'components/base/Input.styled';

const Filter = ({ value, onChange }) => (
  <>
    <span>Find contacts by name</span>
    <label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
