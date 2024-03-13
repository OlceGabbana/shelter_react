import './StartScreen.css';
import '../Wrap/Wrap.css';
import PuppyImg from '../../assets/img/start-screen-puppy.png'

const StartScreen = () => {
  return (
    <div class="not-only wrap">
      <div class="not-only__content">
        <h1>Not only people need a house</h1>
        <p>
          We offer to give a chance to a little and nice puppy with an
          extremely wide and open heart. He or she will love you more than
          anybody else in the world, you will see!
        </p>
        <div class="not-only__content-a">
          <a href="#our-pets" class="btn-primary">Make a friend</a>
        </div>
      </div>
      <div class="not-only__puppy">
        <img src={PuppyImg} alt="puppy" />
      </div>
    </div>
  )
}

export default StartScreen;