import PropTypes from 'prop-types';

export default ItemTitle = (props) => {
  return <div>{props.text}</div>
}

ItemTitle.PropTypes = {
  text: PropTypes.string
}
