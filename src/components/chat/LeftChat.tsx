import '../../assets/css/Chat.css'
import '../../assets/css/General.css'
import Section1Frame from '../homepage/Section1Frame'
import Arrow from "../../assets/icons/arrow.svg";

const LeftChat = () => {
  return (
    <div className="left-chat-container">
      <div className='left-chat-header'>
        <img src={Arrow} alt='back' style={{transform: "scaleX(-1)", cursor: "pointer"}} />
        <div className='header-title cursor-pointer'>Back</div>
      </div>
      <div className="left-chat-section1frame">
        <Section1Frame />
      </div>
    </div>
  )
}
export default LeftChat
