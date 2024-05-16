import sendDataToLocal from './sendDataToLocal.js';
import clearContainers from './clearContainers.js';
import createContainer from './createContainer.js';
import printProList from './printProject.js';

export default

function deleteObjects(arg1,arg2) {

    if (confirm("Are you sure you want to delete this task?") === true) {
    let arrayProjects = arg2;
    let arrayProjectsLength = arrayProjects.length;
    console.log (arrayProjects);

    let getIndex = arg1.getAttribute('data'); 

    let a = getIndex.indexOf('x');
    let b = a +1;
    let end = getIndex.length;
    
    let projectId = getIndex.slice(0,a);
    projectId = Number(projectId);
    
    let iOfArray = getIndex.slice(b,end);
    iOfArray = Number(iOfArray);
    
    let item = 0;
    for (let i = 0; i < arrayProjectsLength; i++) {
    
    item = arrayProjects[i]["id"];
    console.log(item);
    if (item == projectId){
        arrayProjects[i]["tasks"].pop(iOfArray);	

    } 
    console.log (arrayProjects);
 
    }
    
    console.log(getIndex.length);
    console.log(a);
    console.log(typeof a);
    console.log(end);
    console.log(projectId);
    console.log(typeof projectId);
    console.log(iOfArray);
    console.log(typeof iOfArray);

    sendDataToLocal('projects',arrayProjects);
    /* from here refresh the print of the project and tasks */
    clearContainers('.tasks');
    createContainer('tasks','projectTasks');
    clearContainers('.sidebarPro');
    let projectSide = document.querySelector('.sidebar');
    console.log(projectSide);
    let projectTasks = document.querySelector('.tasks');
    console.log(projectTasks);
    printProList(projectSide,arrayProjects,projectTasks);
    let target = '#project'+projectId;
    const openDiv = (target) =>{ 
        const div = document.querySelector(target);
        if ( div !== null){
          div.classList.remove('ocultar');
          div.classList.add('mostrar'); 
       console.log(target);
       console.log(div);
        }else{
          console.log('need refresh for updates');
        }               
       }
       openDiv(target);
    
}

                

}