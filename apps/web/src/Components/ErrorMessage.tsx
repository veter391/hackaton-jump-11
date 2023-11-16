// styles
import '../styles/error.scss'
// error images

export default function ErrorMessage({ error } : { error : any}) {
  return (
    <div>
      {/* <img className={ styles['server-error-img'] } src={ errorPng } alt="error" /> */}
      <p>{ error.message }</p>
    </div>
  );
}

