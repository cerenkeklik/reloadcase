import '../../assets/css/Chat.css'
import '../../assets/css/General.css'
import Section1Frame from '../homepage/Section1Frame'
import Arrow from '../../assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'

const LeftChat = () => {
  let nav = useNavigate()

  return (
    <div className="left-chat-container">
      <div className="left-chat-header" onClick={() => nav('/')}>
        <img
          src={Arrow}
          alt="back"
          style={{ transform: 'scaleX(-1)', cursor: 'pointer' }}
        />
        <div className="header-title cursor-pointer">Back</div>
      </div>
      <div className="left-chat-section1frame">
        <Section1Frame isFrame={true} />
      </div>
    </div>
  )
}
export default LeftChat
