import { useState } from 'react'
import Logo from '../../assets/Logo'
import '../../assets/css/Chat.css'
import Arrow from '../../assets/icons/arrowshort.svg'
import Message from './ChatGPTMessage'
import { GptTurbo } from '../../utils/api/GptTurbo'

const RightChat = () => {
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: 'Hello, how can I help you?',
      sender: 'ChatGPT',
    },
  ])

  const sendMessage = () => {
    if (input !== '') {
      let newMsg = {
        message: input,
        sender: 'User',
      }
      let allmsg = [ ...messages.reverse(), newMsg]
      setMessages(allmsg.reverse())
      setTyping(true)
      setInput('')
      sendingGPT(allmsg)
    }
  }

  const sendingGPT = async (newMessages: any) => {
    let apiMessages = newMessages.map(
      (item: { sender: string; message: string }) => {
        return {
          role: item.sender === 'ChatGPT' ? 'assistant' : 'user',
          content: item.message,
        }
      }
    )

    console.log(apiMessages, "msg");

    let apiBody: any = {
      model: 'gpt-3.5-turbo',
      messages: [
        ...apiMessages.reverse(),
        {
          role: 'system',
          content: 'content',
        }
        ,
      ],
    }
    console.log(apiBody)
    GptTurbo(apiBody).then((res) => {
      console.log(res, 'api res')
      setMessages([
        {
          message: res?.choices?.[0].message.content,
          sender: 'ChatGPT',
        },
        ...newMessages,
        
      ], )
      setTyping(false)
    })
  }

  return (
    <div className="right-chat-container">
      <div className="right-chat-logo">
        <Logo />
      </div>
      <div className="right-chat-msg-container">
        <div className="messages">
          {messages.map((msg: any, i: number) => {
            return <Message key={i} sender={msg.sender} message={msg.message} />
          })}
        </div>
        <div className="buttonIn">
          <input
            disabled={typing ? true : false}
            type="text"
            value={input}
            className="right-chat-input"
            placeholder={typing ? 'ChatGPT is typing...' : 'Message'}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} className="right-chat-enterbtn">
            <img src={Arrow} alt="send" width={22} height={22} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default RightChat
