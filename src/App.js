import { faLaughWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './App.css';
import  ButtonCreate from './components/ButtonCreate';
import Card from "./components/Card";
import logo from "./logo.png";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable} from 'array-move';


function App() 
{

  const [ tasks, setTask ] =  useState( JSON.parse(localStorage.getItem("tasks"))==null? []: JSON.parse(localStorage.getItem("tasks")) );
  const createTask=(data)=>{
    const tasks = JSON.parse(localStorage.getItem("tasks"))==null? []: JSON.parse(localStorage.getItem("tasks")) ;
    tasks.push( data );
    saveTask(tasks);
  }

  const saveTask=(tasks)=>
  {
    localStorage.setItem("tasks", JSON.stringify(tasks) );
    setTask(JSON.parse(localStorage.getItem("tasks")));
  }

  const Delete = (index)=>
  {
    const task = JSON.parse( localStorage.getItem("tasks") );
    task.splice( index, 1 );
    saveTask(task);
  }

  //sortable

  const onShortEnd =({oldIndex, newIndex})=>
  {
    if(oldIndex===newIndex)
    { 
      return;
    }
    const newTaskList = arrayMoveImmutable(tasks, oldIndex,newIndex);
    saveTask(newTaskList);
  }

  const SortableItem = SortableElement( ({task,position})=> 
  {
    return (<div className="column is-12-mobile is-4-tablet is-3-desktop">
      <Card pending={ task } delete={()=>Delete(position)} />
    </div>);
  }
  );
  
  const SortableList = SortableContainer(({items})=>{
    return (
      <div className="tasks-container columns is-multiline">
        {
          items.map((task, index)=>
            <SortableItem task={task} index={index} position={index} key={index}/>
          )}
      </div> 
    );
  });
  
  
  return (
    <div className="container">
      <header className="m-5 is-flex is-justify-content-space-between is-align-items-center">
        <div className="is-flex is-align-items-center">
          <div className="mr-2">
            <img src={logo} width="15" alt="logo" />
          </div>
          <h1 className="title is-5">
            <span className="is-hidden-mobile">Mis Tareas </span>Pendientes
          </h1>
        </div>
        <div className="is-flex is-justify-content-end">
          <ButtonCreate create={createTask} />
        </div>
      </header>
      <div className="m-5">
        { tasks.length>0?                  
            <SortableList items={tasks} onSortEnd={onShortEnd} axis="xy" />                                                           
            : <div className="column mt-4"> 
                  <h4 className="subtitle is-4 has-text-centered"> <FontAwesomeIcon icon={faLaughWink} className="has-text-link" /> ¡Que bien! parece que no tienes pendientes :3 </h4> 
              </div>
        }
      </div>
    </div>
  );
}

export default App;
