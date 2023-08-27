import Eclipse from "./Eclipse"

const Section1Frame = () => {
    return(
        <>
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
          <Eclipse marginLeft={50} marginTop={0} border={true} />
          <Eclipse marginLeft={-350} marginTop={-2960} border={false} />
          <Eclipse marginLeft={+20} marginTop={-3050} border={true} />
        </div>
      </div>
        </>
    )
}
export default Section1Frame;