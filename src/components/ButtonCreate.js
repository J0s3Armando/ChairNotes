import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFlask, faGrinBeamSweat, faMehRollingEyes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function ButtonCreate(props)
{
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmitButton = (data, e)=>
    {
        props.create(data);
        e.target.reset();
        closeModal();
    }

    const showModal = ()=>
    {
        document.querySelector(".modal").classList.toggle('is-active');
    }

    const closeModal = ()=>{
        document.querySelector(".modal").classList.toggle('is-active')
    }

    return (
        <div>
            <button className="button is-link is-light" onClick={showModal}> 
                <FontAwesomeIcon icon={faPlus} className="mr-1"/> Nuevo pendiente
            </button>
            <div className="modal">
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content">
                            <h2 className="title is-5 has-text-centered">¿Qué debo hacer? <span className="has-text-warning-dark"> <FontAwesomeIcon icon={faGrinBeamSweat} /> </span> </h2>
                            <form onSubmit={ handleSubmit(onSubmitButton) } >
                                <div className="field">
                                    <label htmlFor="title" className="label">Título</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" autoComplete="off" type="text" {...register("title",{ required:true, maxLength:20 })} placeholder="Título del pendiente" id="title" maxLength="20"/>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faFlask} className="has-text-link" />
                                        </span>
                                        <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                    { errors.title && errors.title.type==="required" && 
                                        <small className="has-text-danger">
                                            <FontAwesomeIcon className="mr-1" icon={faGrinBeamSweat}/> El Título es requerido.
                                        </small> 
                                    }
                                    { errors.title && errors.title.type==="maxLength" && 
                                        <small className="has-text-danger">
                                            <FontAwesomeIcon className="mr-1" icon={faGrinBeamSweat}/> Máximo de 20 caracteres.
                                        </small> 
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="description" className="label">Descripción</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" autoComplete="off" {...register("description",{required:true, maxLength:70})} type="text" placeholder="Descripción" id="description" maxLength="70" />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faEdit} className="has-text-link" />
                                        </span>
                                        <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                    { errors.description && errors.description.type === "required" && 
                                        <small className="has-text-danger">
                                            <FontAwesomeIcon className="mr-1" icon={faGrinBeamSweat}/> La descripción es requerida.
                                        </small> 
                                    }
                                    { errors.description && errors.description.type === "maxLength" && 
                                        <small>
                                            <FontAwesomeIcon className="mr-1" icon={faGrinBeamSweat}/> Máximo de 70 caracteres.
                                        </small> 
                                    }
                                </div>
                                <div className="control">
                                    <label className="label">¿Es importante o urgente? <FontAwesomeIcon className="has-text-link" icon={faMehRollingEyes}/> </label>
                                    <div>
                                        <label className="radio" htmlFor="important">
                                            <input type="radio" {...register("isImportant",{ required:true , setValueAs:Boolean })} value={true} id="important" />
                                            <span className="ml-1">Importante</span>
                                        </label>
                                        <label className="radio" htmlFor="urgent">
                                            <input type="radio" {...register("isImportant", {required:true, setValueAs:Boolean})} value={false} id="urgent"  />
                                            <span className="ml-1">Urgente</span>
                                        </label>
                                    </div>
                                    { errors.isImportant && 
                                        <small className="has-text-danger">
                                            <FontAwesomeIcon className="mr-1" icon={faGrinBeamSweat}/> El nivel de importancia es requirido.
                                        </small> 
                                    }
                                </div>
                                <div className="is-flex is-justify-content-center mt-5">
                                    <button className="button is-link is-light" type="submit">
                                        <FontAwesomeIcon icon={faPlus} className="mr-1"/> Agregar
                                    </button>
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
            </div>
        </div>
    );
}