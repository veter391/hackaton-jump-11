import { useState } from 'react';
import '../styles/chat.scss'

function Chat({ name } : { name : string }) {

  // const [value, setValue] = useState('');

  function sendForm(e: any) {
    e.preventDefault();
    console.log('sended')
  }

  function setMessage(e: any) {
    e.preventDefault();
    // e.target.message.value
    console.log('sended')
  }


  return (
      <div className="msger">
        <div className="msger-header">
          <h2 className="msger-header-title">
            Asistant
          </h2>
          <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
          </div>
        </div>

        <ul className="msger-chat list-reset">
          <li className="msg left-msg">
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Asistant</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </li>

          <li className="msg right-msg">
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{ name }</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </li>
        </ul>

        <form onChange={setMessage} onSubmit={sendForm} className="msger-form">
          <input type="text" name='message' className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>
   );
}

export default Chat;
