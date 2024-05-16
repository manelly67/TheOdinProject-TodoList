import _ from 'lodash'; 
import './style.css';
import Icon from './image/icon.png'; 
import User from './classes/user.js';
import Project from './classes/project.js';
import Task from './classes/task.js';
import defaultData from './deafultData.js';
import printUser from './components/printing.js';
import printProList from './components/printProject.js';
import clearContainers from './components/clearContainers.js';
import createContainer from './components/createContainer.js';
import newProject from './components/newProject.js';
import prepareForTask from './components/preAddTask.js';
import todayTasks from './components/todayTasks.js';
import weekTasks from './components/weekTasks.js';

function component() {

    
    const element = document.createElement('div');
    
    const projectContainer = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectSide = document.createElement('div');
    const projectTasks = document.createElement('div');
    const divNewsButtons = document.createElement('div');
    const newProjectButton = document.createElement('button');
    const newTaskButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const weekButton = document.createElement('button');


    newProjectButton.textContent = "NEW Project";
    newTaskButton.textContent = "NEW Task";
    todayButton.textContent = "TODAY";
    weekButton.textContent = "THIS WEEK";

    /* newProjectButton */
    newProjectButton.addEventListener("click", () => {
      clearContainers('.tasks')
    });
    newProjectButton.addEventListener("click", () => {
      clearContainers('.formBox')
    });
    newProjectButton.addEventListener("click", () => {
      createContainer('tasks','showFormContainer')
    });
    newProjectButton.addEventListener('click', () => {
      newProject(Project,Task)
    });

    /* newTaskButton */
    newTaskButton.addEventListener("click", () => {
      clearContainers('.tasks')
    });
    newTaskButton.addEventListener("click", () => {
      clearContainers('.formBox')
    });
    newTaskButton.addEventListener("click", () => {
      createContainer('tasks','showFormContainer')
    });
    newTaskButton.addEventListener('click', () => {
      prepareForTask(Project,Task)
    });

    /* todayButton */

    todayButton.addEventListener("click", () => {
      clearContainers('.tasks')
    });
    todayButton.addEventListener("click", () => {
      clearContainers('.formBox')
    });
    todayButton.addEventListener("click", () => {
      createContainer('tasks','showFormContainer')
    });
    todayButton.addEventListener('click', () => {
      todayTasks(Project,Task)
    });

    /* weekButton */

    weekButton.addEventListener("click", () => {
      clearContainers('.tasks')
    });
    weekButton.addEventListener("click", () => {
      clearContainers('.formBox')
    });
    weekButton.addEventListener("click", () => {
      createContainer('tasks','showFormContainer')
    });
    weekButton.addEventListener('click', () => {
      weekTasks(Project,Task)
    });

    projectContainer.classList.add('container');
    projectHeader.classList.add('header');
    projectSide.classList.add('sidebar');
    projectTasks.classList.add('tasks');
    divNewsButtons.classList.add('newsButtons');
    newProjectButton.classList.add('btn');
    newTaskButton.classList.add('btn');
    todayButton.classList.add('btn4');
    weekButton.classList.add('btn4');


/* lee la imagen */
const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add('imagen');
/* imprime el usuario en el encabezado */
const user = new User ('@MyUser',myIcon); 
printUser(projectHeader, user);


/* En caso de no existir datos del usuario imprimir la data default */
let arrayProjects = [];
let projectList = JSON.parse(localStorage.getItem("projects"));

if (projectList !== null ) {
  
arrayProjects = projectList;

}else{
 /* lee una data default escrita en sintaxis json y la envia a local storage*/
const defaultProj = defaultData();
localStorage.setItem("defaultProj", JSON.stringify(defaultProj));
console.log(JSON.parse(localStorage.getItem("defaultProj")));

/*lee la lista de proyectos crea una variable con todo el contenido del json y otra variable con el array de los proyectos*/
projectList = JSON.parse(localStorage.getItem("defaultProj"));
arrayProjects = projectList.defaultData;
console.log (arrayProjects);
console.log (arrayProjects.length);

}

printProList(projectSide,arrayProjects,projectTasks);



    element.appendChild(projectContainer);
    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(projectSide);
    projectContainer.appendChild(projectTasks);
    projectHeader.appendChild(divNewsButtons);
    divNewsButtons.appendChild(newProjectButton);
    divNewsButtons.appendChild(newTaskButton);
    divNewsButtons.appendChild(todayButton);
    divNewsButtons.appendChild(weekButton);

    return element;

    
  }
  
 document.body.appendChild(component()); 

  
    
