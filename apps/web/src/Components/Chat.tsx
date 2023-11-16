import '../styles/chat.scss'
import useChat from '../hooks/chat/use-chat';
import { Teacher } from '../models/question/teacher.model';
import { useState } from 'react';

type Props = {
  teacher: Teacher;
  prompt: string;
}

function Chat({ teacher, prompt }: Props) {

  const [value, setValue] = useState('');

  const {chats, addChat} = useChat({initialChats: [{message: prompt, isAnswer: false, timestamp: new Date(Date.now())}]});

  function sendForm(e: any) {
    e.preventDefault();
    addChat({message: value, isAnswer: false})
    setValue('');
  }

  function setMessage(e: any) {
    e.preventDefault();
    // e.target.message.value
    setValue(e.target.value);
  }


  return (
      <div className="msger">
        <div className="msger-header">
          <h2 className="msger-header-title">
            Assistant
          </h2>
          <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
          </div>
        </div>

        <ul className="msger-chat list-reset">
          {
            chats.map(({ message, isAnswer, sendAt }, i) => (
              <li key={i} className={`msg ${isAnswer ? 'left' : 'right'}-msg`}>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{isAnswer ? 'Assistant' : teacher.name}</div>
                    <div className="msg-info-time">{sendAt}</div>
                  </div>
    
                  <div className="msg-text">
                    {message}
                  </div>
                </div>
              </li>
            ))
          }
        </ul>

        <form onChange={setMessage} onSubmit={sendForm} className="msger-form">
          <input value={value} type="text" name='message' className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>
   );
}

export default Chat;
