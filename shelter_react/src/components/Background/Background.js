import "./Background.css";
import Header from "../Header/header";
import bgImage from "../../assets/img/start-screen-background.jpg";
import StartScreen from "../StartScreen/StartScreen";

const Background = () => {
  return (
    <div style={{ backgroundImage: 'url(' + bgImage + ')' }}>
      <Header />
      <StartScreen />
    </div>
  )
}

export default Background;