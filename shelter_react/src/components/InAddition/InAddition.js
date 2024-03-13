import './InAddition.css';
import DonationDog from '../../assets/img/donation-dog.png';
import CreditCard from '../../assets/img/credit-card.svg';

const InAddition = () => {
  return (
    <div class="in-addition">
      <div class="in-addition-container wrap">
        <div class="in-addition-puppy">
          <img src={DonationDog} alt="donation-dog" />
        </div>
        <div class="in-addition__content">
          <h3 class="header-3 mb-20">You can also make a donation</h3>
          <p>Name of the bank / Type of bank account</p>
          <div class="in-addition__num-bank">
            <img src={CreditCard} alt="credit-card" />
            <p>8380 2880 8028 8791 7435</p>
          </div>
          <span>
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </span>
        </div>
      </div>
    </div>
  )
}

export default InAddition;