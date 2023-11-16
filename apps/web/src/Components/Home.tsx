import "../styles/home.css";
import Education from "../assets/Education.png";
import { Form } from "./Form";
import { useState } from 'react';
import { Teacher } from "../models/question/teacher.model";
import TeacherContext from "./TeacherContext";

const Home = () => {

  const [teacher, setTeacher] = useState<Teacher>();

  return (
    <div className="home-container">
      <div className="home-elements">
        <img src={Education} alt="Edu" id="Education" />{" "}
      </div>

      <div className="home-content">
        {teacher ? <TeacherContext teacher={teacher} /> : <Form onSumit={setTeacher}/>}
      </div>

    </div>
  );
};

export default Home;
