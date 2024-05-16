import { isBefore, isAfter, isEqual } from 'date-fns';
import closeAndRefresh from './closeAndRefresh.js';
import printSearch from './printSearch.js';


export default

function todayTasks(arg1,arg2) {

    let arrayProjects = new arg1(0,'',[],'');
    let arrayForToday = [];
    let arrayProjectsLength = 0;
    const today = new Date();
    console.log(today);
   
    const projectList = JSON.parse(localStorage.getItem("projects"));

    const mensaje = document.createElement('p');
    
    /* inicio obtener del objeto json leido los datos principales necesarios */
        if (projectList !== null ) {
        arrayProjects = projectList;
        arrayProjectsLength = arrayProjects.length;
           
            if (arrayProjectsLength===undefined){
            arrayProjectsLength = 1;
            }
              
        }else{
        alert('You need to CREATE your own PROJECT first');
        mensaje.innerText = 'You need to CREATE your own PROJECT first \n  \n CLICK IN NEW PROJECT';
        }

    console.log(projectList);
    console.log(arrayProjects);
    console.log(arrayProjectsLength);

    const formContainer = document.querySelector('.tasks');
    const closeButton = document.createElement('button');
    const displayProjects = document.createElement('div');

 /* lee el array de los proyectos y las tareas y crea un array con las tareas que cumplen los criterios de la busqueda*/

 for (let i = 0; i < arrayProjectsLength; i++) {

    const currentProject = arrayProjects[i];
    console.log(currentProject);
    console.log(currentProject.title);
    const arrayTasks = currentProject.tasks;
    console.log(arrayTasks);
    
    for (let j = 0; j < arrayTasks.length; j++) {
    
        const dueDate =arrayTasks[j]["dueDate"];
        console.log(dueDate);
        const checkToday = isEqual(dueDate, today); 
        console.log(checkToday);

        if(checkToday===true){
        arrayForToday.push(arrayProjects[i]["tasks"][j]);
        }
    }
 }
 console.log(arrayForToday);
    if (arrayForToday.length == 0){
        const noTaskMessage = document.createElement('p');
        noTaskMessage.innerText = 'there are no tasks assigned for today';
        noTaskMessage.setAttribute('style','font-size:1.5rem; text-transform:uppercase;text-align: center;');
        displayProjects.appendChild(noTaskMessage);
    }else{
        printSearch(arrayForToday,displayProjects);
    }


    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      closeAndRefresh(arrayProjects)
    });
    
    formContainer.appendChild(closeButton);
    formContainer.appendChild(mensaje);
    formContainer.appendChild(displayProjects);

}