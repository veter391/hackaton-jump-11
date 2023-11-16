import '../styles/chat.scss'
import useChat from '../hooks/chat/use-chat'
import { useState } from 'react'
import { Teacher } from '../models/question/teacher.model'
import { Button, Input } from '@mui/material'

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
    <div className="msger"style={{background:'transparent', borderColor:'transparent', boxShadow: "none",  height:"80vh", overflow:'auto'}}>
      <ul className="msger-chat list-reset" style={{background:'transparent', borderColor:'transparent'}}>
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

      <form onChange={setMessage} onSubmit={sendForm} className="msger-form" style={{background:'transparent', borderColor:'transparent'}}>
        <Input
          disabled={isLoading}
          value={value}
          type="text"
          name="message"
          className="msger-input"
          placeholder="Introduce tu mensaje..."
          style={{background:'#ececec'}}
        />
        <Button type="submit"  className="msger-send-btn" variant='contained' style={{marginLeft: 20}}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default Chat
