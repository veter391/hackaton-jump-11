import { Teacher } from '../models/question/teacher.model'
import '../styles/form.css'
import { useForm } from 'react-hook-form'

export function Form({ onSumit}: { onSumit : (teacher: Teacher) => void}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data : any) => {
    const { name, lastName, teacherType, locality, districtCode, neighborhoodCode, studentsAmount, averageStudentsAge } = data;
    // new object for get data to chat
    const newData = {
      name,
      lastName,
      teacherType,
      locality,
      districtCode,
      neighborhoodCode,
      studentsAmount,
      averageStudentsAge
    }
    console.log(data, newData)
    onSumit(data)
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2> Introduce tus datos </h2>
        {/* <input className="form__input" type="text" name="classTopic" placeholder="Apellido de profesor" />
        <input className="form__input" type="text" name="classTopic" placeholder="Tipo de Profesor" />
        <input className="form__input" type="text" name="classTopic" placeholder="Asignatura que imparte" /> */}
        
        <input className="form__input" type="text" placeholder="Nombre del profesor"
          {...register('name', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="Apellido del profesor"
          {...register('lastName', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="Tipo de profesor"
          {...register('teacherType', {
            // required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="Barrio"
          {...register('locality', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="Codigo de area"
          {...register('districtCode', {
            // required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />


        <input className="form__input" type="text" placeholder="neighborhoodCode"
          {...register('neighborhoodCode', {
            // required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="Cantidad de alumnos"
          {...register('studentsAmount', {
            // required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input className="form__input" type="text" placeholder="edad de alumnos"
          {...register('averageStudentsAge', {
            // required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        {/* <input
          className="form__input" type="text" placeholder="Nombre del colegio"
          {...register('school', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        /> */}

        {errors.school?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del colegio</p>}
        {errors.school?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        {errors.teacher?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del profesor</p>}
        {errors.teacher?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        {/* <input className="form__input" type="text" name="barrio" placeholder="Barrio" />
        <input className="form__input" type="text" name="barrio" placeholder="Codigo del barrio" />
        <input className="form__input" type="text" name="classTopic" placeholder="Asignatura que imparte"/>
        <input className="form__input" type="text" name="numberStudents" placeholder="Edad de alumnos"/>
        <input className="form__input" type="text" name="numberStudents" placeholder="Numero de alumnos" /> */}

        <button className="form__button">continuar</button>
      </form>
    </section>
  )
}
