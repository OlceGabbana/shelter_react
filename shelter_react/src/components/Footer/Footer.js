import './Footer.css';
import '../Wrap/Wrap.css';
import FooterBackground from '../../assets/img/footer-gradient-background.png';
import FooterPuppy from '../../assets/img/footer-puppy.png';
import IconEmail from '../../assets/img/footer-icons/icon-email.svg';
import IconPhone from '../../assets/img/footer-icons/icon-phone.svg';
import IconMarker from '../../assets/img/footer-icons/icon-marker.svg';

const Footer = () => {
  return (
    <footer style={{ backgroundImage: 'url(' + FooterBackground + ')' }}>
      <div class="footer-content wrap" id="contacts">
        <div class="footer-content__elem">
          <h3 class="header-3 header-3_white">For questions and suggestions</h3>
          <a class="img-text" href="mailto:email@shelter.com">
            <img src={IconEmail} alt="email" />
            <p>email@shelter.com</p>
          </a>
          <a class="img-text" href="tel:+136745677554">
            <img src={IconPhone} alt="phone" />
            <p>+13 674 567 75 54</p>
          </a>
        </div>
        <div class="footer-content__elem">
          <h3 class="header-3 header-3_white">We are waiting for your visit</h3>
          <a class="img-text" target="_blank"
            href="https://www.google.ru/maps/place/1+Central+St,+Boston,+MA+02109,+США/@42.3585519,-71.0573012,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370868bc2ce7b:0x82fa7db94f5fea9e!8m2!3d42.3585519!4d-71.0547263?entry=ttu">
            <img src={IconMarker} alt="marker" />
            <p>1 Central Street, Boston (entrance from the store)</p>
          </a>
          <a class="img-text" target="_blank"
            href="https://www.google.ru/maps/search/18+South+Park,+London/@51.4446502,-0.2385124,13z/data=!3m1!4b1?entry=ttu">
            <img src={IconMarker} alt="marker" />
            <p>18 South Park, London</p>
          </a>
        </div>
        <div class="footer-content__elem">
          <img src={FooterPuppy} alt="footer-puppy" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;