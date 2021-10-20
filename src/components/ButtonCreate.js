import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFlask, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function ButtonCreate()
{
    const {register, handleSubmit} = useForm();

    const onSubmitButton = (data, e)=>
    {
        const tasks = JSON.parse(localStorage.getItem("tasks"))==null? []: JSON.parse(localStorage.getItem("tasks")) ;
        tasks.push( data );
        localStorage.setItem("tasks", JSON.stringify(tasks) );
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
                <FontAwesomeIcon icon={faPlus} className="mr-1"/> New Task
            </button>
            <div className="modal">
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content">
                            <h2 className="title is-5">Nuevo Pendiente</h2>
                            <form onSubmit={ handleSubmit(onSubmitButton) } >
                                <div className="field">
                                    <label className="label">Tarea</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" {...register("title",{ required:true, maxLength:20 })} placeholder="Título de la tarea" maxLength="20"/>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faFlask} className="has-text-link" />
                                        </span>
                                        <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Descripción</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" {...register("description",{required:true, maxLength:50})} type="text" placeholder="Descripción" maxLength="50" />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faEdit} className="has-text-link" />
                                        </span>
                                        <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="control">
                                    <label className="label">¿Es importante o urgente?</label>
                                    <label className="radio" for="important">
                                        <input type="radio" {...register("isImportant",{ required:true , setValueAs:Boolean })} value={true} id="important" />
                                        <span className="ml-1">Importante</span>
                                    </label>
                                    <label className="radio" for="urgent">
                                        <input type="radio" {...register("isImportant", {required:true, setValueAs:Boolean})} value={false} id="urgent"  />
                                        <span className="ml-1">Urgente</span>
                                    </label>
                                </div>
                                <div className="is-flex is-justify-content-center mt-3">
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