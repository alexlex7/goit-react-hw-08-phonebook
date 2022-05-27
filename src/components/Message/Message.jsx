import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
export default function Message({ text }) {
  return (
    <Alert className="mx-auto" variant="primary" style={{ width: '480px' }}>
      <Alert.Heading className="m-0 ">{text}</Alert.Heading>
    </Alert>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
