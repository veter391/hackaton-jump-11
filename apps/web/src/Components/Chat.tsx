import '../styles/chat.scss'
import useChat from '../hooks/chat/use-chat'
import { useState } from 'react'
import { Teacher } from '../models/question/teacher.model'

type Props = {
  initialPrompt: string
  teacher: Teacher
}

function Chat({ initialPrompt, teacher }: Props) {
  const [value, setValue] = useState('')
  const { chats, addChat, isLoading } = useChat({
    initialChats: [{ message: initialPrompt, isAnswer: false, timestamp: new Date(Date.now()) }],
  })

  function sendForm(e: any) {
    e.preventDefault()

    if (value.length > 0) {
      addChat({ message: value, isAnswer: false })
    }

    setValue('')
  }

  function setMessage(e: any) {
    e.preventDefault()

    setValue(e.target.value)
  }

  return (
    <div className="msger">
      <div className="msger-header">
        <h2 className="msger-header-title">Asistente</h2>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
      </div>

      <ul className="msger-chat list-reset">
        {chats.map(({ message, isAnswer, sendAt }, id) => (
          <li className={`msg ${!isAnswer ? 'right' : 'left'}-msg`} key={id}>
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{isAnswer ? 'Asistente' : teacher.name}</div>
                <div className="msg-info-time">{sendAt}</div>
              </div>

              <div className="msg-text">{message}</div>
            </div>
          </li>
        ))}
      </ul>

      <form onChange={setMessage} onSubmit={sendForm} className="msger-form">
        <input
          disabled={isLoading}
          value={value}
          type="text"
          name="message"
          className="msger-input"
          placeholder="Enter your message..."
        />
        <button type="submit" className="msger-send-btn">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Chat
