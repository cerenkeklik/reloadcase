import '../../assets/css/General.css'
import '../../assets/css/Section1.css'
import Section1Component from './Section1Frame'

const Section1 = () => {
  return (
    <div className="section1-container">
     <Section1Component isFrame={false} />
    </div>
  )
}
export default Section1
