import '../../assets/css/General.css'
import '../../assets/css/Section1.css'
import Eclipse from './Eclipse'

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="section1-top">
        <div className="section1-top-textgroup">
          <div className="section1-top-title">
            <div className="color-b6fbfd">AI</div>
            <div className="color-white">Chatbot</div>
          </div>
          <div className="section1-top-desc">
            We’ve trained a model called ChatGPT which interacts in a
            conversational way.
          </div>
        </div>
        <button className="section1-top-btn">Continue</button>
      </div>
      <div className="section1-bottom-container">
        <div className="content-wrapper">
          <Eclipse marginLeft={0} marginTop={0} />
          <Eclipse marginLeft={-400} marginTop={-2950} />
          <Eclipse marginLeft={+400} marginTop={-2950} />
        </div>
      </div>
    </div>
  )
}
export default Section1
