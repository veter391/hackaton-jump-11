import { Teacher } from '../models/question/teacher.model'
import '../styles/form.css'
import { useForm } from 'react-hook-form'

export function Form({ onSumit}: { onSumit : (teacher: Teacher) => void}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data: any ) => {
    // new object for get data to chat
    const newData = {
      name: data.teacher,
      // lastName: data.,
    //   teacherType: data.,
    //   locality: data.,
    //   districtCode: data.,
    //   neighborhoodCode: data.,
    //   studentsAmount: data.,
    //   averageStudentsAge: data.
    }
    console.log(data, newData)
    onSumit(data)
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2> Introduce tus datos </h2>
        <input className="form__input" type="text" name="classTopic" placeholder="Apellido de profesor" />
        <input className="form__input" type="text" name="classTopic" placeholder="Tipo de Profesor" />
        <input className="form__input" type="text" name="classTopic" placeholder="Asignatura que imparte" />
        
        <input className="form__input" type="text" placeholder="Nombre del profesor"
          {...register('teacher', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        <input
          className="form__input" type="text" placeholder="Nombre del colegio"
          {...register('school', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />

        {errors.school?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del colegio</p>}
        {errors.school?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        {errors.teacher?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del profesor</p>}
        {errors.teacher?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        <input className="form__input" type="text" name="barrio" placeholder="Barrio" />
        <input className="form__input" type="text" name="barrio" placeholder="Codigo del barrio" />
        <input className="form__input" type="text" name="classTopic" placeholder="Asignatura que imparte"/>
        <input className="form__input" type="text" name="numberStudents" placeholder="Edad de alumnos"/>
        <input className="form__input" type="text" name="numberStudents" placeholder="Numero de alumnos" />

        <button className="form__button">continuar</button>
      </form>
    </section>
  )
}
