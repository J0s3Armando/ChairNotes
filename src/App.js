import './App.css';
import  ButtonCreate from './components/ButtonCreate';
import Card from "./components/Card";

function App() 
{
  const tasks = localStorage.getItem("tasks")==null? []: JSON.parse(localStorage.getItem("tasks")) ;
  console.log( tasks );
  
  return (
    <div className="container">
      <header className="mt-5 columns is-align-items-center">
        <div className="column is-6">
          <h1 className="title is-5">Lista de tareas Pendientes</h1>
        </div>
        <div className="column is-6 is-flex is-justify-content-center">
          <ButtonCreate/>
        </div>
      </header>
      <section className="tasks-container columns is-multiline">
        {
          tasks.map( (task, index)=>{
            return  <div className="column is-12-mobile is-4-tablet is-3-desktop">
                      <Card key={index} pending={ task } />
                    </div>
          })
        }
      </section>
    </div>
  );
}

export default App;
