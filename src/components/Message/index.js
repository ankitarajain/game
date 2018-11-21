import React,{Component} from 'react'
import PropTypes from 'prop-types'
import FloatButton from '../FloatButton'
import Icon from '../Icon'
import './style.scss'; 

class Message extends Component {

  render(){
    const {message} = this.props;
  return(
  <div className={"message-item " + (this.props.message.player === this.props.currentuser ? 'right' : 'left')}>
    <Icon text={message.playerName} />
    <FloatButton value={message.value} />
    <div className="message"> {this.getExpression()}</div>
    <div className="message"> {this.getResult()}</div>
  </div>
)}

 getExpression(){
  return `[ ( ${this.props.message.value} + ${this.props.message.number}  ) / ${this.props.divident} ]`  
}

 getResult(){
  return parseInt([ (parseInt(this.props.message.value) + this.props.message.number ) / this.props.divident])    
}
}

const MessageType =PropTypes.shape({
  player: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  divivend: PropTypes.number.isRequired,
 })

Message.propTypes = {
  currentuser: PropTypes.string.isRequired,
  message : MessageType
}

Message.defaultProps = {
  currentuser:"",
  message : {
    player:"",
    value:"",
    number : 0,
    divivend:0
  }
};

export default Message
