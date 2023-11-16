import '../styles/chat.scss'
import useChat from '../hooks/chat/use-chat';
import { Teacher, TeacherType } from '../models/question/teacher.model';
import { useState } from 'react';

const TEACHER = {
  name: 'string',
  lastName: 'string',
  teacherType: TeacherType.ESO,
  locality: 'string',
  districtCode: 'string',
  neighborhoodCode: 'string',
  studentsAmount: 1,
  averageStudentsAge: 1,
}

type Props = {
  teacher?: Teacher;
  name: string;
}

function Chat({ teacher, name }: Props) {

  const [value, setValue] = useState('');

  const {chats, addChat} = useChat({teacher: teacher ?? TEACHER});

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
            Asistant
          </h2>
          <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
          </div>
        </div>

        <ul className="msger-chat list-reset">
          {
            chats.map(({ message, isAnswer, sendAt }) => (
              <li className={`msg ${isAnswer ? 'right' : 'left'}-msg`}>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{isAnswer ? 'Assistant' : 'Me'}</div>
                    <div className="msg-info-time">{sendAt}</div>
                  </div>
    
                  <div className="msg-text">
                    {message}
                  </div>
                </div>
              </li>
            ))
          }
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
          <input value={value} type="text" name='message' className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>
   );
}

export default Chat;
