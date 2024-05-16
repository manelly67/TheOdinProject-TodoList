import toggleDoneUndone from './settingComplete';
import sendDataToLocal from './sendDataToLocal.js';
import askForContinue from './askForContinue.js';
import sortObjects from './sortObjects.js';

export default

function newTask(arg1,arg2,arg3,arg4) {
    /* arg1 is the Class Task - arg2 is the projectId - arg3 is the div container for the taskForm 
    arg4 es el arrayProjects */

let id = arg2;
console.log('prueba de funcion newTask');
console.log(id);
console.log(arg3);
let arrayProjects = arg4; 
console.log(arrayProjects);

/* crear forma para captar la nueva tarea */

const form = document.createElement('form');
const labelForTitle = document.createElement('label');
const titleInput = document.createElement('input');
const labelForDueDate = document.createElement('label');
const dueDateInput = document.createElement('input');
const labelForDescription = document.createElement('label');
const descriptionInput = document.createElement('input');
const priorityInput = document.createElement('div');
const labelForLowPriority = document.createElement('label');
const lowPriority = document.createElement('input');
const labelForMediaPriority = document.createElement('label');
const mediaPriority = document.createElement('input');
const labelForHighPriority = document.createElement('label');
const highPriority = document.createElement('input');
const labelForNotes = document.createElement('label');
const notesInput = document.createElement('input');
const labelForChecklist = document.createElement('label');
const checklistInput = document.createElement('input');
const submitButton = document.createElement('button');

   const field1 = document.createElement('div');
   const field2 = document.createElement('div');
   const field3 = document.createElement('div');
   const field4 = document.createElement('div');
   const field5 = document.createElement('div');
   const field6 = document.createElement('div');
   const field7 = document.createElement('div');


   form.setAttribute('id','formTask');

   labelForTitle.innerText = "Add the title of the task: ";
   labelForTitle.setAttribute('for','title');
   titleInput.setAttribute('id','title');
   titleInput.setAttribute('name','title');
   titleInput.setAttribute('type','text');
   titleInput.setAttribute('required',true);


   labelForDescription.innerText = "Additional description: ";
   labelForDescription.setAttribute('for','description');
   descriptionInput.setAttribute('id','description');
   descriptionInput.setAttribute('name','description');
   descriptionInput.setAttribute('type','text');

   labelForDueDate.innerText = "Task's Due Date: ";
   labelForDueDate.setAttribute('for','dueDateTask');
   dueDateInput.setAttribute('id','dueDateTask');
   dueDateInput.setAttribute('name','dueDate');
   dueDateInput.setAttribute('type','date');
   dueDateInput.setAttribute('required',true);


   priorityInput.innerText = "Priority: ";
   priorityInput.classList.add('priority');
   
   labelForLowPriority.innerText ='low';
   labelForLowPriority.setAttribute('for','low');
   lowPriority.setAttribute('type','radio');
   lowPriority.setAttribute('id','low');
   lowPriority.setAttribute('name','priority');
   lowPriority.setAttribute('value','low');
   lowPriority.setAttribute('checked',true);

   labelForMediaPriority.innerText ='media';
   labelForMediaPriority.setAttribute('for','media');
   mediaPriority.setAttribute('type','radio');
   mediaPriority.setAttribute('id','media');
   mediaPriority.setAttribute('name','priority');
   mediaPriority.setAttribute('value','media');

   labelForHighPriority.innerText ='high';
   labelForHighPriority.setAttribute('for','high');
   highPriority.setAttribute('type','radio');
   highPriority.setAttribute('id','high');
   highPriority.setAttribute('name','priority');
   highPriority.setAttribute('value','high');

   labelForNotes.innerText = "Additional notes: ";
   labelForNotes.setAttribute('for','notes');
   notesInput.setAttribute('id','notes');
   notesInput.setAttribute('name','notes');
   notesInput.setAttribute('type','text');

   labelForChecklist.innerText ='DONE';
   labelForChecklist.setAttribute('for','checklist');
   checklistInput.setAttribute('id','checklist');
   checklistInput.setAttribute('name','checklist');
   checklistInput.setAttribute('type','checkbox');
   checklistInput.setAttribute('value','false');

   submitButton.textContent = "CREATE Task";
   submitButton.setAttribute('type','submit');
   submitButton.classList.add('btn2');

   arg3.appendChild(form);
   form.appendChild(field1);
   field1.appendChild(labelForTitle);
   field1.appendChild(titleInput);
   form.appendChild(field2);
   field2.appendChild(labelForDescription);
   field2.appendChild(descriptionInput);
   form.appendChild(field3);
   field3.appendChild(labelForDueDate);
   field3.appendChild(dueDateInput);
   form.appendChild(field4);
   field4.appendChild(priorityInput);
   priorityInput.appendChild(labelForLowPriority);
   priorityInput.appendChild(lowPriority);
   priorityInput.appendChild(labelForMediaPriority);
   priorityInput.appendChild(mediaPriority);
   priorityInput.appendChild(labelForHighPriority);
   priorityInput.appendChild(highPriority);
   form.appendChild(field5);
   field5.appendChild(labelForNotes);
   field5.appendChild(notesInput);
   form.appendChild(field6);
   field6.appendChild(labelForChecklist);
   field6.appendChild(checklistInput);
   form.appendChild(field7);
   field7.appendChild(submitButton);

   lowPriority.addEventListener('change', () => {
       displayRadioValue();
     });
   mediaPriority.addEventListener('change', () => {
       displayRadioValue();
     });
   highPriority.addEventListener('change', () => {
       displayRadioValue();
     });

   checklistInput.addEventListener('change', () => {
    toggleDoneUndone(checklistInput);
     });


   let prioritySelected = '';
   function displayRadioValue() {
           
       let getSelectedValue = document.querySelector( 'input[name="priority"]:checked');   
           
       if(getSelectedValue != null) {   
        prioritySelected = getSelectedValue.value;
        console.log(getSelectedValue); 
        console.log(prioritySelected); 
        }else {  
        console.log("Nothing has been selected");  
        }

       return prioritySelected;
     };
   
   /* finaliza la funcion que crea el formulario */

const readAddedTask = () => {     /* lee y archiva la tarea que fue agregada a traves del formulario */
  
    console.log(arrayProjects);
    let task = JSON.parse(localStorage.getItem("newtask"));
    let idT = task.projectId;
    let title = task.title;
    let arrayProjectsLength = arrayProjects.length;
    let projectToPush = [];
    let rest = [];

    for (let i = 0; i < arrayProjectsLength; i++){
        if (arrayProjects[i]['id'] == idT){
            projectToPush.push(arrayProjects[i]);
        }else{
            rest.push(arrayProjects[i]);    
        }
    }
   

    console.log(projectToPush);
    console.log(rest);
    let restLength = rest.length;
    console.log(restLength);

    let tasks = projectToPush[0]['tasks'];
    console.log(tasks);
    let tasksLength = tasks.length;
    console.log(tasksLength);
/* agregar una condicion para cuando el array es longitud 0 y para cuando tiene otras tareas */
    if (tasksLength==0){
    projectToPush[0]['tasks'] = [task];
    console.log(projectToPush);
    }else{
    projectToPush[0]['tasks'].push(task);  
    }
/* luego modificar el array original sumando el rest con el proyecto donde se agrego la tarea */   
    if (restLength==0){
        arrayProjects = projectToPush;
    }else{
/* va a agregar el proyecto modificado al final  */       
        arrayProjects = rest.concat(projectToPush);
/* ordena el array de acuerdo con los id de los proyectos  */  
       arrayProjects = sortObjects(arrayProjects);
    }
    console.log(arrayProjects);

    form.remove();
    const message = document.createElement('p');
    message.setAttribute('style','color:blue; text-transform: uppercase;');
    arg3.appendChild(message);
    
    message.innerText = 'The Task '+title+' was added to Project '+idT;
  

    localStorage.removeItem("newtask");

    sendDataToLocal('projects',arrayProjects);

};

const askingAgain = () => { 
  /* arg1 is the Class Task - arg2 is the projectId - arg3 is the div container for the taskForm 
    arg4 es el arrayProjects */  
    askForContinue(arg1,id,arg3,arrayProjects);

} 

form.addEventListener('submit', function(event){
    event.preventDefault()
  
    let title = document.getElementById('title').value;
    console.log(title);

    let description = document.getElementById('description').value;
    console.log(description);
  
    let dueDate = document.getElementById('dueDateTask').value;
    console.log(dueDateTask);

    let priority = displayRadioValue();
    console.log(priority);
  
    let notes = document.getElementById('notes').value;
    console.log(notes);

    let checklist = toggleDoneUndone(checklistInput);
    console.log(checklist);

    let projectId =  id; 
    console.log(projectId);
  
    
    let task = new arg1(title,description,dueDate,priority,notes,checklist,projectId);
    console.log(task);
    localStorage.setItem("newtask", JSON.stringify(task));

    
    document.getElementById('formTask').reset(); 
    
    return task;
  
  });

  form.addEventListener("submit", readAddedTask);
  form.addEventListener("submit", askingAgain);
 

return arrayProjects;
   

}