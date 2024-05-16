import { isBefore, isAfter, isEqual } from 'date-fns';
import { add, sub, differenceInCalendarYears } from 'date-fns';
import closeAndRefresh from './closeAndRefresh.js';
import printSearch from './printSearch.js';


export default

function weekTasks(arg1,arg2) {

    let arrayProjects = new arg1(0,'',[],'');
    let arrayForToday = [];
    let arrayProjectsLength = 0;
    const today = new Date();
    const futureDate = add(today, { weeks: 1 });
    
    const utcDate = new Date("2024-05-14");
    console.log(today);
    console.log(futureDate);
    console.log(utcDate);
   
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
    let after = false;
    let before = false;
    let equal = false;
    let checkWeek = false;
    
    for (let j = 0; j < arrayTasks.length; j++) {
    
        const dueDate =arrayTasks[j]["dueDate"];
        console.log(dueDate);
        
            after = isAfter(dueDate, today);
            console.log(after);
            before = isBefore(dueDate, futureDate);
            console.log(before);
            if ( after == true && before == true){
            checkWeek = true;
            }else{
            checkWeek = false;    
            }
   
        console.log(checkWeek);

        if(checkWeek===true){
        arrayForToday.push(arrayProjects[i]["tasks"][j]);
        }
    }
 }
 console.log(arrayForToday);
    if (arrayForToday.length == 0){
        const noTaskMessage = document.createElement('p');
        noTaskMessage.innerText = 'there are no tasks assigned for this week';
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