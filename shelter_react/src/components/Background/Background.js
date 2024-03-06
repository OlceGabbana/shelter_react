import "./Background.css";
import bgImage from "../../assets/img/start-screen-background.jpg";

const Background = () => {
  return (
    <div style={{ backgroundImage: 'url(' + bgImage + ')'}}></div>
  )
}

export default Background;