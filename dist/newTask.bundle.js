"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["newTask"],{

/***/ "./src/components/askForContinue.js":
/*!******************************************!*\
  !*** ./src/components/askForContinue.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ askForContinue)
/* harmony export */ });
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask.js */ "./src/components/newTask.js");
/* harmony import */ var _sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendDataToLocal.js */ "./src/components/sendDataToLocal.js");
/* harmony import */ var _clearContainers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearContainers.js */ "./src/components/clearContainers.js");
/* harmony import */ var _createContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createContainer.js */ "./src/components/createContainer.js");
/* harmony import */ var _printProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printProject.js */ "./src/components/printProject.js");






function askForContinue(arg1,arg2,arg3,arg4) {
    
    /* arg1 is the Class Task - arg2 is the projectId - arg3 is the div container for the taskForm 
    arg4 es el arrayProjects */  
    
    console.log('prueba de funcion asking for continue');

    let Task = arg1;
       
    let id = arg2;
    console.log('prueba de lectura de id: '+id);

    let formContainer = arg3;
    console.log(formContainer);

    let arrayProjects = arg4;
    
    const field = document.createElement('div');
    const askingMessage = document.createElement('p');
    const answerOptions = document.createElement('div');
    const labelForYes = document.createElement('label');
    const answerYes = document.createElement('input');
    const labelForNo = document.createElement('label');
    const answerNo = document.createElement('input');
    

    askingMessage.innerText ='Do you want CONTINUE ADDING TASKS?';
    
    labelForYes.setAttribute('for','yes');
    labelForYes.innerText = 'YES';
    answerYes.setAttribute('id','yes');
    answerYes.setAttribute('value','yes');
    answerYes.setAttribute('name','answer');
    answerYes.setAttribute('type','radio');
    labelForNo.setAttribute('for','no');
    labelForNo.innerText ='NO';
    answerNo.setAttribute('id','no');
    answerNo.setAttribute('value','no');
    answerNo.setAttribute('name','answer');
    answerNo.setAttribute('type','radio');

   let answer='nothing';    
    answerYes.addEventListener('change', () => {
        displayAgain();
        displayFormTask(answer);
      });
    
    answerNo.addEventListener('change', () => {
        displayAgain();
        displayFormTask(answer);
      });


    function displayAgain() {
        
        let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');   
        
        if(getSelectedValue != null) {   
         answer = getSelectedValue.value;
         console.log(getSelectedValue); 
         console.log(answer); 
         }else {  
         console.log("Nothing has been selected");  
         }
      return answer;
      }; 

      function displayFormTask(answer) {
            
        if(answer == 'nothing') {   
            console.log("Nothing has been selected");
         }else {  
            if(answer == 'no') {
                /*  funcion que envíe a local storage el projecto completo actualizado   */
                (0,_sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_1__["default"])('projects',arrayProjects);
            /*  funcion que limpie el container de la forma  y regrese al container de impresion  */
                (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.formBox');
                (0,_createContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"])('tasks','projectTasks');
                (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.sidebarPro');
                let projectSide = document.querySelector('.sidebar');
                console.log(projectSide);
                let projectTasks = document.querySelector('.tasks');
                console.log(projectTasks);
                arrayProjects = JSON.parse(localStorage.getItem("projects"));
                console.log(arrayProjects);
                /*  llamar de nuevo a la funcion de printProject  */
                  (0,_printProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectSide,arrayProjects,projectTasks);

                console.log("asignar funcion para NO");  
            }else{
                /*  llamar a la funcion newTask pasando la clase, el id, el container y el array  */

                  (0,_newTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Task,id,formContainer,arrayProjects);
                 
                  console.log("asignar funcion para YES");   

            }
         }
      
      };
   

      formContainer.appendChild(field);
      field.appendChild(askingMessage);
      field.appendChild(answerOptions);
      answerOptions.appendChild(labelForYes);
      answerOptions.appendChild(answerYes);
      answerOptions.appendChild(labelForNo);
      answerOptions.appendChild(answerNo);


}

/***/ }),

/***/ "./src/components/clearContainers.js":
/*!*******************************************!*\
  !*** ./src/components/clearContainers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContainers)
/* harmony export */ });
function clearContainers(arg1) {
    /*arg1 is the class of the container for remove */
    let classToRemove = arg1;
    /* limpia el contenido anterior */
    let contentInfo = document.querySelector(classToRemove);

    if ( contentInfo != null) {
        contentInfo.remove();
    }else{
        console.log('action not required');
    }
       
    }
    

/***/ }),

/***/ "./src/components/createContainer.js":
/*!*******************************************!*\
  !*** ./src/components/createContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContainers)
/* harmony export */ });
function createContainers(arg1,arg2) {
    /* the arg1 is the class for the new container - the arg2 is the id attribute for the new container   */
    let classToAdd = arg1 ;
    let  idForContainer = arg2;
   
    /* crea un nuevo container */

        
        const element = document.querySelector('.container');
        const container = document.createElement('div');
        console.log(element);
      
        container.classList.add(classToAdd);
        container.setAttribute('id',idForContainer);
    
        element.appendChild(container);
        
       
    }



/***/ }),

