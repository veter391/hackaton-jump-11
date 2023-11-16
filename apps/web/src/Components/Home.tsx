import "../styles/home.css";
import Education from "../assets/Education.png";
import { Form } from "./Form";
import { useState } from 'react';
import { Teacher } from "../models/question/teacher.model";
import TeacherContext from "./TeacherContext";

const Home = () => {

  const [teacher, setTeacher] = useState<Teacher>();

  return (
    <div style={{ padding: "30px", display: 'flex', flexDirection: 'row', flex: 1 }}>
      <div style={{ flex: 1 }}>
        <img src={Education} alt="Edu" id="Education" />{" "}
      </div>
      <div style={{ flex: 1}}>
        {teacher ? <TeacherContext teacher={teacher} /> : <Form onSumit={setTeacher} />}
      </div>
    </div>
  );
};

export default Home;
