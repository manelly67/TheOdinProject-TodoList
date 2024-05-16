"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["askForContinue"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/askForContinue.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Fza0ZvckNvbnRpbnVlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jbGVhckNvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJpbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZW5kRGF0YVRvTG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc29ydE9iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Rhc2sgZnJvbSAnLi9uZXdUYXNrLmpzJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gYXNrRm9yQ29udGludWUoYXJnMSxhcmcyLGFyZzMsYXJnNCkge1xyXG4gICAgXHJcbiAgICAvKiBhcmcxIGlzIHRoZSBDbGFzcyBUYXNrIC0gYXJnMiBpcyB0aGUgcHJvamVjdElkIC0gYXJnMyBpcyB0aGUgZGl2IGNvbnRhaW5lciBmb3IgdGhlIHRhc2tGb3JtIFxyXG4gICAgYXJnNCBlcyBlbCBhcnJheVByb2plY3RzICovICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ3BydWViYSBkZSBmdW5jaW9uIGFza2luZyBmb3IgY29udGludWUnKTtcclxuXHJcbiAgICBsZXQgVGFzayA9IGFyZzE7XHJcbiAgICAgICBcclxuICAgIGxldCBpZCA9IGFyZzI7XHJcbiAgICBjb25zb2xlLmxvZygncHJ1ZWJhIGRlIGxlY3R1cmEgZGUgaWQ6ICcraWQpO1xyXG5cclxuICAgIGxldCBmb3JtQ29udGFpbmVyID0gYXJnMztcclxuICAgIGNvbnNvbGUubG9nKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnNDtcclxuICAgIFxyXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFza2luZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvclllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJZZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuXHJcbiAgICBhc2tpbmdNZXNzYWdlLmlubmVyVGV4dCA9J0RvIHlvdSB3YW50IENPTlRJTlVFIEFERElORyBUQVNLUz8nO1xyXG4gICAgXHJcbiAgICBsYWJlbEZvclllcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3llcycpO1xyXG4gICAgbGFiZWxGb3JZZXMuaW5uZXJUZXh0ID0gJ1lFUyc7XHJcbiAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCdpZCcsJ3llcycpO1xyXG4gICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCd5ZXMnKTtcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdhbnN3ZXInKTtcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgbGFiZWxGb3JOby5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25vJyk7XHJcbiAgICBsYWJlbEZvck5vLmlubmVyVGV4dCA9J05PJztcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgnaWQnLCdubycpO1xyXG4gICAgYW5zd2VyTm8uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ25vJyk7XHJcbiAgICBhbnN3ZXJOby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdhbnN3ZXInKTtcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcblxyXG4gICBsZXQgYW5zd2VyPSdub3RoaW5nJzsgICAgXHJcbiAgICBhbnN3ZXJZZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlBZ2FpbigpO1xyXG4gICAgICAgIGRpc3BsYXlGb3JtVGFzayhhbnN3ZXIpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYW5zd2VyTm8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlBZ2FpbigpO1xyXG4gICAgICAgIGRpc3BsYXlGb3JtVGFzayhhbnN3ZXIpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUFnYWluKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBhbnN3ZXIgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGFuc3dlcik7IFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpOyAgXHJcbiAgICAgICAgIH1cclxuICAgICAgcmV0dXJuIGFuc3dlcjtcclxuICAgICAgfTsgXHJcblxyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5Rm9ybVRhc2soYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGFuc3dlciA9PSAnbm90aGluZycpIHsgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgaWYoYW5zd2VyID09ICdubycpIHtcclxuICAgICAgICAgICAgICAgIC8qICBmdW5jaW9uIHF1ZSBlbnbDrWUgYSBsb2NhbCBzdG9yYWdlIGVsIHByb2plY3RvIGNvbXBsZXRvIGFjdHVhbGl6YWRvICAgKi9cclxuICAgICAgICAgICAgICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICAvKiAgZnVuY2lvbiBxdWUgbGltcGllIGVsIGNvbnRhaW5lciBkZSBsYSBmb3JtYSAgeSByZWdyZXNlIGFsIGNvbnRhaW5lciBkZSBpbXByZXNpb24gICovXHJcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5mb3JtQm94Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgICAgICAgICAgICAgIGFycmF5UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAvKiAgbGxhbWFyIGRlIG51ZXZvIGEgbGEgZnVuY2lvbiBkZSBwcmludFByb2plY3QgICovXHJcbiAgICAgICAgICAgICAgICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2lnbmFyIGZ1bmNpb24gcGFyYSBOT1wiKTsgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8qICBsbGFtYXIgYSBsYSBmdW5jaW9uIG5ld1Rhc2sgcGFzYW5kbyBsYSBjbGFzZSwgZWwgaWQsIGVsIGNvbnRhaW5lciB5IGVsIGFycmF5ICAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgbmV3VGFzayhUYXNrLGlkLGZvcm1Db250YWluZXIsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNpZ25hciBmdW5jaW9uIHBhcmEgWUVTXCIpOyAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9O1xyXG4gICBcclxuXHJcbiAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGQpO1xyXG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChhc2tpbmdNZXNzYWdlKTtcclxuICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoYW5zd2VyT3B0aW9ucyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQobGFiZWxGb3JZZXMpO1xyXG4gICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGFuc3dlclllcyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQobGFiZWxGb3JObyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQoYW5zd2VyTm8pO1xyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyphcmcxIGlzIHRoZSBjbGFzcyBvZiB0aGUgY29udGFpbmVyIGZvciByZW1vdmUgKi9cclxuICAgIGxldCBjbGFzc1RvUmVtb3ZlID0gYXJnMTtcclxuICAgIC8qIGxpbXBpYSBlbCBjb250ZW5pZG8gYW50ZXJpb3IgKi9cclxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgaWYgKCBjb250ZW50SW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudEluZm8ucmVtb3ZlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uIG5vdCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKGFyZzEsYXJnMikge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIGNsYXNzIGZvciB0aGUgbmV3IGNvbnRhaW5lciAtIHRoZSBhcmcyIGlzIHRoZSBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBuZXcgY29udGFpbmVyICAgKi9cclxuICAgIGxldCBjbGFzc1RvQWRkID0gYXJnMSA7XHJcbiAgICBsZXQgIGlkRm9yQ29udGFpbmVyID0gYXJnMjtcclxuICAgXHJcbiAgICAvKiBjcmVhIHVuIG51ZXZvIGNvbnRhaW5lciAqL1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsaWRGb3JDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4iLCJpbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBkZWxldGVPYmplY3RzKGFyZzEsYXJnMikge1xyXG5cclxuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpID09PSB0cnVlKSB7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2cgKGFycmF5UHJvamVjdHMpO1xyXG5cclxuICAgIGxldCBnZXRJbmRleCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdkYXRhJyk7IFxyXG5cclxuICAgIGxldCBhID0gZ2V0SW5kZXguaW5kZXhPZigneCcpO1xyXG4gICAgbGV0IGIgPSBhICsxO1xyXG4gICAgbGV0IGVuZCA9IGdldEluZGV4Lmxlbmd0aDtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3RJZCA9IGdldEluZGV4LnNsaWNlKDAsYSk7XHJcbiAgICBwcm9qZWN0SWQgPSBOdW1iZXIocHJvamVjdElkKTtcclxuICAgIFxyXG4gICAgbGV0IGlPZkFycmF5ID0gZ2V0SW5kZXguc2xpY2UoYixlbmQpO1xyXG4gICAgaU9mQXJyYXkgPSBOdW1iZXIoaU9mQXJyYXkpO1xyXG4gICAgXHJcbiAgICBsZXQgaXRlbSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICBpdGVtID0gYXJyYXlQcm9qZWN0c1tpXVtcImlkXCJdO1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBpZiAoaXRlbSA9PSBwcm9qZWN0SWQpe1xyXG4gICAgICAgIGFycmF5UHJvamVjdHNbaV1bXCJ0YXNrc1wiXS5wb3AoaU9mQXJyYXkpO1x0XHJcblxyXG4gICAgfSBcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRJbmRleC5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coYSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2coaU9mQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGlPZkFycmF5KTtcclxuXHJcbiAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuICAgIC8qIGZyb20gaGVyZSByZWZyZXNoIHRoZSBwcmludCBvZiB0aGUgcHJvamVjdCBhbmQgdGFza3MgKi9cclxuICAgIGNsZWFyQ29udGFpbmVycygnLnRhc2tzJyk7XHJcbiAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJyNwcm9qZWN0Jytwcm9qZWN0SWQ7XHJcbiAgICBjb25zdCBvcGVuRGl2ID0gKHRhcmdldCkgPT57IFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBvcGVuRGl2KHRhcmdldCk7XHJcbiAgICBcclxufVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxufSIsImltcG9ydCB0b2dnbGVEb25lVW5kb25lIGZyb20gJy4vc2V0dGluZ0NvbXBsZXRlJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBhc2tGb3JDb250aW51ZSBmcm9tICcuL2Fza0ZvckNvbnRpbnVlLmpzJztcclxuaW1wb3J0IHNvcnRPYmplY3RzIGZyb20gJy4vc29ydE9iamVjdHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2soYXJnMSxhcmcyLGFyZzMsYXJnNCkge1xyXG4gICAgLyogYXJnMSBpcyB0aGUgQ2xhc3MgVGFzayAtIGFyZzIgaXMgdGhlIHByb2plY3RJZCAtIGFyZzMgaXMgdGhlIGRpdiBjb250YWluZXIgZm9yIHRoZSB0YXNrRm9ybSBcclxuICAgIGFyZzQgZXMgZWwgYXJyYXlQcm9qZWN0cyAqL1xyXG5cclxubGV0IGlkID0gYXJnMjtcclxuY29uc29sZS5sb2coJ3BydWViYSBkZSBmdW5jaW9uIG5ld1Rhc2snKTtcclxuY29uc29sZS5sb2coaWQpO1xyXG5jb25zb2xlLmxvZyhhcmczKTtcclxubGV0IGFycmF5UHJvamVjdHMgPSBhcmc0OyBcclxuY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcblxyXG4vKiBjcmVhciBmb3JtYSBwYXJhIGNhcHRhciBsYSBudWV2YSB0YXJlYSAqL1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuY29uc3QgbGFiZWxGb3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvckR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbGFiZWxGb3JMb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JNZWRpYVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgbWVkaWFQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9ySGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvckNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGNoZWNrbGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICBjb25zdCBmaWVsZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtVGFzaycpO1xyXG5cclxuICAgbGFiZWxGb3JUaXRsZS5pbm5lclRleHQgPSBcIkFkZCB0aGUgdGl0bGUgb2YgdGhlIHRhc2s6IFwiO1xyXG4gICBsYWJlbEZvclRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKTtcclxuICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKTtcclxuICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0aXRsZScpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJyx0cnVlKTtcclxuXHJcblxyXG4gICBsYWJlbEZvckRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQWRkaXRpb25hbCBkZXNjcmlwdGlvbjogXCI7XHJcbiAgIGxhYmVsRm9yRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpO1xyXG4gICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpO1xyXG4gICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG5cclxuICAgbGFiZWxGb3JEdWVEYXRlLmlubmVyVGV4dCA9IFwiVGFzaydzIER1ZSBEYXRlOiBcIjtcclxuICAgbGFiZWxGb3JEdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywnZHVlRGF0ZVRhc2snKTtcclxuICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlVGFzaycpO1xyXG4gICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZHVlRGF0ZScpO1xyXG4gICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xyXG4gICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsdHJ1ZSk7XHJcblxyXG5cclxuICAgcHJpb3JpdHlJbnB1dC5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcclxuICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xyXG4gICBcclxuICAgbGFiZWxGb3JMb3dQcmlvcml0eS5pbm5lclRleHQgPSdsb3cnO1xyXG4gICBsYWJlbEZvckxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywnbG93Jyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdsb3cnKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLHRydWUpO1xyXG5cclxuICAgbGFiZWxGb3JNZWRpYVByaW9yaXR5LmlubmVyVGV4dCA9J21lZGlhJztcclxuICAgbGFiZWxGb3JNZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywnbWVkaWEnKTtcclxuICAgbWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICBtZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdtZWRpYScpO1xyXG4gICBtZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ21lZGlhJyk7XHJcblxyXG4gICBsYWJlbEZvckhpZ2hQcmlvcml0eS5pbm5lclRleHQgPSdoaWdoJztcclxuICAgbGFiZWxGb3JIaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdoaWdoJyk7XHJcbiAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ2hpZ2gnKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XHJcbiAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaGlnaCcpO1xyXG5cclxuICAgbGFiZWxGb3JOb3Rlcy5pbm5lclRleHQgPSBcIkFkZGl0aW9uYWwgbm90ZXM6IFwiO1xyXG4gICBsYWJlbEZvck5vdGVzLnNldEF0dHJpYnV0ZSgnZm9yJywnbm90ZXMnKTtcclxuICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnbm90ZXMnKTtcclxuICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdub3RlcycpO1xyXG4gICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuXHJcbiAgIGxhYmVsRm9yQ2hlY2tsaXN0LmlubmVyVGV4dCA9J0RPTkUnO1xyXG4gICBsYWJlbEZvckNoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NoZWNrbGlzdCcpO1xyXG4gICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tsaXN0Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NoZWNrbGlzdCcpO1xyXG4gICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnZmFsc2UnKTtcclxuXHJcbiAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFRhc2tcIjtcclxuICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xyXG4gICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xyXG5cclxuICAgYXJnMy5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDEpO1xyXG4gICBmaWVsZDEuYXBwZW5kQ2hpbGQobGFiZWxGb3JUaXRsZSk7XHJcbiAgIGZpZWxkMS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDIpO1xyXG4gICBmaWVsZDIuYXBwZW5kQ2hpbGQobGFiZWxGb3JEZXNjcmlwdGlvbik7XHJcbiAgIGZpZWxkMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDMpO1xyXG4gICBmaWVsZDMuYXBwZW5kQ2hpbGQobGFiZWxGb3JEdWVEYXRlKTtcclxuICAgZmllbGQzLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ0KTtcclxuICAgZmllbGQ0LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yTG93UHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvck1lZGlhUHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGlhUHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9ySGlnaFByaW9yaXR5KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkNSk7XHJcbiAgIGZpZWxkNS5hcHBlbmRDaGlsZChsYWJlbEZvck5vdGVzKTtcclxuICAgZmllbGQ1LmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkNik7XHJcbiAgIGZpZWxkNi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrbGlzdCk7XHJcbiAgIGZpZWxkNi5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ3KTtcclxuICAgZmllbGQ3LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgIH0pO1xyXG4gICBtZWRpYVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICAgfSk7XHJcbiAgIGhpZ2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgIH0pO1xyXG5cclxuICAgY2hlY2tsaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgdG9nZ2xlRG9uZVVuZG9uZShjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgbGV0IHByaW9yaXR5U2VsZWN0ZWQgPSAnJztcclxuICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgcHJpb3JpdHlTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5U2VsZWN0ZWQpOyBcclxuICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcIik7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgcmV0dXJuIHByaW9yaXR5U2VsZWN0ZWQ7XHJcbiAgICAgfTtcclxuICAgXHJcbiAgIC8qIGZpbmFsaXphIGxhIGZ1bmNpb24gcXVlIGNyZWEgZWwgZm9ybXVsYXJpbyAqL1xyXG5cclxuY29uc3QgcmVhZEFkZGVkVGFzayA9ICgpID0+IHsgICAgIC8qIGxlZSB5IGFyY2hpdmEgbGEgdGFyZWEgcXVlIGZ1ZSBhZ3JlZ2FkYSBhIHRyYXZlcyBkZWwgZm9ybXVsYXJpbyAqL1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICBsZXQgdGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuZXd0YXNrXCIpKTtcclxuICAgIGxldCBpZFQgPSB0YXNrLnByb2plY3RJZDtcclxuICAgIGxldCB0aXRsZSA9IHRhc2sudGl0bGU7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgbGV0IHByb2plY3RUb1B1c2ggPSBbXTtcclxuICAgIGxldCByZXN0ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmIChhcnJheVByb2plY3RzW2ldWydpZCddID09IGlkVCl7XHJcbiAgICAgICAgICAgIHByb2plY3RUb1B1c2gucHVzaChhcnJheVByb2plY3RzW2ldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVzdC5wdXNoKGFycmF5UHJvamVjdHNbaV0pOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUb1B1c2gpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdCk7XHJcbiAgICBsZXQgcmVzdExlbmd0aCA9IHJlc3QubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2cocmVzdExlbmd0aCk7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gcHJvamVjdFRvUHVzaFswXVsndGFza3MnXTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuICAgIGxldCB0YXNrc0xlbmd0aCA9IHRhc2tzLmxlbmd0aDtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzTGVuZ3RoKTtcclxuLyogYWdyZWdhciB1bmEgY29uZGljaW9uIHBhcmEgY3VhbmRvIGVsIGFycmF5IGVzIGxvbmdpdHVkIDAgeSBwYXJhIGN1YW5kbyB0aWVuZSBvdHJhcyB0YXJlYXMgKi9cclxuICAgIGlmICh0YXNrc0xlbmd0aD09MCl7XHJcbiAgICBwcm9qZWN0VG9QdXNoWzBdWyd0YXNrcyddID0gW3Rhc2tdO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvUHVzaCk7XHJcbiAgICB9ZWxzZXtcclxuICAgIHByb2plY3RUb1B1c2hbMF1bJ3Rhc2tzJ10ucHVzaCh0YXNrKTsgIFxyXG4gICAgfVxyXG4vKiBsdWVnbyBtb2RpZmljYXIgZWwgYXJyYXkgb3JpZ2luYWwgc3VtYW5kbyBlbCByZXN0IGNvbiBlbCBwcm95ZWN0byBkb25kZSBzZSBhZ3JlZ28gbGEgdGFyZWEgKi8gICBcclxuICAgIGlmIChyZXN0TGVuZ3RoPT0wKXtcclxuICAgICAgICBhcnJheVByb2plY3RzID0gcHJvamVjdFRvUHVzaDtcclxuICAgIH1lbHNle1xyXG4vKiB2YSBhIGFncmVnYXIgZWwgcHJveWVjdG8gbW9kaWZpY2FkbyBhbCBmaW5hbCAgKi8gICAgICAgXHJcbiAgICAgICAgYXJyYXlQcm9qZWN0cyA9IHJlc3QuY29uY2F0KHByb2plY3RUb1B1c2gpO1xyXG4vKiBvcmRlbmEgZWwgYXJyYXkgZGUgYWN1ZXJkbyBjb24gbG9zIGlkIGRlIGxvcyBwcm95ZWN0b3MgICovICBcclxuICAgICAgIGFycmF5UHJvamVjdHMgPSBzb3J0T2JqZWN0cyhhcnJheVByb2plY3RzKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG5cclxuICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6Ymx1ZTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnKTtcclxuICAgIGFyZzMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcbiAgICBcclxuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1RoZSBUYXNrICcrdGl0bGUrJyB3YXMgYWRkZWQgdG8gUHJvamVjdCAnK2lkVDtcclxuICBcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm5ld3Rhc2tcIik7XHJcblxyXG4gICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJyYXlQcm9qZWN0cyk7XHJcblxyXG59O1xyXG5cclxuY29uc3QgYXNraW5nQWdhaW4gPSAoKSA9PiB7IFxyXG4gIC8qIGFyZzEgaXMgdGhlIENsYXNzIFRhc2sgLSBhcmcyIGlzIHRoZSBwcm9qZWN0SWQgLSBhcmczIGlzIHRoZSBkaXYgY29udGFpbmVyIGZvciB0aGUgdGFza0Zvcm0gXHJcbiAgICBhcmc0IGVzIGVsIGFycmF5UHJvamVjdHMgKi8gIFxyXG4gICAgYXNrRm9yQ29udGludWUoYXJnMSxpZCxhcmczLGFycmF5UHJvamVjdHMpO1xyXG5cclxufSBcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIFxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlVGFzaycpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coZHVlRGF0ZVRhc2spO1xyXG5cclxuICAgIGxldCBwcmlvcml0eSA9IGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XHJcbiAgXHJcbiAgICBsZXQgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcclxuXHJcbiAgICBsZXQgY2hlY2tsaXN0ID0gdG9nZ2xlRG9uZVVuZG9uZShjaGVja2xpc3RJbnB1dCk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0SWQgPSAgaWQ7IFxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcclxuICBcclxuICAgIFxyXG4gICAgbGV0IHRhc2sgPSBuZXcgYXJnMSh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzLGNoZWNrbGlzdCxwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld3Rhc2tcIiwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG5cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UYXNrJykucmVzZXQoKTsgXHJcbiAgICBcclxuICAgIHJldHVybiB0YXNrO1xyXG4gIFxyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgcmVhZEFkZGVkVGFzayk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFza2luZ0FnYWluKTtcclxuIFxyXG5cclxucmV0dXJuIGFycmF5UHJvamVjdHM7XHJcbiAgIFxyXG5cclxufSIsImltcG9ydCB0b2dnbGVEb25lVW5kb25lIGZyb20gJy4vc2V0dGluZ0NvbXBsZXRlJztcclxuaW1wb3J0IGRlbGV0ZU9iamVjdHMgZnJvbSAnLi9kZWxldGVPYmplY3RzLmpzJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHByaW50UHJvTGlzdChhcmcxLCBhcmcyLCBhcmczKSB7XHJcbi8qIGVsIGFyZzEgZXMgZWwgZGl2IHByb2plY3RTaWRlIC0gZWwgYXJnMiBlcyBlbCBhcnJheVByb2plY3RzIG9idGVuaWRvIGRlIGxlZXIgZWwgbG9jYWxzdG9yYWdlIC0gZWwgYXJnIDMgZXMgZWwgZGl2IHByb2plY3RUYXNrcyovXHJcblxyXG5jb25zdCBwcm9qZWN0VGFza3MgPSBhcmczO1xyXG5cclxuY29uc29sZS5sb2coJ3BydWViYSBwcmludFByb0xpc3QnKTtcclxuXHJcbmNvbnN0IHByb2plY3RTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm8nKTtcclxuXHJcbmFyZzEuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVCYXIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcmcyLmxlbmd0aCk7ICBcclxuICAgIFxyXG4gICAgICAgIC8qIGltcHJpbWUgZWwgYXJyYXkgZGUgbG9zIHByb3llY3RvcyAqL1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXJnMltpXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0VhY2hQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybWVkaWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xyXG4gICAgICAgICAgICBzaG93VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvVGl0bGUnKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5jbGFzc0xpc3QuYWRkKCdzdWJTaWRlQmFyJyk7XHJcbiAgICAgICAgICAgIHNob3dJZC5jbGFzc0xpc3QuYWRkKCdwcm9JZCcpO1xyXG4gICAgICAgICAgICBzaG93VGFza3MudGV4dENvbnRlbnQgPSBcIlNIT1cgVEFTS1NcIjtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICdidG5UYXNrJytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2snKTsgXHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAnI3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBvcGVuRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRhc2snKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFza1Rlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tUZXN0LmlubmVyVGV4dCA9ICdQUk9KRUNUICcrY3VycmVudFByb2plY3QuaWQrJyAgJytjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgaGlkZVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy50ZXh0Q29udGVudCA9IFwiSElERSBUQVNLU1wiO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnaGlkZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcblxyXG4gICAgICAgICAgICBoaWRlVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvc2VEaXYodGFyZ2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5VGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcblxyXG4gICAgICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxhcyB0YXJlYXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5VGFza3MubGVuZ3RoOyBpKyspIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVhY2hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPWFycmF5VGFza3NbaV1bXCJkdWVEYXRlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVjaGFmb3JtYXRlYWRhID0gY3VycmVudER1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlcy1lYycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lOiAnVVRDJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWNoYWZvcm1hdGVhZGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5jbGFzc0xpc3QuYWRkKCdlYWNoVGFzaycpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSAnVGFzazogICcrYXJyYXlUYXNrc1tpXVtcInRpdGxlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGV0YWlsczogICcrYXJyYXlUYXNrc1tpXVtcImRlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogICcrZmVjaGFmb3JtYXRlYWRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICcrYXJyYXlUYXNrc1tpXVtcInByaW9yaXR5XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tOb3Rlcy5pbm5lclRleHQgPSAnQWRkaXRpb25hbCBub3RlczogJythcnJheVRhc2tzW2ldW1wibm90ZXNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXZEZWxldGVCdXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBjdXJyZW50UHJvamVjdC5pZCsneCcraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bjMnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5pbm5lclRleHQgPSdET05FJztcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvaicrY3VycmVudFByb2plY3QuaWQrJ3Rhc2snK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9PT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0PScnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QgPSB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnMiA9IHVwZGF0ZShjdXJyZW50UHJvamVjdCxhcnJheVRhc2tzLGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9IGNoZWNrbGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZzI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlT2JqZWN0cyhkZWxldGVCdXR0b24sYXJnMik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlRGl2LmFwcGVuZENoaWxkKGVhY2hUYXNrKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza05vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChjaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChkaXZEZWxldGVCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgc2hvd1RpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBzaG93SWQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0IGlkOiBcIiArY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdFNpZGVCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc2hvd1RpdGxlKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5hcHBlbmRDaGlsZChzdWJTaWRlKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93SWQpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmFwcGVuZENoaWxkKHNob3dUYXNrcyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrRWFjaFByb2plY3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza3MpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5hcHBlbmRDaGlsZChoZWFkZXJUYXNrVGVzdCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChpbnRlcm1lZGlhdGVEaXYpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGlkZVRhc2tzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBvcGVuRGl2KHRhcmdldCkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICggZGl2ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25lZWQgcmVmcmVzaCBmb3IgdXBkYXRlcycpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZURpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnbW9zdHJhcicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyZzE7ICAgIFxyXG5cclxuIFxyXG4gIH07XHJcbiAgXHJcbiIsImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBzZW5kRGF0YVRvTG9jYWwoYXJnMSxhcmcyKSB7XHJcblxyXG4vKiBhcmcxIGlzIHRoZSBuYW1lIG9mIHRoZSBrZXkgLSBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIHRoZSBkYXRhICovXHJcblxyXG5sZXQga2V5ID0gYXJnMTtcclxubGV0IGRhdGFUb1NlbmQgPSBhcmcyO1xyXG5cclxuY29uc29sZS5sb2coa2V5KTtcclxuY29uc29sZS5sb2coZGF0YVRvU2VuZCk7XHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGFUb1NlbmQpKTtcclxuXHJcblxyXG4gICBcclxufSIsImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVEb25lVW5kb25lKGFyZykge1xyXG5cclxuICAgIC8qIGVsIGFyZyBlcyBlbCBpbnB1dCBjaGVja2JveCAqL1xyXG4gICAgbGV0IGNoZWNrbGlzdElucHV0ID0gYXJnO1xyXG4gICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBjaGVja2xpc3RJbnB1dC52YWx1ZTsgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTtcclxuICAgIGxldCBjaGVja2xpc3QgPSAnJztcclxuICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ2ZhbHNlJykgeyAgIFxyXG4gICAgICAgIGNoZWNrbGlzdCA9ICd0cnVlJztcclxuICAgIH1lbHNlIHsgXHJcbiAgICAgICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICBjaGVja2xpc3QgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTsgXHJcbiByZXR1cm4gY2hlY2tsaXN0O1xyXG5cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gc29ydE9iamVjdHMoYXJnKSB7XHJcbiAgIFxyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmc7IFxyXG5cclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBsZXQgYXJyYXlJZCA9IFtdO1xyXG4gICAgbGV0IGl0ZW0gPSAwO1xyXG4gXHJcbiBcclxuICAgIGZ1bmN0aW9uIHNvcnRJZCgpe1xyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICBhcnJheUlkLnB1c2goaXRlbSk7XHJcbiAgICAgY29uc29sZS5sb2coYXJyYXlJZCk7XHJcbiAgICAgYXJyYXlJZC5zb3J0KCk7XHJcbiAgICAgfTsgXHJcbiAgICAgcmV0dXJuIGFycmF5SWQ7XHJcbiAgICAgfTtcclxuICAgICBcclxuICAgICBsZXQgaWRTb3J0ZWQgPSBzb3J0SWQoKTtcclxuICAgICBjb25zb2xlLmxvZyhpZFNvcnRlZCk7XHJcbiAgICAgXHJcbiAgICAgbGV0IGN1cnJlbnRJZCA9IDA7XHJcbiAgICAgbGV0IGFycmF5U29ydGVkID0gW107XHJcbiAgICAgXHJcbiAgICAgZnVuY3Rpb24gc29ydEFycmF5T2JqZWN0KGlkU29ydGVkLGFycmF5UHJvamVjdHMpe1xyXG4gICAgIFxyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRTb3J0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgY3VycmVudElkID0gaWRTb3J0ZWRbaV07XHJcbiAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVByb2plY3RzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgaWYoIGN1cnJlbnRJZCA9PSBhcnJheVByb2plY3RzW2pdW1wiaWRcIl0gKXtcclxuICAgICAgICAgICAgICAgICAgIGFycmF5U29ydGVkLnB1c2goYXJyYXlQcm9qZWN0c1tqXSk7XHJcbiAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgIH07XHRcclxuICAgICB9O1xyXG4gICAgIGNvbnNvbGUubG9nKGFycmF5U29ydGVkKTtcclxuICAgICByZXR1cm4gYXJyYXlTb3J0ZWQ7IFxyXG4gICAgIH07XHJcbiAgICAgXHJcbiAgICAgYXJyYXlQcm9qZWN0cyA9IHNvcnRBcnJheU9iamVjdChpZFNvcnRlZCxhcnJheVByb2plY3RzKTtcclxuICAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxucmV0dXJuIGFycmF5UHJvamVjdHM7XHJcblxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==