/***/ "./src/components/deleteObjects.js":
/*!*****************************************!*\
  !*** ./src/components/deleteObjects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteObjects)
/* harmony export */ });
/* harmony import */ var _sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendDataToLocal.js */ "./src/components/sendDataToLocal.js");
/* harmony import */ var _clearContainers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearContainers.js */ "./src/components/clearContainers.js");
/* harmony import */ var _createContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createContainer.js */ "./src/components/createContainer.js");
/* harmony import */ var _printProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printProject.js */ "./src/components/printProject.js");





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

    (0,_sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_0__["default"])('projects',arrayProjects);
    /* from here refresh the print of the project and tasks */
    (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.tasks');
    (0,_createContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"])('tasks','projectTasks');
    (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.sidebarPro');
    let projectSide = document.querySelector('.sidebar');
    console.log(projectSide);
    let projectTasks = document.querySelector('.tasks');
    console.log(projectTasks);
    (0,_printProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectSide,arrayProjects,projectTasks);
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

/***/ }),

/***/ "./src/components/newTask.js":
/*!***********************************!*\
  !*** ./src/components/newTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _settingComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingComplete */ "./src/components/settingComplete.js");
/* harmony import */ var _sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendDataToLocal.js */ "./src/components/sendDataToLocal.js");
/* harmony import */ var _askForContinue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./askForContinue.js */ "./src/components/askForContinue.js");
/* harmony import */ var _sortObjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortObjects.js */ "./src/components/sortObjects.js");





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
    (0,_settingComplete__WEBPACK_IMPORTED_MODULE_0__["default"])(checklistInput);
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
       arrayProjects = (0,_sortObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrayProjects);
    }
    console.log(arrayProjects);

    form.remove();
    const message = document.createElement('p');
    message.setAttribute('style','color:blue; text-transform: uppercase;');
    arg3.appendChild(message);
    
    message.innerText = 'The Task '+title+' was added to Project '+idT;
  

    localStorage.removeItem("newtask");

    (0,_sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_1__["default"])('projects',arrayProjects);

};

const askingAgain = () => { 
  /* arg1 is the Class Task - arg2 is the projectId - arg3 is the div container for the taskForm 
    arg4 es el arrayProjects */  
    (0,_askForContinue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arg1,id,arg3,arrayProjects);

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

    let checklist = (0,_settingComplete__WEBPACK_IMPORTED_MODULE_0__["default"])(checklistInput);
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

/***/ }),

/***/ "./src/components/printProject.js":
/*!****************************************!*\
  !*** ./src/components/printProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printProList)
/* harmony export */ });
/* harmony import */ var _settingComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingComplete */ "./src/components/settingComplete.js");
/* harmony import */ var _deleteObjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteObjects.js */ "./src/components/deleteObjects.js");
/* harmony import */ var _sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendDataToLocal.js */ "./src/components/sendDataToLocal.js");





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
                        checklist = (0,_settingComplete__WEBPACK_IMPORTED_MODULE_0__["default"])(checklistInput);
                        arg2 = update(currentProject,arrayTasks,checklist);
                        (0,_sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_2__["default"])('projects',arg2);
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
                        
                        (0,_deleteObjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteButton,arg2);  
                        
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
  


/***/ }),

/***/ "./src/components/sendDataToLocal.js":
/*!*******************************************!*\
  !*** ./src/components/sendDataToLocal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendDataToLocal)
/* harmony export */ });
function sendDataToLocal(arg1,arg2) {

/* arg1 is the name of the key - arg2 is the array with the data */

let key = arg1;
let dataToSend = arg2;

console.log(key);
console.log(dataToSend);

localStorage.setItem(key, JSON.stringify(dataToSend));


   
}

/***/ }),

/***/ "./src/components/settingComplete.js":
/*!*******************************************!*\
  !*** ./src/components/settingComplete.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleDoneUndone)
/* harmony export */ });
function toggleDoneUndone(arg) {

    /* el arg es el input checkbox */
    let checklistInput = arg;
    let getSelectedValue = checklistInput.value; 
    console.log(getSelectedValue);
    let checklist = '';
    if(getSelectedValue == 'false') {   
        checklist = 'true';
    }else { 
            if(getSelectedValue == 'true') {
             checklist = 'false';
            }     
            }

        console.log(getSelectedValue); 
        console.log(checklist); 
 return checklist;

}

/***/ }),

/***/ "./src/components/sortObjects.js":
/*!***************************************!*\
  !*** ./src/components/sortObjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortObjects)
/* harmony export */ });

