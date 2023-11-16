import "../styles/home.css";
import Education from "../assets/Education.png";
import { Form } from "./Form";
import Chat from "./Chat";
import { useState } from 'react';

const Home = () => {

  const [viewChat, setViewChat] = useState(false);

  return (
    <div className="home-container">
      <div className="home-elements">
        <img src={Education} alt="Edu" id="Education" />{" "}
      </div>

      <div className="home-content">
        {viewChat ? <Chat name={'Jhon'} /> : <Form setViewChat={setViewChat} />}
      </div>

    </div>
  );
};

export default Home;
