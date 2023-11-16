import '../styles/form.css'
import { useForm, FieldValues } from 'react-hook-form'

export function Form({ setViewChat }: { setViewChat : any}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data: FieldValues ) => {
    setViewChat( true )
    console.log(data)
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1> Introduce tus datos </h1>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre del colegio"
          {...register('school', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />
        {errors.school?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del colegio</p>}
        {errors.school?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        <input
          className="form__input"
          type="text"
          placeholder="Nombre del profesor"
          {...register('teacher', {
            required: true,
            pattern: /^[a-zA-ZÁ-ú\s]+$/i,
          })}
        />
        {errors.teacher?.type === 'required' && <p style={{color: 'red'}}> Se require nombre del profesor</p>}
        {errors.teacher?.type === 'pattern' && <p style={{color: 'red'}}> El nombre no es válido</p>}
        <input className="form__input" type="text" name="barrio" placeholder="Barrio" />
        <input
          className="form__input"
          type="text"
          name="classTopic"
          placeholder="Asignatura que imparte"
        />
        <input
          className="form__input"
          type="text"
          name="numberStudents"
          placeholder="Numero de alumnos"
        />
        <button className="form__button">continuar</button>
      </form>
    </section>
  )
}
