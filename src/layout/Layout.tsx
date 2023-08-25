import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <div className="d-flex flex-column min-vh-100">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
