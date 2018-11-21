import React ,{Component } from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import './style.scss'; 

class MessagesList extends Component {

 render(){
  const {messages} = this.props;
  if(!messages){
    return ( <div id="messages-list"></div>)
  }
  return (
  <div id="messages-list">
      {  messages.map((message,i) => ( 
        <Message
        key={i}
        message={message}
        divident={this.props.divident}
        currentuser={this.props.currentuser}
        />
    ))}
  
  </div>
)
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
  divivend: PropTypes.number.isRequired,
  messages : PropTypes.arrayOf(MessageType).isRequired,
}

Message.defaultProps = {
  currentuser:"",
  divivend:0,
  messages : []
};
export default MessagesList
