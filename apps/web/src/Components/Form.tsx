import "../styles/form.css";

export function Form() {
  const handleSubmit = (event : any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    const results = JSON.stringify(formJSON);

    console.log(results);
    event.target.reset();
  };
  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" name="school" placeholder="Nombre del colegio" />
        <input className="input" type="text" name="teacher" placeholder="Nombre del profesor" />
        <input className="input" type="text" name="district" placeholder="Barrio y distrito" />
        <input className="input"
          type="text"
          name="classTopic"
          placeholder="asignatura que imparte"
        />
        <input className="input"
          type="text"
          name="numberStudents"
          placeholder="Numero de alumnos"
        />
        <button className="btn button">continuar</button>
      </form>
    </section>
  );
}
