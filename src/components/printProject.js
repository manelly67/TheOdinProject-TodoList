import toggleDoneUndone from './settingComplete';
import deleteObjects from './deleteObjects.js';
import sendDataToLocal from './sendDataToLocal.js';


export default

function printProList(arg1, arg2, arg3) {
/* el arg1 es el div projectSide - el arg2 es el arrayProjects obtenido de leer el localstorage - el arg 3 es el div projectTasks*/

const projectTasks = arg3;

console.log('prueba printProList');

const projectSideBar = document.createElement('div');
projectSideBar.classList.add('sidebarPro');

arg1.appendChild(projectSideBar);

        console.log(arg2.length);  
    
        /* imprime el array de los proyectos */

        for (let i = 0; i < arg2.length; i++) {

            const currentProject = arg2[i];

            console.log(currentProject);
            console.log(currentProject.title);

            const createProject = document.createElement('div');
            const showTitle = document.createElement('p');
            const subSide = document.createElement('div');
            const showId = document.createElement('p');
            const showTasks = document.createElement('button');
            const taskEachProject = document.createElement('div');
            const intermediateDiv = document.createElement('div');


            createProject.classList.add('card');
            createProject.setAttribute('data', i);
            showTitle.classList.add('proTitle');
            subSide.classList.add('subSideBar');
            showId.classList.add('proId');
            showTasks.textContent = "SHOW TASKS";
            showTasks.classList.add('btn');
            showTasks.setAttribute('data', currentProject.id);
            showTasks.setAttribute('id', 'btnTask'+currentProject.id);
            taskEachProject.setAttribute('id', 'project'+currentProject.id);
            taskEachProject.classList.add('subtask'); 
            taskEachProject.classList.add('ocultar');
            intermediateDiv.classList.add('tasksContainer');
            const target = '#project'+currentProject.id;
            console.log(target);

            
            showTasks.addEventListener('click', () => {
              openDiv(target)
            })

            const headerTasks = document.createElement('div');
            headerTasks.classList.add('headerTask');
            const headerTaskTest = document.createElement('p');
            headerTaskTest.innerText = 'PROJECT '+currentProject.id+'  '+currentProject.title;
            const hideTasks = document.createElement('button');
            hideTasks.textContent = "HIDE TASKS";
            hideTasks.classList.add('hideButton');
            hideTasks.classList.add('btn');

            hideTasks.addEventListener('click', () => {
              closeDiv(target)
            })


            const arrayTasks = currentProject.tasks;
            console.log(arrayTasks);

            /* imprime el array de las tareas */
                    for (let i = 0; i < arrayTasks.length; i++) {
 
                    
                    const eachTask = document.createElement('div');
                    const taskTitle = document.createElement('p');
                    const taskDescription = document.createElement('p');
                    const taskDueDate = document.createElement('p');
                    const taskPriority = document.createElement('p');
                    const taskNotes = document.createElement('p');
                    const checklistDiv = document.createElement('div');
                    const labelForChecklist = document.createElement('label');
                    const checklistInput = document.createElement('input');
                    const divDeleteButton = document.createElement('div');
                    const deleteButton = document.createElement('button');

                    const dueDate =arrayTasks[i]["dueDate"];
                    console.log(dueDate);
                    const currentDueDate = new Date(dueDate);
                    const fechaformateada = currentDueDate.toLocaleDateString('es-ec', {
                      timeZone: 'UTC',
                    });
                    console.log(fechaformateada);
                    const today = new Date();
                    console.log(today);
 
                    eachTask.classList.add('eachTask');
              
                    taskTitle.innerText = 'Task:  '+arrayTasks[i]["title"];
                    taskDescription.innerText = 'Details:  '+arrayTasks[i]["description"];
                    taskDueDate.innerText = 'Due Date:  '+fechaformateada;
                    taskPriority.innerText = 'Priority: '+arrayTasks[i]["priority"];
                    taskNotes.innerText = 'Additional notes: '+arrayTasks[i]["notes"];

                    divDeleteButton.classList.add('divDeleteButton');
                    deleteButton.textContent = "DELETE";
                    deleteButton.setAttribute('data', currentProject.id+'x'+i);
                    deleteButton.classList.add('btn3');
                    
                    labelForChecklist.innerText ='DONE';
                    labelForChecklist.setAttribute('for','proj'+currentProject.id+'task'+i);
                    checklistInput.setAttribute('id','proj'+currentProject.id+'task'+i);
                    checklistInput.setAttribute('name','checklist');
                    checklistInput.setAttribute('type','checkbox');
                    checklistInput.setAttribute('value',arrayTasks[i]["checklist"]);
                    
                    
                   if (arrayTasks[i]["checklist"] === 'true'){
                      checklistInput.setAttribute('checked',true);
                   }
                   let checklist='';
                      checklistInput.addEventListener('change', () => {
                        checklist = toggleDoneUndone(checklistInput);
                        arg2 = update(currentProject,arrayTasks,checklist);
                        sendDataToLocal('projects',arg2);
                      });
                    
                      function update(currentProject,arrayTasks,checklist) {
                        console.log(checklist);
                        arrayTasks[i]["checklist"] = checklist;

                        console.log(arrayTasks);
                        console.log(currentProject);
                        console.log(arg2);
                      return arg2; 
                      }
                    
                      deleteButton.addEventListener('click', () => {
                        
                        deleteObjects(deleteButton,arg2);  
                        
                      });

                    intermediateDiv.appendChild(eachTask);
                    eachTask.appendChild(taskTitle);
                    eachTask.appendChild(taskDescription);
                    eachTask.appendChild(taskDueDate);
                    eachTask.appendChild(taskPriority);
                    eachTask.appendChild(taskNotes);
                    eachTask.appendChild(checklistDiv);
                    checklistDiv.appendChild(labelForChecklist);
                    checklistDiv.appendChild(checklistInput);
                    eachTask.appendChild(divDeleteButton);
                    divDeleteButton.appendChild(deleteButton)

                    };


            showTitle.innerText = currentProject.title;
            showId.innerText = "Project id: " +currentProject.id;
            
           
            
            projectSideBar.appendChild(createProject);
            createProject.appendChild(showTitle);
            createProject.appendChild(subSide);
            subSide.appendChild(showId);
            subSide.appendChild(showTasks);
            projectTasks.appendChild(taskEachProject);
            taskEachProject.appendChild(headerTasks);
            headerTasks.appendChild(headerTaskTest);
            taskEachProject.appendChild(intermediateDiv);
            taskEachProject.appendChild(hideTasks);


             
               
               function openDiv(target) { 
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

               function closeDiv(target) { 
                const div = document.querySelector(target);
                div.classList.remove('mostrar');
                div.classList.add('ocultar'); 
             console.log(target);
             console.log(div);
               }
               
           



        }

    return arg1;    

 
  };
  
