import { Teacher } from '../models/question/teacher.model'
import '../styles/form.css'
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export function Form({ onSumit }: { onSumit: (teacher: Teacher) => void }) {

  const onPressGenerate = () => {
    // new object for get data to chat
    onSumit(data)
  }
  const [data, setData] = useState<any>({})

  const onInputChange = (e: any, key: string) => {
    setData({ ...data, [key]: e.target.value })
  }

  return (
    <div>
      <div style={{ flex: 1, display: 'flex', padding: "30px", flexDirection: 'column', backgroundColor: 'white', borderRadius: 24, boxShadow: "5px 10px 10px 5px rgba(0,0,0,0.1)" }}>
        <Typography variant="h4" component="h4" fontWeight={"400"} color={"#1976d2"}>
          Introduce tus datos
        </Typography>
        <TextField style={{ marginTop: 20, }} onChange={(e) => onInputChange(e, "name")} id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "teacherType")} id="outlined-basic" label="Tipo" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "locality")} id="outlined-basic" label="Localidad" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "districtCode")} id="outlined-basic" label="Nº distrito" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "neighborhoodCode")} id="outlined-basic" label="Barrio" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "studentsAmount")} id="outlined-basic" label="Nº estudiantes" variant="outlined" />
        <TextField style={{ marginTop: 12, marginBottom: 40 }} onChange={(e) => onInputChange(e, "averageStudentsAge")} id="outlined-basic" label="Edad media estudiantes" variant="outlined" />
        <Button onClick={onPressGenerate} variant="contained" style={{ height: 42}}>Generar asistente</Button>
      </div>
    </div>
  )
}
