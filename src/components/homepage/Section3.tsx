import '../../assets/css/Section3.css'
import '../../assets/css/General.css'
import Section3ImageComponent from './Section3ImageComponent'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Section3 = () => {
  let nav = useNavigate()

  let items: { imageName: string; imageTitle: string }[] = [
    {
      imageName: 'hitachi',
      imageTitle: 'Hitachi Digital Brand Ecosystem.',
    },
    {
      imageName: 'commons',
      imageTitle: 'Commons.',
    },
    {
      imageName: 'strabe',
      imageTitle: 'Stråbe',
    },
    {
      imageName: 'fashion',
      imageTitle: 'Zvurçyk Fashion',
    },
    {
      imageName: 'aeizei',
      imageTitle: 'Aeizei',
    },
    {
      imageName: 'lancome',
      imageTitle: 'Lancome',
    },
    {
      imageName: 'aeizei',
      imageTitle: 'Aeizei',
    },
    {
      imageName: 'lancome',
      imageTitle: 'Lancome',
    },
  ]

  return (
    <div className="section3-container">
      <div className="section3-left">
        <div className="section3-left-top">
          <div className="section3-left-top-title">
            Chat with unique characters
          </div>
          <div className="section3-left-top-desc">
            You can chat many different characters for a few set of topics and
            interests.
          </div>
          <button
            className="section3-left-top-btn"
            onClick={() => nav('/chat')}
          >
            Lets start chat
          </button>
        </div>
        <div className="section3-left-bottom">
          <div className="section3-left-bottom-rect"></div>
        </div>
      </div>
      <div className="section3-right">
        {items.map((item, i: number) => {
          return (
            <Section3ImageComponent
              key={i}
              imageName={item.imageName}
              imageTitle={item.imageTitle}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Section3
