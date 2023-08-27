import Section1 from '../components/homepage/Section1'
import Section2 from '../components/homepage/Section2'
import Section3 from '../components/homepage/Section3'
import Section4 from '../components/homepage/Section4'
import Layout from '../layout/Layout'

const Homepage = () => {
  return (
    <Layout>
      <div className="homepage-container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </Layout>
  )
}

export default Homepage
