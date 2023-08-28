import '../../assets/css/Section2.css'
import '../../assets/css/General.css'
import Arrow from '../../assets/icons/arrow.svg'
import ChatFrame from '../../assets/images/chatframe.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Section2 = () => {
  let nav = useNavigate()

  const [scrollOffset, setScrollOffset] = useState(
    document.documentElement.scrollTop
  )
  const [coordinates, setCoordinates] = useState({
    x: 75,
    y: 75,
    z: 75,
  })

  useEffect(() => {
    const handleScroll = () => {

      let offset = document.documentElement.scrollTop
      setScrollOffset(offset)
      setCoordinates({
        x: offset * -0.015,
        y: offset * -0.011,
        z: offset * -0.011,
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="section2-container">
      <div className="section2-top">
        <div className="section2-title">
          <div className="color-white">
            Start chatting with
            <span className="color-b6fbfd ps-3">AI.</span>
          </div>
        </div>
        <div className="section2-desc">
          Chat about any topic with ChatGPT in any time. It can be your friend,
          tutor or therapist.
        </div>
        <div className="section2-top-nav" onClick={() => nav('/chat')}>
          <div className="color-b6fbfd">Let’s start chat</div>
          <img src={Arrow} alt="arrow" width={50} />
        </div>
      </div>
      <div className="section2-bottom">
        <img
          src={ChatFrame}
          alt="chat-frame"
          className="w-100 h-100 section2-frame"
          style={{
            transform: `translate3d(${coordinates.x}px, ${coordinates.y}px, ${0}px)`,
          }}
        />
      </div>
    </div>
  )
}
export default Section2
