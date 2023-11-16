import "../styles/home.css";
import Education from "../assets/Education.png";
import Logo from "../assets/logo.png";
import { Form } from "./Form";
import { useState } from 'react';
import { Teacher } from "../models/question/teacher.model";
import TeacherContext from "./TeacherContext";
import { Typography } from '@mui/material';

const Home = () => {

  const [teacher, setTeacher] = useState<Teacher>();

  return (
    <div style={{ padding: "30px", display: 'flex', flexDirection: 'row', flex: 1 }}>
      <div style={{ position: 'absolute', display:'flex', flexDirection:'row'}}>
        <img style={{ height: '42px' }} src={Logo} alt="logo" id="Sophia" />
        <Typography fontWeight={"600"} color={"#0015b3"}>
          .ia
        </Typography>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', paddingLeft: '20px' }}>
        <img style={{ alignSelf: 'center' }} src={Education} alt="Edu" id="Education" />
        <div style={{ marginTop: 30, }}>
          <Typography fontWeight={"300"}>
            ¡Bienvenido a <strong>"Sof.ia"</strong>, tu asistente virtual basado en <strong>IA</strong> para <strong>docentes!</strong> Completa nuestro formulario sencillo para <strong>revolucionar tu enseñanza</strong>. Accede a herramientas <strong>inteligentes y personalizadas que facilitarán tu labor docente</strong>. Emprende el camino hacia una educación más <strong>interactiva</strong>, <strong>eficiente</strong> e <strong>inclusiva</strong>. ¡Únete a nosotros y experimenta la <strong>innovación</strong> en la enseñanza!
          </Typography>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {teacher ? <TeacherContext teacher={teacher} /> : <Form onSumit={setTeacher} />}
      </div>
    </div>
  );
};

export default Home;
