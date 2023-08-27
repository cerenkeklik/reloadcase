import '../assets/css/General.css'
import '../assets/css/Footer.css'
import Logo from '../assets/Logo'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-desc">
            We would love to hear from you. Let’s work — together with Reload
          </div>
          <div className="footer-top-left-btn">Contact us</div>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-item">
            <div className="footer-top-right-item-title">Business requires</div>
            <div>
              <div className="footer-top-right-item-desc">
                hello@colstic.com
              </div>
              <div className="footer-top-right-item-desc">+27 123 456 789</div>
            </div>
          </div>

          <div className="footer-top-right-item">
            <div className="footer-top-right-item-title">Open positions</div>
            <div>
              <div className="footer-top-right-item-desc">
                Junior Graphic Design
              </div>
              <div className="footer-top-right-item-desc">Videography</div>
              <div className="footer-top-right-item-desc">Photography</div>
            </div>
          </div>

          <div className="footer-top-right-item">
            <div className="footer-top-right-item-title">London</div>
            <div>
              <div className="footer-top-right-item-desc">
                133A Rye lane London SE15 4BQ UK
              </div>
            </div>
          </div>

          <div className="footer-top-right-item">
            <div className="footer-top-right-item-title">Cape town</div>
            <div>
              <div className="footer-top-right-item-desc">
                14 Upper pepper street CBD, 8001 Cape Town
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <Logo />
        </div>
        <div className="footer-bottom-right">
          <div className="footer-bottom-right-item">DRIBBBLE</div>
          <div className="footer-bottom-right-item">INSTAGRAM</div>
          <div className="footer-bottom-right-item">LINKEDIN</div>
        </div>
      </div>
    </div>
  )
}
export default Footer
