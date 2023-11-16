import "../styles/home.css";
import Education from "../assets/Education.png";
import { Form } from "./Form";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-elements">
        <img src={Education} alt="Edu" id="Education" />{" "}
      </div>
      <Form />
    </div>
  );
};

export default Home;
