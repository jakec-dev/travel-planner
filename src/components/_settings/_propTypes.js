import PropTypes from "prop-types";

const itemsPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  weight: PropTypes.number,
  url: PropTypes.string,
  price: PropTypes.number,
  notes: PropTypes.string,
});

export default itemsPropType;
