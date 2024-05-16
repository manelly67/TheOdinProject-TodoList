import clearContainers from './clearContainers.js';
import createContainer from './createContainer.js';
import printProList from './printProject.js';


export default function closeAndRefresh(arg) {

    /* the arg is the array with the projects */
      clearContainers('.formBox'); 
      createContainer('tasks','projectTasks');
        clearContainers('.sidebarPro');
        let projectSide = document.querySelector('.sidebar');
        console.log(projectSide);
        let projectTasks = document.querySelector('.tasks');
        console.log(projectTasks);
        let arrayProjects = arg;
        console.log(arrayProjects);
        /*  llamar de nuevo a la funcion de printProject  */
        printProList(projectSide,arrayProjects,projectTasks);


    }