import { Teacher } from '../models/question/teacher.model'
import '../styles/form.css'
import { Button, TextField, Typography, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';

export function Form({ onSumit }: { onSumit: (teacher: Teacher) => void }) {

  const onPressGenerate = () => {
    // new object for get data to chat
    console.log('DEV: ', data)
    onSumit(data)
  }
  const [data, setData] = useState<any>({})

  const onInputChange = (e: any, key: string) => {
    const val = e.target.value
    let newData = { ...data, [key]: val}
    if (key == "teacherType") {
      const studentAges: any = {
        "infantil": "6",
        "primaria": "12",
        "eso": "16"
      }
      newData = { ...newData, "averageStudentsAge": studentAges[val] ?? "16"}
    }
    setData(newData)
  }

  return (
    <div>
      <div style={{ flex: 1, display: 'flex', padding: "30px", flexDirection: 'column', backgroundColor: 'white', borderRadius: 24, boxShadow: "5px 10px 10px 5px rgba(0,0,0,0.1)" }}>
        <Typography variant="h4" component="h4" fontWeight={"400"} color={"#1976d2"}>
          Introduce tus datos
        </Typography>
        <TextField style={{ marginTop: 20, }} onChange={(e) => onInputChange(e, "name")} id="outlined-basic" label="Nombre" variant="outlined" />
        <FormControl style={{ marginTop: 12 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.teacherType ?? "infantil"}
            label="Ciclo educativo"
            onChange={(e) => onInputChange(e, "teacherType")}
          >
            <MenuItem value={"infantil"}>Infantil</MenuItem>
            <MenuItem value={"primaria"}>Primaria</MenuItem>
            <MenuItem value={"eso"}>ESO</MenuItem>
          </Select>
        </FormControl>
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "locality")} id="outlined-basic" label="Localidad" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "districtCode")} id="outlined-basic" label="Nº distrito" variant="outlined" />
        <TextField style={{ marginTop: 12 }} onChange={(e) => onInputChange(e, "neighborhoodCode")} id="outlined-basic" label="Barrio" variant="outlined" />
        <TextField style={{ marginTop: 12, marginBottom: 40 }} onChange={(e) => onInputChange(e, "studentsAmount")} id="outlined-basic" label="Nº estudiantes" variant="outlined" />
        <Button onClick={onPressGenerate} variant="contained" style={{ height: 42 }}>Generar asistente</Button>
      </div>
    </div>
  )
}
