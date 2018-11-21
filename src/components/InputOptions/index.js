
import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import FloatButton from '../FloatButton'
import './style.scss'; 


class InputOptionsComponent extends Component {
   

    render(){
        return(
   
            <div className="input-options">
             {  this.props.inputs.map(input => (
                  <div key={input}
                        className={"input-option " + (this.props.disabled ? 'disabled' : '')}
                         onClick={(e)=>{this.props.onClick(input)}}
                    >
                    <FloatButton  value={input} disabled={this.props.disabled}  />
              </div>
          ))}
          </div>
          );
    }

}
   
InputOptionsComponent.propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
    disabled:PropTypes.bool,
    onClick:PropTypes.func.isRequired
  }
  
  InputOptionsComponent.defaultProps = {
    inputs: [],
    disabled:false,
    onClick:()=>{}
  };
  

export default InputOptionsComponent;