
import React , {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'; 

class FloatButton extends Component {
 
render(){
  const {value} = this.props;
  return(
    <div 
    className={"float-button " + (this.props.disabled ? 'disabled' : '')}
    onClick={()=>{console.log(value)}}>
    {value}
</div>
)}
}

FloatButton.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

FloatButton.defaultProps = {
  value: '',
  disabled: false
};

export default FloatButton
