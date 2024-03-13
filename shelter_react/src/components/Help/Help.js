import './Help.css';
import '../Wrap/Wrap.css';
import Bowls from '../../assets/img/help/icon-bowls-and-cups.svg';
import Collars from '../../assets/img/help/icon-collars-leashes.svg';
import Medicines from '../../assets/img/help/icon-medicines.svg';
import Food from '../../assets/img/help/icon-pet-food.svg';
import Shampoos from '../../assets/img/help/icon-shampoos.svg';
import Sleeping from '../../assets/img/help/icon-sleeping-area.svg';
import Toys from '../../assets/img/help/icon-toys.svg';
import Transportation from '../../assets/img/help/icon-transportation.svg';
import Vitamins from '../../assets/img/help/icon-vitamins.svg';

const Help = () => {
  return (
    <div class="help wrap">
      <h3 class="header-3 header-3_center">How you can help our shelter</h3>
      <div class="help-list">
        <div class="help-list__card">
          <img src={Food} alt="icon-pet-food" />
          <p>Pet food</p>
        </div>
        <div class="help-list__card">
          <img src={Transportation} alt="icon-transportation" />
          <p>Transportation</p>
        </div>
        <div class="help-list__card">
          <img src={Toys} alt="icon-toys" />
          <p>Toys</p>
        </div>
        <div class="help-list__card">
          <img src={Bowls} alt="icon-bowls-and-cups" />
          <p>Bowls and cups</p>
        </div>
        <div class="help-list__card">
          <img src={Shampoos} alt="icon-shampoos" />
          <p>Shampoos</p>
        </div>
        <div class="help-list__card">
          <img src={Vitamins} alt="icon-vitamins" />
          <p>Vitamins</p>
        </div>
        <div class="help-list__card">
          <img src={Medicines} alt="icon-medicines" />
          <p>Medicines</p>
        </div>
        <div class="help-list__card">
          <img src={Collars} alt="icon-collars-leashes" />
          <p>Collars / leashes</p>
        </div>
        <div class="help-list__card">
          <img src={Sleeping} alt="icon-sleeping-area" />
          <p>Sleeping areas</p>
        </div>
      </div>
    </div>
  )
}

export default Help;