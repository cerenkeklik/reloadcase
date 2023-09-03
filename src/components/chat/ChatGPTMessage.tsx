import '../../assets/css/Chat.css'
import '../../assets/css/General.css'
import ProfilePicture from './ProfilePicture'
import classNames from 'classnames'

const Message = ({ sender, message }: { sender: string; message: string }) => {
  return (
    <div
      className={classNames('message-container', {
        'bg-1a1a1a': sender === 'ChatGPT',
      })}
    >
      <div className="pp">
        <ProfilePicture userFirstLetter={sender.charAt(0)} />
      </div>
      <div className="msg">
        <div
          className={classNames('msg-title', {
            'color-ffffff80': sender === 'User',
          })}
        >
          {sender}
        </div>
        <div className="msg-desc">{message}</div>
      </div>
    </div>
  )
}
export default Message
