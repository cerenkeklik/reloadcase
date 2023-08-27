import '../../assets/css/Section2.css'
import '../../assets/css/General.css'
import Arrow from '../../assets/icons/arrow.svg';

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-top">
        <div className="section2-title">
          <div className='color-white'>Start chatting with</div>
          <div className='color-b6fbfd'>AI.</div>
        </div>
        <div className='section2-desc'>
          Chat about any topic with ChatGPT in any time. It can be your friend,
          tutor or therapist.
        </div>
        <div className='section2-top-nav'>
            <div className='color-b6fbfd'>Let’s start chat</div>
            <img src={Arrow} alt='arrow' width={50}  />
        </div>
      </div>
      <div className="section2-bottom">alt frame</div>
    </div>
  )
}
export default Section2
