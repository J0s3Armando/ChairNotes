import { faCheck, faSmileBeam, faSurprise } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props)
{
    const { title, description, isImportant } = props.pending;
    const colors = (isImportant==="true")? "has-text-warning-dark": "has-text-danger";
    const message =(isImportant==="true")? "Importante": "Urgente";
    return(
        <div className="card">
            <div className="card-content">
                <div className="mb-3">
                    <h3 className="title is-6">{title}</h3>
                </div>
                <div className="card-text-content is-flex is-align-items-center">
                    <p>{description}</p>
                </div>
                <div className="mt-3 is-flex is-justify-content-space-between is-align-items-center">
                    <span className={"is-size-7 " +colors} title={message}>
                        <FontAwesomeIcon icon={ message==="Importante"? faSmileBeam: faSurprise} /> {message}
                    </span>
                    <button title="¡Ya lo terminé!" className="button is-white is-small" onClick={()=>props.delete()} >
                        <span className="icon is-small has-text-link">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}