function sortObjects(arg) {
   
    let arrayProjects = arg; 

    let arrayProjectsLength = arrayProjects.length;
    let arrayId = [];
    let item = 0;
 
 
    function sortId(){
     for (let i = 0; i < arrayProjectsLength; i++) {
     item = arrayProjects[i]["id"];
     console.log(item);
     arrayId.push(item);
     console.log(arrayId);
     arrayId.sort();
     }; 
     return arrayId;
     };
     
     let idSorted = sortId();
     console.log(idSorted);
     
     let currentId = 0;
     let arraySorted = [];
     
     function sortArrayObject(idSorted,arrayProjects){
     
     for (let i = 0; i < idSorted.length; i++) {
         currentId = idSorted[i];
           for (let j = 0; j < arrayProjectsLength; j++) {
               if( currentId == arrayProjects[j]["id"] ){
                   arraySorted.push(arrayProjects[j]);
               }  
           };	
     };
     console.log(arraySorted);
     return arraySorted; 
     };
     
     arrayProjects = sortArrayObject(idSorted,arrayProjects);
     console.log(arrayProjects);
return arrayProjects;


}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/newTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3VGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2dCO0FBQ0E7QUFDQTtBQUNOO0FBQzdDO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFlO0FBQy9CO0FBQ0EsZ0JBQWdCLCtEQUFlO0FBQy9CLGdCQUFnQiwrREFBZTtBQUMvQixnQkFBZ0IsK0RBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQVk7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUQ7QUFDQTtBQUNBO0FBQ047QUFDN0M7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBZTtBQUNuQjtBQUNBLElBQUksK0RBQWU7QUFDbkIsSUFBSSwrREFBZTtBQUNuQixJQUFJLCtEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RWlEO0FBQ0U7QUFDRjtBQUNOO0FBQzNDO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDBCQUEwQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNERBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1JpRDtBQUNGO0FBQ0k7QUFDbkQ7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNERBQWdCO0FBQ3BEO0FBQ0Esd0JBQXdCLCtEQUFlO0FBQ3ZDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2REFBYTtBQUNyQztBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXNrRm9yQ29udGludWUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NsZWFyQ29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGVPYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wcmludFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NlbmREYXRhVG9Mb2NhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ0NvbXBsZXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zb3J0T2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3VGFzayBmcm9tICcuL25ld1Rhc2suanMnO1xyXG5pbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBhc2tGb3JDb250aW51ZShhcmcxLGFyZzIsYXJnMyxhcmc0KSB7XHJcbiAgICBcclxuICAgIC8qIGFyZzEgaXMgdGhlIENsYXNzIFRhc2sgLSBhcmcyIGlzIHRoZSBwcm9qZWN0SWQgLSBhcmczIGlzIHRoZSBkaXYgY29udGFpbmVyIGZvciB0aGUgdGFza0Zvcm0gXHJcbiAgICBhcmc0IGVzIGVsIGFycmF5UHJvamVjdHMgKi8gIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygncHJ1ZWJhIGRlIGZ1bmNpb24gYXNraW5nIGZvciBjb250aW51ZScpO1xyXG5cclxuICAgIGxldCBUYXNrID0gYXJnMTtcclxuICAgICAgIFxyXG4gICAgbGV0IGlkID0gYXJnMjtcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmEgZGUgbGVjdHVyYSBkZSBpZDogJytpZCk7XHJcblxyXG4gICAgbGV0IGZvcm1Db250YWluZXIgPSBhcmczO1xyXG4gICAgY29uc29sZS5sb2coZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmc0O1xyXG4gICAgXHJcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXNraW5nTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGFuc3dlck9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGFuc3dlclllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvck5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGFuc3dlck5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG5cclxuICAgIGFza2luZ01lc3NhZ2UuaW5uZXJUZXh0ID0nRG8geW91IHdhbnQgQ09OVElOVUUgQURESU5HIFRBU0tTPyc7XHJcbiAgICBcclxuICAgIGxhYmVsRm9yWWVzLnNldEF0dHJpYnV0ZSgnZm9yJywneWVzJyk7XHJcbiAgICBsYWJlbEZvclllcy5pbm5lclRleHQgPSAnWUVTJztcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ2lkJywneWVzJyk7XHJcbiAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3llcycpO1xyXG4gICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Fuc3dlcicpO1xyXG4gICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICBsYWJlbEZvck5vLnNldEF0dHJpYnV0ZSgnZm9yJywnbm8nKTtcclxuICAgIGxhYmVsRm9yTm8uaW5uZXJUZXh0ID0nTk8nO1xyXG4gICAgYW5zd2VyTm8uc2V0QXR0cmlidXRlKCdpZCcsJ25vJyk7XHJcbiAgICBhbnN3ZXJOby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbm8nKTtcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Fuc3dlcicpO1xyXG4gICAgYW5zd2VyTm8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuXHJcbiAgIGxldCBhbnN3ZXI9J25vdGhpbmcnOyAgICBcclxuICAgIGFuc3dlclllcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUFnYWluKCk7XHJcbiAgICAgICAgZGlzcGxheUZvcm1UYXNrKGFuc3dlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhbnN3ZXJOby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUFnYWluKCk7XHJcbiAgICAgICAgZGlzcGxheUZvcm1UYXNrKGFuc3dlcik7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWdhaW4oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGFuc3dlciA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpOyBcclxuICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKTsgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcIik7ICBcclxuICAgICAgICAgfVxyXG4gICAgICByZXR1cm4gYW5zd2VyO1xyXG4gICAgICB9OyBcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGRpc3BsYXlGb3JtVGFzayhhbnN3ZXIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoYW5zd2VyID09ICdub3RoaW5nJykgeyAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICBpZihhbnN3ZXIgPT0gJ25vJykge1xyXG4gICAgICAgICAgICAgICAgLyogIGZ1bmNpb24gcXVlIGVudsOtZSBhIGxvY2FsIHN0b3JhZ2UgZWwgcHJvamVjdG8gY29tcGxldG8gYWN0dWFsaXphZG8gICAqL1xyXG4gICAgICAgICAgICAgICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIC8qICBmdW5jaW9uIHF1ZSBsaW1waWUgZWwgY29udGFpbmVyIGRlIGxhIGZvcm1hICB5IHJlZ3Jlc2UgYWwgY29udGFpbmVyIGRlIGltcHJlc2lvbiAgKi9cclxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVycygnLmZvcm1Cb3gnKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhaW5lcigndGFza3MnLCdwcm9qZWN0VGFza3MnKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVycygnLnNpZGViYXJQcm8nKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2lkZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgICAgIC8qICBsbGFtYXIgZGUgbnVldm8gYSBsYSBmdW5jaW9uIGRlIHByaW50UHJvamVjdCAgKi9cclxuICAgICAgICAgICAgICAgICAgcHJpbnRQcm9MaXN0KHByb2plY3RTaWRlLGFycmF5UHJvamVjdHMscHJvamVjdFRhc2tzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzaWduYXIgZnVuY2lvbiBwYXJhIE5PXCIpOyAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLyogIGxsYW1hciBhIGxhIGZ1bmNpb24gbmV3VGFzayBwYXNhbmRvIGxhIGNsYXNlLCBlbCBpZCwgZWwgY29udGFpbmVyIHkgZWwgYXJyYXkgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICBuZXdUYXNrKFRhc2ssaWQsZm9ybUNvbnRhaW5lcixhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2lnbmFyIGZ1bmNpb24gcGFyYSBZRVNcIik7ICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH07XHJcbiAgIFxyXG5cclxuICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZCk7XHJcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKGFza2luZ01lc3NhZ2UpO1xyXG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChhbnN3ZXJPcHRpb25zKTtcclxuICAgICAgYW5zd2VyT3B0aW9ucy5hcHBlbmRDaGlsZChsYWJlbEZvclllcyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQoYW5zd2VyWWVzKTtcclxuICAgICAgYW5zd2VyT3B0aW9ucy5hcHBlbmRDaGlsZChsYWJlbEZvck5vKTtcclxuICAgICAgYW5zd2VyT3B0aW9ucy5hcHBlbmRDaGlsZChhbnN3ZXJObyk7XHJcblxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKmFyZzEgaXMgdGhlIGNsYXNzIG9mIHRoZSBjb250YWluZXIgZm9yIHJlbW92ZSAqL1xyXG4gICAgbGV0IGNsYXNzVG9SZW1vdmUgPSBhcmcxO1xyXG4gICAgLyogbGltcGlhIGVsIGNvbnRlbmlkbyBhbnRlcmlvciAqL1xyXG4gICAgbGV0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc1RvUmVtb3ZlKTtcclxuXHJcbiAgICBpZiAoIGNvbnRlbnRJbmZvICE9IG51bGwpIHtcclxuICAgICAgICBjb250ZW50SW5mby5yZW1vdmUoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24gbm90IHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSxhcmcyKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgY2xhc3MgZm9yIHRoZSBuZXcgY29udGFpbmVyIC0gdGhlIGFyZzIgaXMgdGhlIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIG5ldyBjb250YWluZXIgICAqL1xyXG4gICAgbGV0IGNsYXNzVG9BZGQgPSBhcmcxIDtcclxuICAgIGxldCAgaWRGb3JDb250YWluZXIgPSBhcmcyO1xyXG4gICBcclxuICAgIC8qIGNyZWEgdW4gbnVldm8gY29udGFpbmVyICovXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJyxpZEZvckNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiIsImltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5pbXBvcnQgY2xlYXJDb250YWluZXJzIGZyb20gJy4vY2xlYXJDb250YWluZXJzLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBwcmludFByb0xpc3QgZnJvbSAnLi9wcmludFByb2plY3QuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdHMoYXJnMSxhcmcyKSB7XHJcblxyXG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIikgPT09IHRydWUpIHtcclxuICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnMjtcclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyAoYXJyYXlQcm9qZWN0cyk7XHJcblxyXG4gICAgbGV0IGdldEluZGV4ID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTsgXHJcblxyXG4gICAgbGV0IGEgPSBnZXRJbmRleC5pbmRleE9mKCd4Jyk7XHJcbiAgICBsZXQgYiA9IGEgKzE7XHJcbiAgICBsZXQgZW5kID0gZ2V0SW5kZXgubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdElkID0gZ2V0SW5kZXguc2xpY2UoMCxhKTtcclxuICAgIHByb2plY3RJZCA9IE51bWJlcihwcm9qZWN0SWQpO1xyXG4gICAgXHJcbiAgICBsZXQgaU9mQXJyYXkgPSBnZXRJbmRleC5zbGljZShiLGVuZCk7XHJcbiAgICBpT2ZBcnJheSA9IE51bWJlcihpT2ZBcnJheSk7XHJcbiAgICBcclxuICAgIGxldCBpdGVtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKSB7XHJcbiAgICBcclxuICAgIGl0ZW0gPSBhcnJheVByb2plY3RzW2ldW1wiaWRcIl07XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGlmIChpdGVtID09IHByb2plY3RJZCl7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0c1tpXVtcInRhc2tzXCJdLnBvcChpT2ZBcnJheSk7XHRcclxuXHJcbiAgICB9IFxyXG4gICAgY29uc29sZS5sb2cgKGFycmF5UHJvamVjdHMpO1xyXG4gXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGdldEluZGV4Lmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhhKTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBhKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyhpT2ZBcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgaU9mQXJyYXkpO1xyXG5cclxuICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFycmF5UHJvamVjdHMpO1xyXG4gICAgLyogZnJvbSBoZXJlIHJlZnJlc2ggdGhlIHByaW50IG9mIHRoZSBwcm9qZWN0IGFuZCB0YXNrcyAqL1xyXG4gICAgY2xlYXJDb250YWluZXJzKCcudGFza3MnKTtcclxuICAgIGNyZWF0ZUNvbnRhaW5lcigndGFza3MnLCdwcm9qZWN0VGFza3MnKTtcclxuICAgIGNsZWFyQ29udGFpbmVycygnLnNpZGViYXJQcm8nKTtcclxuICAgIGxldCBwcm9qZWN0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2lkZSk7XHJcbiAgICBsZXQgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xyXG4gICAgcHJpbnRQcm9MaXN0KHByb2plY3RTaWRlLGFycmF5UHJvamVjdHMscHJvamVjdFRhc2tzKTtcclxuICAgIGxldCB0YXJnZXQgPSAnI3Byb2plY3QnK3Byb2plY3RJZDtcclxuICAgIGNvbnN0IG9wZW5EaXYgPSAodGFyZ2V0KSA9PnsgXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgIGlmICggZGl2ICE9PSBudWxsKXtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbW9zdHJhcicpOyBcclxuICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25lZWQgcmVmcmVzaCBmb3IgdXBkYXRlcycpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgIG9wZW5EaXYodGFyZ2V0KTtcclxuICAgIFxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG59IiwiaW1wb3J0IHRvZ2dsZURvbmVVbmRvbmUgZnJvbSAnLi9zZXR0aW5nQ29tcGxldGUnO1xyXG5pbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGFza0ZvckNvbnRpbnVlIGZyb20gJy4vYXNrRm9yQ29udGludWUuanMnO1xyXG5pbXBvcnQgc29ydE9iamVjdHMgZnJvbSAnLi9zb3J0T2JqZWN0cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gbmV3VGFzayhhcmcxLGFyZzIsYXJnMyxhcmc0KSB7XHJcbiAgICAvKiBhcmcxIGlzIHRoZSBDbGFzcyBUYXNrIC0gYXJnMiBpcyB0aGUgcHJvamVjdElkIC0gYXJnMyBpcyB0aGUgZGl2IGNvbnRhaW5lciBmb3IgdGhlIHRhc2tGb3JtIFxyXG4gICAgYXJnNCBlcyBlbCBhcnJheVByb2plY3RzICovXHJcblxyXG5sZXQgaWQgPSBhcmcyO1xyXG5jb25zb2xlLmxvZygncHJ1ZWJhIGRlIGZ1bmNpb24gbmV3VGFzaycpO1xyXG5jb25zb2xlLmxvZyhpZCk7XHJcbmNvbnNvbGUubG9nKGFyZzMpO1xyXG5sZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzQ7IFxyXG5jb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuXHJcbi8qIGNyZWFyIGZvcm1hIHBhcmEgY2FwdGFyIGxhIG51ZXZhIHRhcmVhICovXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5jb25zdCBsYWJlbEZvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBsYWJlbEZvckxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvck1lZGlhUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBtZWRpYVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JIaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvck5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgIGNvbnN0IGZpZWxkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm1UYXNrJyk7XHJcblxyXG4gICBsYWJlbEZvclRpdGxlLmlubmVyVGV4dCA9IFwiQWRkIHRoZSB0aXRsZSBvZiB0aGUgdGFzazogXCI7XHJcbiAgIGxhYmVsRm9yVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RpdGxlJyk7XHJcbiAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLHRydWUpO1xyXG5cclxuXHJcbiAgIGxhYmVsRm9yRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJBZGRpdGlvbmFsIGRlc2NyaXB0aW9uOiBcIjtcclxuICAgbGFiZWxGb3JEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzY3JpcHRpb24nKTtcclxuICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcblxyXG4gICBsYWJlbEZvckR1ZURhdGUuaW5uZXJUZXh0ID0gXCJUYXNrJ3MgRHVlIERhdGU6IFwiO1xyXG4gICBsYWJlbEZvckR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlVGFzaycpO1xyXG4gICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGVUYXNrJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkdWVEYXRlJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJyx0cnVlKTtcclxuXHJcblxyXG4gICBwcmlvcml0eUlucHV0LmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xyXG4gICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XHJcbiAgIFxyXG4gICBsYWJlbEZvckxvd1ByaW9yaXR5LmlubmVyVGV4dCA9J2xvdyc7XHJcbiAgIGxhYmVsRm9yTG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdsb3cnKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xvdycpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsdHJ1ZSk7XHJcblxyXG4gICBsYWJlbEZvck1lZGlhUHJpb3JpdHkuaW5uZXJUZXh0ID0nbWVkaWEnO1xyXG4gICBsYWJlbEZvck1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdtZWRpYScpO1xyXG4gICBtZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ21lZGlhJyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcclxuICAgbWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbWVkaWEnKTtcclxuXHJcbiAgIGxhYmVsRm9ySGlnaFByaW9yaXR5LmlubmVyVGV4dCA9J2hpZ2gnO1xyXG4gICBsYWJlbEZvckhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2hpZ2gnKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnaGlnaCcpO1xyXG4gICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdoaWdoJyk7XHJcblxyXG4gICBsYWJlbEZvck5vdGVzLmlubmVyVGV4dCA9IFwiQWRkaXRpb25hbCBub3RlczogXCI7XHJcbiAgIGxhYmVsRm9yTm90ZXMuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpO1xyXG4gICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdub3RlcycpO1xyXG4gICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ25vdGVzJyk7XHJcbiAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG5cclxuICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0nRE9ORSc7XHJcbiAgIGxhYmVsRm9yQ2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnZm9yJywnY2hlY2tsaXN0Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2xpc3QnKTtcclxuICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnY2hlY2tsaXN0Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdmYWxzZScpO1xyXG5cclxuICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVGFza1wiO1xyXG4gICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XHJcblxyXG4gICBhcmczLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMSk7XHJcbiAgIGZpZWxkMS5hcHBlbmRDaGlsZChsYWJlbEZvclRpdGxlKTtcclxuICAgZmllbGQxLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMik7XHJcbiAgIGZpZWxkMi5hcHBlbmRDaGlsZChsYWJlbEZvckRlc2NyaXB0aW9uKTtcclxuICAgZmllbGQyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMyk7XHJcbiAgIGZpZWxkMy5hcHBlbmRDaGlsZChsYWJlbEZvckR1ZURhdGUpO1xyXG4gICBmaWVsZDMuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDQpO1xyXG4gICBmaWVsZDQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JMb3dQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yTWVkaWFQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaWFQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIaWdoUHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ1KTtcclxuICAgZmllbGQ1LmFwcGVuZENoaWxkKGxhYmVsRm9yTm90ZXMpO1xyXG4gICBmaWVsZDUuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ2KTtcclxuICAgZmllbGQ2LmFwcGVuZENoaWxkKGxhYmVsRm9yQ2hlY2tsaXN0KTtcclxuICAgZmllbGQ2LmFwcGVuZENoaWxkKGNoZWNrbGlzdElucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDcpO1xyXG4gICBmaWVsZDcuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICAgfSk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgICB9KTtcclxuICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICBjaGVja2xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgICB9KTtcclxuXHJcblxyXG4gICBsZXQgcHJpb3JpdHlTZWxlY3RlZCA9ICcnO1xyXG4gICBmdW5jdGlvbiBkaXNwbGF5UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICBwcmlvcml0eVNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpb3JpdHlTZWxlY3RlZCk7IFxyXG4gICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aGluZyBoYXMgYmVlbiBzZWxlY3RlZFwiKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICByZXR1cm4gcHJpb3JpdHlTZWxlY3RlZDtcclxuICAgICB9O1xyXG4gICBcclxuICAgLyogZmluYWxpemEgbGEgZnVuY2lvbiBxdWUgY3JlYSBlbCBmb3JtdWxhcmlvICovXHJcblxyXG5jb25zdCByZWFkQWRkZWRUYXNrID0gKCkgPT4geyAgICAgLyogbGVlIHkgYXJjaGl2YSBsYSB0YXJlYSBxdWUgZnVlIGFncmVnYWRhIGEgdHJhdmVzIGRlbCBmb3JtdWxhcmlvICovXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgIGxldCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5ld3Rhc2tcIikpO1xyXG4gICAgbGV0IGlkVCA9IHRhc2sucHJvamVjdElkO1xyXG4gICAgbGV0IHRpdGxlID0gdGFzay50aXRsZTtcclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBsZXQgcHJvamVjdFRvUHVzaCA9IFtdO1xyXG4gICAgbGV0IHJlc3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKGFycmF5UHJvamVjdHNbaV1bJ2lkJ10gPT0gaWRUKXtcclxuICAgICAgICAgICAgcHJvamVjdFRvUHVzaC5wdXNoKGFycmF5UHJvamVjdHNbaV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXN0LnB1c2goYXJyYXlQcm9qZWN0c1tpXSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvUHVzaCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0KTtcclxuICAgIGxldCByZXN0TGVuZ3RoID0gcmVzdC5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0TGVuZ3RoKTtcclxuXHJcbiAgICBsZXQgdGFza3MgPSBwcm9qZWN0VG9QdXNoWzBdWyd0YXNrcyddO1xyXG4gICAgY29uc29sZS5sb2codGFza3MpO1xyXG4gICAgbGV0IHRhc2tzTGVuZ3RoID0gdGFza3MubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2codGFza3NMZW5ndGgpO1xyXG4vKiBhZ3JlZ2FyIHVuYSBjb25kaWNpb24gcGFyYSBjdWFuZG8gZWwgYXJyYXkgZXMgbG9uZ2l0dWQgMCB5IHBhcmEgY3VhbmRvIHRpZW5lIG90cmFzIHRhcmVhcyAqL1xyXG4gICAgaWYgKHRhc2tzTGVuZ3RoPT0wKXtcclxuICAgIHByb2plY3RUb1B1c2hbMF1bJ3Rhc2tzJ10gPSBbdGFza107XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9QdXNoKTtcclxuICAgIH1lbHNle1xyXG4gICAgcHJvamVjdFRvUHVzaFswXVsndGFza3MnXS5wdXNoKHRhc2spOyAgXHJcbiAgICB9XHJcbi8qIGx1ZWdvIG1vZGlmaWNhciBlbCBhcnJheSBvcmlnaW5hbCBzdW1hbmRvIGVsIHJlc3QgY29uIGVsIHByb3llY3RvIGRvbmRlIHNlIGFncmVnbyBsYSB0YXJlYSAqLyAgIFxyXG4gICAgaWYgKHJlc3RMZW5ndGg9PTApe1xyXG4gICAgICAgIGFycmF5UHJvamVjdHMgPSBwcm9qZWN0VG9QdXNoO1xyXG4gICAgfWVsc2V7XHJcbi8qIHZhIGEgYWdyZWdhciBlbCBwcm95ZWN0byBtb2RpZmljYWRvIGFsIGZpbmFsICAqLyAgICAgICBcclxuICAgICAgICBhcnJheVByb2plY3RzID0gcmVzdC5jb25jYXQocHJvamVjdFRvUHVzaCk7XHJcbi8qIG9yZGVuYSBlbCBhcnJheSBkZSBhY3VlcmRvIGNvbiBsb3MgaWQgZGUgbG9zIHByb3llY3RvcyAgKi8gIFxyXG4gICAgICAgYXJyYXlQcm9qZWN0cyA9IHNvcnRPYmplY3RzKGFycmF5UHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcblxyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpibHVlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycpO1xyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuICAgIFxyXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhlIFRhc2sgJyt0aXRsZSsnIHdhcyBhZGRlZCB0byBQcm9qZWN0ICcraWRUO1xyXG4gIFxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibmV3dGFza1wiKTtcclxuXHJcbiAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBhc2tpbmdBZ2FpbiA9ICgpID0+IHsgXHJcbiAgLyogYXJnMSBpcyB0aGUgQ2xhc3MgVGFzayAtIGFyZzIgaXMgdGhlIHByb2plY3RJZCAtIGFyZzMgaXMgdGhlIGRpdiBjb250YWluZXIgZm9yIHRoZSB0YXNrRm9ybSBcclxuICAgIGFyZzQgZXMgZWwgYXJyYXlQcm9qZWN0cyAqLyAgXHJcbiAgICBhc2tGb3JDb250aW51ZShhcmcxLGlkLGFyZzMsYXJyYXlQcm9qZWN0cyk7XHJcblxyXG59IFxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcclxuICBcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVUYXNrJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhkdWVEYXRlVGFzayk7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcclxuICBcclxuICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2cobm90ZXMpO1xyXG5cclxuICAgIGxldCBjaGVja2xpc3QgPSB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RJZCA9ICBpZDsgXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xyXG4gIFxyXG4gICAgXHJcbiAgICBsZXQgdGFzayA9IG5ldyBhcmcxKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMsY2hlY2tsaXN0LHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3dGFza1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XHJcblxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRhc2snKS5yZXNldCgpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCByZWFkQWRkZWRUYXNrKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXNraW5nQWdhaW4pO1xyXG4gXHJcblxyXG5yZXR1cm4gYXJyYXlQcm9qZWN0cztcclxuICAgXHJcblxyXG59IiwiaW1wb3J0IHRvZ2dsZURvbmVVbmRvbmUgZnJvbSAnLi9zZXR0aW5nQ29tcGxldGUnO1xyXG5pbXBvcnQgZGVsZXRlT2JqZWN0cyBmcm9tICcuL2RlbGV0ZU9iamVjdHMuanMnO1xyXG5pbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gcHJpbnRQcm9MaXN0KGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuLyogZWwgYXJnMSBlcyBlbCBkaXYgcHJvamVjdFNpZGUgLSBlbCBhcmcyIGVzIGVsIGFycmF5UHJvamVjdHMgb2J0ZW5pZG8gZGUgbGVlciBlbCBsb2NhbHN0b3JhZ2UgLSBlbCBhcmcgMyBlcyBlbCBkaXYgcHJvamVjdFRhc2tzKi9cclxuXHJcbmNvbnN0IHByb2plY3RUYXNrcyA9IGFyZzM7XHJcblxyXG5jb25zb2xlLmxvZygncHJ1ZWJhIHByaW50UHJvTGlzdCcpO1xyXG5cclxuY29uc3QgcHJvamVjdFNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdFNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclBybycpO1xyXG5cclxuYXJnMS5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZUJhcik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZzIubGVuZ3RoKTsgIFxyXG4gICAgXHJcbiAgICAgICAgLyogaW1wcmltZSBlbCBhcnJheSBkZSBsb3MgcHJveWVjdG9zICovXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhcmcyW2ldO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ViU2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRWFjaFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XHJcbiAgICAgICAgICAgIHNob3dUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9UaXRsZScpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmNsYXNzTGlzdC5hZGQoJ3N1YlNpZGVCYXInKTtcclxuICAgICAgICAgICAgc2hvd0lkLmNsYXNzTGlzdC5hZGQoJ3Byb0lkJyk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy50ZXh0Q29udGVudCA9IFwiU0hPVyBUQVNLU1wiO1xyXG4gICAgICAgICAgICBzaG93VGFza3MuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0blRhc2snK2N1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdCcrY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc3VidGFzaycpOyBcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICcjcHJvamVjdCcrY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG9wZW5EaXYodGFyZ2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza3MuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGFzaycpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXNrVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza1Rlc3QuaW5uZXJUZXh0ID0gJ1BST0pFQ1QgJytjdXJyZW50UHJvamVjdC5pZCsnICAnK2N1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBjb25zdCBoaWRlVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLnRleHRDb250ZW50ID0gXCJISURFIFRBU0tTXCI7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5jbGFzc0xpc3QuYWRkKCdoaWRlQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBjbG9zZURpdih0YXJnZXQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJyYXlUYXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVRhc2tzKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGltcHJpbWUgZWwgYXJyYXkgZGUgbGFzIHRhcmVhcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWFjaFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxGb3JDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9YXJyYXlUYXNrc1tpXVtcImR1ZURhdGVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudER1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWNoYWZvcm1hdGVhZGEgPSBjdXJyZW50RHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VzLWVjJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU6ICdVVEMnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZlY2hhZm9ybWF0ZWFkYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmNsYXNzTGlzdC5hZGQoJ2VhY2hUYXNrJyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9ICdUYXNrOiAgJythcnJheVRhc2tzW2ldW1widGl0bGVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXRhaWxzOiAgJythcnJheVRhc2tzW2ldW1wiZGVzY3JpcHRpb25cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOiAgJytmZWNoYWZvcm1hdGVhZGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJythcnJheVRhc2tzW2ldW1wicHJpb3JpdHlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza05vdGVzLmlubmVyVGV4dCA9ICdBZGRpdGlvbmFsIG5vdGVzOiAnK2FycmF5VGFza3NbaV1bXCJub3Rlc1wiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RpdkRlbGV0ZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsIGN1cnJlbnRQcm9qZWN0LmlkKyd4JytpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LmlubmVyVGV4dCA9J0RPTkUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnZm9yJywncHJvaicrY3VycmVudFByb2plY3QuaWQrJ3Rhc2snK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qJytjdXJyZW50UHJvamVjdC5pZCsndGFzaycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnY2hlY2tsaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3Q9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdCA9IHRvZ2dsZURvbmVVbmRvbmUoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcyID0gdXBkYXRlKGN1cnJlbnRQcm9qZWN0LGFycmF5VGFza3MsY2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJnMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShjdXJyZW50UHJvamVjdCxhcnJheVRhc2tzLGNoZWNrbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdID0gY2hlY2tsaXN0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJnMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnMjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVPYmplY3RzKGRlbGV0ZUJ1dHRvbixhcmcyKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVEaXYuYXBwZW5kQ2hpbGQoZWFjaFRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKGNoZWNrbGlzdERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGxhYmVsRm9yQ2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKGRpdkRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBzaG93VGl0bGUuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHNob3dJZC5pbm5lclRleHQgPSBcIlByb2plY3QgaWQ6IFwiICtjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5hcHBlbmRDaGlsZChzaG93VGl0bGUpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFwcGVuZENoaWxkKHN1YlNpZGUpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmFwcGVuZENoaWxkKHNob3dJZCk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuYXBwZW5kQ2hpbGQoc2hvd1Rhc2tzKTtcclxuICAgICAgICAgICAgcHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKHRhc2tFYWNoUHJvamVjdCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChoZWFkZXJUYXNrcyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tzLmFwcGVuZENoaWxkKGhlYWRlclRhc2tUZXN0KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGludGVybWVkaWF0ZURpdik7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChoaWRlVGFza3MpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5EaXYodGFyZ2V0KSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkaXYgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbW9zdHJhcicpOyBcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmVlZCByZWZyZXNoIGZvciB1cGRhdGVzJyk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlRGl2KHRhcmdldCkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdtb3N0cmFyJyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnb2N1bHRhcicpOyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJnMTsgICAgXHJcblxyXG4gXHJcbiAgfTtcclxuICBcclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHNlbmREYXRhVG9Mb2NhbChhcmcxLGFyZzIpIHtcclxuXHJcbi8qIGFyZzEgaXMgdGhlIG5hbWUgb2YgdGhlIGtleSAtIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggdGhlIGRhdGEgKi9cclxuXHJcbmxldCBrZXkgPSBhcmcxO1xyXG5sZXQgZGF0YVRvU2VuZCA9IGFyZzI7XHJcblxyXG5jb25zb2xlLmxvZyhrZXkpO1xyXG5jb25zb2xlLmxvZyhkYXRhVG9TZW5kKTtcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZCkpO1xyXG5cclxuXHJcbiAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZURvbmVVbmRvbmUoYXJnKSB7XHJcblxyXG4gICAgLyogZWwgYXJnIGVzIGVsIGlucHV0IGNoZWNrYm94ICovXHJcbiAgICBsZXQgY2hlY2tsaXN0SW5wdXQgPSBhcmc7XHJcbiAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGNoZWNrbGlzdElucHV0LnZhbHVlOyBcclxuICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpO1xyXG4gICAgbGV0IGNoZWNrbGlzdCA9ICcnO1xyXG4gICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAnZmFsc2UnKSB7ICAgXHJcbiAgICAgICAgY2hlY2tsaXN0ID0gJ3RydWUnO1xyXG4gICAgfWVsc2UgeyBcclxuICAgICAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgIGNoZWNrbGlzdCA9ICdmYWxzZSc7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpOyBcclxuIHJldHVybiBjaGVja2xpc3Q7XHJcblxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBzb3J0T2JqZWN0cyhhcmcpIHtcclxuICAgXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzsgXHJcblxyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGxldCBhcnJheUlkID0gW107XHJcbiAgICBsZXQgaXRlbSA9IDA7XHJcbiBcclxuIFxyXG4gICAgZnVuY3Rpb24gc29ydElkKCl7XHJcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgICBpdGVtID0gYXJyYXlQcm9qZWN0c1tpXVtcImlkXCJdO1xyXG4gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgIGFycmF5SWQucHVzaChpdGVtKTtcclxuICAgICBjb25zb2xlLmxvZyhhcnJheUlkKTtcclxuICAgICBhcnJheUlkLnNvcnQoKTtcclxuICAgICB9OyBcclxuICAgICByZXR1cm4gYXJyYXlJZDtcclxuICAgICB9O1xyXG4gICAgIFxyXG4gICAgIGxldCBpZFNvcnRlZCA9IHNvcnRJZCgpO1xyXG4gICAgIGNvbnNvbGUubG9nKGlkU29ydGVkKTtcclxuICAgICBcclxuICAgICBsZXQgY3VycmVudElkID0gMDtcclxuICAgICBsZXQgYXJyYXlTb3J0ZWQgPSBbXTtcclxuICAgICBcclxuICAgICBmdW5jdGlvbiBzb3J0QXJyYXlPYmplY3QoaWRTb3J0ZWQsYXJyYXlQcm9qZWN0cyl7XHJcbiAgICAgXHJcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZFNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBjdXJyZW50SWQgPSBpZFNvcnRlZFtpXTtcclxuICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICBpZiggY3VycmVudElkID09IGFycmF5UHJvamVjdHNbal1bXCJpZFwiXSApe1xyXG4gICAgICAgICAgICAgICAgICAgYXJyYXlTb3J0ZWQucHVzaChhcnJheVByb2plY3RzW2pdKTtcclxuICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgfTtcdFxyXG4gICAgIH07XHJcbiAgICAgY29uc29sZS5sb2coYXJyYXlTb3J0ZWQpO1xyXG4gICAgIHJldHVybiBhcnJheVNvcnRlZDsgXHJcbiAgICAgfTtcclxuICAgICBcclxuICAgICBhcnJheVByb2plY3RzID0gc29ydEFycmF5T2JqZWN0KGlkU29ydGVkLGFycmF5UHJvamVjdHMpO1xyXG4gICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG5yZXR1cm4gYXJyYXlQcm9qZWN0cztcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9