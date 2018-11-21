
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'; 

class Icon extends Component {
  
  render() { 
  return(
    <div className="icon">
        {this.props.text}
 </div>
)}

}

Icon.propTypes = {
  text: PropTypes.string.isRequired
}

Icon.defaultProps = {
  text: ""
};

export default Icon
