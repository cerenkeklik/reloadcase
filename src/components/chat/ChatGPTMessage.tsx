import '../../assets/css/Chat.css'
import '../../assets/css/General.css'
import ProfilePicture from './ProfilePicture'
import classNames from 'classnames'

const Message = ({ sender, message }: { sender: string; message: string }) => {
  return (
    <div className="message-container">
      <div className="pp">
        <ProfilePicture userFirstLetter={sender.charAt(0)} />
      </div>
      <div className="msg">
        <div
          className={classNames('msg-title', {
            'color-b6c1ff': sender === 'Me',
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
