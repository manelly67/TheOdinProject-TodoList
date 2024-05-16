"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["prepareForTask"],{

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

/***/ "./src/components/closeAndRefresh.js":
/*!*******************************************!*\
  !*** ./src/components/closeAndRefresh.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeAndRefresh)
/* harmony export */ });
/* harmony import */ var _clearContainers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContainers.js */ "./src/components/clearContainers.js");
/* harmony import */ var _createContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createContainer.js */ "./src/components/createContainer.js");
/* harmony import */ var _printProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printProject.js */ "./src/components/printProject.js");





function closeAndRefresh(arg) {

    /* the arg is the array with the projects */
      (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.formBox'); 
      (0,_createContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"])('tasks','projectTasks');
        (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.sidebarPro');
        let projectSide = document.querySelector('.sidebar');
        console.log(projectSide);
        let projectTasks = document.querySelector('.tasks');
        console.log(projectTasks);
        let arrayProjects = arg;
        console.log(arrayProjects);
        /*  llamar de nuevo a la funcion de printProject  */
        (0,_printProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectSide,arrayProjects,projectTasks);


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

/***/ "./src/components/preAddTask.js":
/*!**************************************!*\
  !*** ./src/components/preAddTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prepareForTask)
/* harmony export */ });
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask.js */ "./src/components/newTask.js");
/* harmony import */ var _closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeAndRefresh.js */ "./src/components/closeAndRefresh.js");



function prepareForTask(arg1,arg2) {

/* arg1 is the Class Project    arg2 is the Class Task   */ 

console.log('prueba de prepare for Task');
    
    let arrayProjects = new arg1(0,'',[],'');
    let arrayProjectsLength = 0;
   
    const Task = arg2;
    console.log(Task);
  
    const projectList = JSON.parse(localStorage.getItem("projects"));

    const mensaje = document.createElement('p');
    
    /* inicio obtener del objeto json leido los datos principales necesarios */
        if (projectList !== null ) {
        arrayProjects = projectList;
        arrayProjectsLength = arrayProjects.length;
        mensaje.innerText = 'Select the project where the tasks will be added';
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
    

            for (let i = 0; i < arrayProjectsLength; i++) {
                const div = document.createElement('div');
                const labelForOpcion = document.createElement('label');
                const opcion = document.createElement('input');


            labelForOpcion.innerText = 'Project Nro '+ arrayProjects[i]['id'] + ' ' + arrayProjects[i]['title'];
            labelForOpcion.setAttribute('style','text-transform:capitalize;');
            labelForOpcion.setAttribute('for',arrayProjects[i]['id']);
            opcion.setAttribute('type','radio');
            opcion.setAttribute('id',arrayProjects[i]['id']);
            opcion.setAttribute('name','id');
            opcion.setAttribute('value',arrayProjects[i]['id']);

            opcion.addEventListener('change', () => {
                displayRadioValue();
              });
            
            displayProjects.appendChild(div);
            div.appendChild(labelForOpcion);
            div.appendChild(opcion);
            }
            
            let idP = 0;
            let title = '';
            function displayRadioValue() {
        
                let getSelectedValue = document.querySelector( 'input[name="id"]:checked');   
                
                if(getSelectedValue != null) {   
                 idP = getSelectedValue.value;
                 console.log(getSelectedValue); 
                 console.log(idP); 
                    for (let i = 0; i < arrayProjectsLength; i++){
                        if (arrayProjects[i]['id'] == idP){
                            title = arrayProjects[i]['title'];
                        }
                    }
                console.log(title); 
                 }else {  
                 console.log("Nothing has been selected");  
                 }
            
                 if (idP !== 0){
                   
                   mensaje.classList.add('ocultar');
                   displayProjects.remove();
                    
                    const projectSelected = document.createElement('p');
                    projectSelected.innerText = 'Project Nro '+ idP + ' ' + title;
                    formContainer.appendChild(projectSelected);

                    (0,_newTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Task,idP,formContainer,arrayProjects);

                }

              };

   

    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      (0,_closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayProjects)
    });
    
    formContainer.appendChild(closeButton);
    formContainer.appendChild(mensaje);
    formContainer.appendChild(displayProjects);



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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/preAddTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXNrRm9yQ29udGludWUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NsZWFyQ29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY2xvc2VBbmRSZWZyZXNoLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ByZUFkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2VuZERhdGFUb0xvY2FsLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NvcnRPYmplY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdUYXNrIGZyb20gJy4vbmV3VGFzay5qcyc7XHJcbmltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5pbXBvcnQgY2xlYXJDb250YWluZXJzIGZyb20gJy4vY2xlYXJDb250YWluZXJzLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBwcmludFByb0xpc3QgZnJvbSAnLi9wcmludFByb2plY3QuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIGFza0ZvckNvbnRpbnVlKGFyZzEsYXJnMixhcmczLGFyZzQpIHtcclxuICAgIFxyXG4gICAgLyogYXJnMSBpcyB0aGUgQ2xhc3MgVGFzayAtIGFyZzIgaXMgdGhlIHByb2plY3RJZCAtIGFyZzMgaXMgdGhlIGRpdiBjb250YWluZXIgZm9yIHRoZSB0YXNrRm9ybSBcclxuICAgIGFyZzQgZXMgZWwgYXJyYXlQcm9qZWN0cyAqLyAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmEgZGUgZnVuY2lvbiBhc2tpbmcgZm9yIGNvbnRpbnVlJyk7XHJcblxyXG4gICAgbGV0IFRhc2sgPSBhcmcxO1xyXG4gICAgICAgXHJcbiAgICBsZXQgaWQgPSBhcmcyO1xyXG4gICAgY29uc29sZS5sb2coJ3BydWViYSBkZSBsZWN0dXJhIGRlIGlkOiAnK2lkKTtcclxuXHJcbiAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGFyZzM7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzQ7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBhc2tpbmdNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYW5zd2VyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JZZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgYW5zd2VyWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgYW5zd2VyTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcblxyXG4gICAgYXNraW5nTWVzc2FnZS5pbm5lclRleHQgPSdEbyB5b3Ugd2FudCBDT05USU5VRSBBRERJTkcgVEFTS1M/JztcclxuICAgIFxyXG4gICAgbGFiZWxGb3JZZXMuc2V0QXR0cmlidXRlKCdmb3InLCd5ZXMnKTtcclxuICAgIGxhYmVsRm9yWWVzLmlubmVyVGV4dCA9ICdZRVMnO1xyXG4gICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgnaWQnLCd5ZXMnKTtcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywneWVzJyk7XHJcbiAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCduYW1lJywnYW5zd2VyJyk7XHJcbiAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIGxhYmVsRm9yTm8uc2V0QXR0cmlidXRlKCdmb3InLCdubycpO1xyXG4gICAgbGFiZWxGb3JOby5pbm5lclRleHQgPSdOTyc7XHJcbiAgICBhbnN3ZXJOby5zZXRBdHRyaWJ1dGUoJ2lkJywnbm8nKTtcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdubycpO1xyXG4gICAgYW5zd2VyTm8uc2V0QXR0cmlidXRlKCduYW1lJywnYW5zd2VyJyk7XHJcbiAgICBhbnN3ZXJOby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG5cclxuICAgbGV0IGFuc3dlcj0nbm90aGluZyc7ICAgIFxyXG4gICAgYW5zd2VyWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5QWdhaW4oKTtcclxuICAgICAgICBkaXNwbGF5Rm9ybVRhc2soYW5zd2VyKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFuc3dlck5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5QWdhaW4oKTtcclxuICAgICAgICBkaXNwbGF5Rm9ybVRhc2soYW5zd2VyKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZ2FpbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiYW5zd2VyXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgYW5zd2VyID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7IFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpOyBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aGluZyBoYXMgYmVlbiBzZWxlY3RlZFwiKTsgIFxyXG4gICAgICAgICB9XHJcbiAgICAgIHJldHVybiBhbnN3ZXI7XHJcbiAgICAgIH07IFxyXG5cclxuICAgICAgZnVuY3Rpb24gZGlzcGxheUZvcm1UYXNrKGFuc3dlcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihhbnN3ZXIgPT0gJ25vdGhpbmcnKSB7ICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aGluZyBoYXMgYmVlbiBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIGlmKGFuc3dlciA9PSAnbm8nKSB7XHJcbiAgICAgICAgICAgICAgICAvKiAgZnVuY2lvbiBxdWUgZW52w61lIGEgbG9jYWwgc3RvcmFnZSBlbCBwcm9qZWN0byBjb21wbGV0byBhY3R1YWxpemFkbyAgICovXHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgLyogIGZ1bmNpb24gcXVlIGxpbXBpZSBlbCBjb250YWluZXIgZGUgbGEgZm9ybWEgIHkgcmVncmVzZSBhbCBjb250YWluZXIgZGUgaW1wcmVzaW9uICAqL1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDb250YWluZXJzKCcuZm9ybUJveCcpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUYXNrcyk7XHJcbiAgICAgICAgICAgICAgICBhcnJheVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgLyogIGxsYW1hciBkZSBudWV2byBhIGxhIGZ1bmNpb24gZGUgcHJpbnRQcm9qZWN0ICAqL1xyXG4gICAgICAgICAgICAgICAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNpZ25hciBmdW5jaW9uIHBhcmEgTk9cIik7ICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvKiAgbGxhbWFyIGEgbGEgZnVuY2lvbiBuZXdUYXNrIHBhc2FuZG8gbGEgY2xhc2UsIGVsIGlkLCBlbCBjb250YWluZXIgeSBlbCBhcnJheSAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgIG5ld1Rhc2soVGFzayxpZCxmb3JtQ29udGFpbmVyLGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzaWduYXIgZnVuY2lvbiBwYXJhIFlFU1wiKTsgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfTtcclxuICAgXHJcblxyXG4gICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkKTtcclxuICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoYXNraW5nTWVzc2FnZSk7XHJcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKGFuc3dlck9wdGlvbnMpO1xyXG4gICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGxhYmVsRm9yWWVzKTtcclxuICAgICAgYW5zd2VyT3B0aW9ucy5hcHBlbmRDaGlsZChhbnN3ZXJZZXMpO1xyXG4gICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGxhYmVsRm9yTm8pO1xyXG4gICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGFuc3dlck5vKTtcclxuXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250YWluZXJzKGFyZzEpIHtcclxuICAgIC8qYXJnMSBpcyB0aGUgY2xhc3Mgb2YgdGhlIGNvbnRhaW5lciBmb3IgcmVtb3ZlICovXHJcbiAgICBsZXQgY2xhc3NUb1JlbW92ZSA9IGFyZzE7XHJcbiAgICAvKiBsaW1waWEgZWwgY29udGVuaWRvIGFudGVyaW9yICovXHJcbiAgICBsZXQgY29udGVudEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzVG9SZW1vdmUpO1xyXG5cclxuICAgIGlmICggY29udGVudEluZm8gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnRJbmZvLnJlbW92ZSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGlvbiBub3QgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgIiwiaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZUFuZFJlZnJlc2goYXJnKSB7XHJcblxyXG4gICAgLyogdGhlIGFyZyBpcyB0aGUgYXJyYXkgd2l0aCB0aGUgcHJvamVjdHMgKi9cclxuICAgICAgY2xlYXJDb250YWluZXJzKCcuZm9ybUJveCcpOyBcclxuICAgICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgICAgIGNsZWFyQ29udGFpbmVycygnLnNpZGViYXJQcm8nKTtcclxuICAgICAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgICAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZztcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgICAgICAvKiAgbGxhbWFyIGRlIG51ZXZvIGEgbGEgZnVuY2lvbiBkZSBwcmludFByb2plY3QgICovXHJcbiAgICAgICAgcHJpbnRQcm9MaXN0KHByb2plY3RTaWRlLGFycmF5UHJvamVjdHMscHJvamVjdFRhc2tzKTtcclxuXHJcblxyXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSxhcmcyKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgY2xhc3MgZm9yIHRoZSBuZXcgY29udGFpbmVyIC0gdGhlIGFyZzIgaXMgdGhlIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIG5ldyBjb250YWluZXIgICAqL1xyXG4gICAgbGV0IGNsYXNzVG9BZGQgPSBhcmcxIDtcclxuICAgIGxldCAgaWRGb3JDb250YWluZXIgPSBhcmcyO1xyXG4gICBcclxuICAgIC8qIGNyZWEgdW4gbnVldm8gY29udGFpbmVyICovXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJyxpZEZvckNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiIsImltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5pbXBvcnQgY2xlYXJDb250YWluZXJzIGZyb20gJy4vY2xlYXJDb250YWluZXJzLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBwcmludFByb0xpc3QgZnJvbSAnLi9wcmludFByb2plY3QuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdHMoYXJnMSxhcmcyKSB7XHJcblxyXG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIikgPT09IHRydWUpIHtcclxuICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnMjtcclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyAoYXJyYXlQcm9qZWN0cyk7XHJcblxyXG4gICAgbGV0IGdldEluZGV4ID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTsgXHJcblxyXG4gICAgbGV0IGEgPSBnZXRJbmRleC5pbmRleE9mKCd4Jyk7XHJcbiAgICBsZXQgYiA9IGEgKzE7XHJcbiAgICBsZXQgZW5kID0gZ2V0SW5kZXgubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdElkID0gZ2V0SW5kZXguc2xpY2UoMCxhKTtcclxuICAgIHByb2plY3RJZCA9IE51bWJlcihwcm9qZWN0SWQpO1xyXG4gICAgXHJcbiAgICBsZXQgaU9mQXJyYXkgPSBnZXRJbmRleC5zbGljZShiLGVuZCk7XHJcbiAgICBpT2ZBcnJheSA9IE51bWJlcihpT2ZBcnJheSk7XHJcbiAgICBcclxuICAgIGxldCBpdGVtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKSB7XHJcbiAgICBcclxuICAgIGl0ZW0gPSBhcnJheVByb2plY3RzW2ldW1wiaWRcIl07XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGlmIChpdGVtID09IHByb2plY3RJZCl7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0c1tpXVtcInRhc2tzXCJdLnBvcChpT2ZBcnJheSk7XHRcclxuXHJcbiAgICB9IFxyXG4gICAgY29uc29sZS5sb2cgKGFycmF5UHJvamVjdHMpO1xyXG4gXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGdldEluZGV4Lmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhhKTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBhKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyhpT2ZBcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgaU9mQXJyYXkpO1xyXG5cclxuICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFycmF5UHJvamVjdHMpO1xyXG4gICAgLyogZnJvbSBoZXJlIHJlZnJlc2ggdGhlIHByaW50IG9mIHRoZSBwcm9qZWN0IGFuZCB0YXNrcyAqL1xyXG4gICAgY2xlYXJDb250YWluZXJzKCcudGFza3MnKTtcclxuICAgIGNyZWF0ZUNvbnRhaW5lcigndGFza3MnLCdwcm9qZWN0VGFza3MnKTtcclxuICAgIGNsZWFyQ29udGFpbmVycygnLnNpZGViYXJQcm8nKTtcclxuICAgIGxldCBwcm9qZWN0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2lkZSk7XHJcbiAgICBsZXQgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xyXG4gICAgcHJpbnRQcm9MaXN0KHByb2plY3RTaWRlLGFycmF5UHJvamVjdHMscHJvamVjdFRhc2tzKTtcclxuICAgIGxldCB0YXJnZXQgPSAnI3Byb2plY3QnK3Byb2plY3RJZDtcclxuICAgIGNvbnN0IG9wZW5EaXYgPSAodGFyZ2V0KSA9PnsgXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgIGlmICggZGl2ICE9PSBudWxsKXtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbW9zdHJhcicpOyBcclxuICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25lZWQgcmVmcmVzaCBmb3IgdXBkYXRlcycpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgIG9wZW5EaXYodGFyZ2V0KTtcclxuICAgIFxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG59IiwiaW1wb3J0IHRvZ2dsZURvbmVVbmRvbmUgZnJvbSAnLi9zZXR0aW5nQ29tcGxldGUnO1xyXG5pbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGFza0ZvckNvbnRpbnVlIGZyb20gJy4vYXNrRm9yQ29udGludWUuanMnO1xyXG5pbXBvcnQgc29ydE9iamVjdHMgZnJvbSAnLi9zb3J0T2JqZWN0cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gbmV3VGFzayhhcmcxLGFyZzIsYXJnMyxhcmc0KSB7XHJcbiAgICAvKiBhcmcxIGlzIHRoZSBDbGFzcyBUYXNrIC0gYXJnMiBpcyB0aGUgcHJvamVjdElkIC0gYXJnMyBpcyB0aGUgZGl2IGNvbnRhaW5lciBmb3IgdGhlIHRhc2tGb3JtIFxyXG4gICAgYXJnNCBlcyBlbCBhcnJheVByb2plY3RzICovXHJcblxyXG5sZXQgaWQgPSBhcmcyO1xyXG5jb25zb2xlLmxvZygncHJ1ZWJhIGRlIGZ1bmNpb24gbmV3VGFzaycpO1xyXG5jb25zb2xlLmxvZyhpZCk7XHJcbmNvbnNvbGUubG9nKGFyZzMpO1xyXG5sZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzQ7IFxyXG5jb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuXHJcbi8qIGNyZWFyIGZvcm1hIHBhcmEgY2FwdGFyIGxhIG51ZXZhIHRhcmVhICovXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5jb25zdCBsYWJlbEZvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBsYWJlbEZvckxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvck1lZGlhUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBtZWRpYVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JIaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvck5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgIGNvbnN0IGZpZWxkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm1UYXNrJyk7XHJcblxyXG4gICBsYWJlbEZvclRpdGxlLmlubmVyVGV4dCA9IFwiQWRkIHRoZSB0aXRsZSBvZiB0aGUgdGFzazogXCI7XHJcbiAgIGxhYmVsRm9yVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RpdGxlJyk7XHJcbiAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLHRydWUpO1xyXG5cclxuXHJcbiAgIGxhYmVsRm9yRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJBZGRpdGlvbmFsIGRlc2NyaXB0aW9uOiBcIjtcclxuICAgbGFiZWxGb3JEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzY3JpcHRpb24nKTtcclxuICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcblxyXG4gICBsYWJlbEZvckR1ZURhdGUuaW5uZXJUZXh0ID0gXCJUYXNrJ3MgRHVlIERhdGU6IFwiO1xyXG4gICBsYWJlbEZvckR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlVGFzaycpO1xyXG4gICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGVUYXNrJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkdWVEYXRlJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJyx0cnVlKTtcclxuXHJcblxyXG4gICBwcmlvcml0eUlucHV0LmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xyXG4gICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XHJcbiAgIFxyXG4gICBsYWJlbEZvckxvd1ByaW9yaXR5LmlubmVyVGV4dCA9J2xvdyc7XHJcbiAgIGxhYmVsRm9yTG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdsb3cnKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xvdycpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsdHJ1ZSk7XHJcblxyXG4gICBsYWJlbEZvck1lZGlhUHJpb3JpdHkuaW5uZXJUZXh0ID0nbWVkaWEnO1xyXG4gICBsYWJlbEZvck1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdtZWRpYScpO1xyXG4gICBtZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ21lZGlhJyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcclxuICAgbWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbWVkaWEnKTtcclxuXHJcbiAgIGxhYmVsRm9ySGlnaFByaW9yaXR5LmlubmVyVGV4dCA9J2hpZ2gnO1xyXG4gICBsYWJlbEZvckhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2hpZ2gnKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnaGlnaCcpO1xyXG4gICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdoaWdoJyk7XHJcblxyXG4gICBsYWJlbEZvck5vdGVzLmlubmVyVGV4dCA9IFwiQWRkaXRpb25hbCBub3RlczogXCI7XHJcbiAgIGxhYmVsRm9yTm90ZXMuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpO1xyXG4gICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdub3RlcycpO1xyXG4gICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ25vdGVzJyk7XHJcbiAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG5cclxuICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0nRE9ORSc7XHJcbiAgIGxhYmVsRm9yQ2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnZm9yJywnY2hlY2tsaXN0Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2xpc3QnKTtcclxuICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnY2hlY2tsaXN0Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdmYWxzZScpO1xyXG5cclxuICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVGFza1wiO1xyXG4gICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XHJcblxyXG4gICBhcmczLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMSk7XHJcbiAgIGZpZWxkMS5hcHBlbmRDaGlsZChsYWJlbEZvclRpdGxlKTtcclxuICAgZmllbGQxLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMik7XHJcbiAgIGZpZWxkMi5hcHBlbmRDaGlsZChsYWJlbEZvckRlc2NyaXB0aW9uKTtcclxuICAgZmllbGQyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkMyk7XHJcbiAgIGZpZWxkMy5hcHBlbmRDaGlsZChsYWJlbEZvckR1ZURhdGUpO1xyXG4gICBmaWVsZDMuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDQpO1xyXG4gICBmaWVsZDQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JMb3dQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yTWVkaWFQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaWFQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIaWdoUHJpb3JpdHkpO1xyXG4gICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ1KTtcclxuICAgZmllbGQ1LmFwcGVuZENoaWxkKGxhYmVsRm9yTm90ZXMpO1xyXG4gICBmaWVsZDUuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQ2KTtcclxuICAgZmllbGQ2LmFwcGVuZENoaWxkKGxhYmVsRm9yQ2hlY2tsaXN0KTtcclxuICAgZmllbGQ2LmFwcGVuZENoaWxkKGNoZWNrbGlzdElucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDcpO1xyXG4gICBmaWVsZDcuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICAgfSk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgICB9KTtcclxuICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICBjaGVja2xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgICB9KTtcclxuXHJcblxyXG4gICBsZXQgcHJpb3JpdHlTZWxlY3RlZCA9ICcnO1xyXG4gICBmdW5jdGlvbiBkaXNwbGF5UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICBwcmlvcml0eVNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpb3JpdHlTZWxlY3RlZCk7IFxyXG4gICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aGluZyBoYXMgYmVlbiBzZWxlY3RlZFwiKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICByZXR1cm4gcHJpb3JpdHlTZWxlY3RlZDtcclxuICAgICB9O1xyXG4gICBcclxuICAgLyogZmluYWxpemEgbGEgZnVuY2lvbiBxdWUgY3JlYSBlbCBmb3JtdWxhcmlvICovXHJcblxyXG5jb25zdCByZWFkQWRkZWRUYXNrID0gKCkgPT4geyAgICAgLyogbGVlIHkgYXJjaGl2YSBsYSB0YXJlYSBxdWUgZnVlIGFncmVnYWRhIGEgdHJhdmVzIGRlbCBmb3JtdWxhcmlvICovXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgIGxldCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5ld3Rhc2tcIikpO1xyXG4gICAgbGV0IGlkVCA9IHRhc2sucHJvamVjdElkO1xyXG4gICAgbGV0IHRpdGxlID0gdGFzay50aXRsZTtcclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBsZXQgcHJvamVjdFRvUHVzaCA9IFtdO1xyXG4gICAgbGV0IHJlc3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKGFycmF5UHJvamVjdHNbaV1bJ2lkJ10gPT0gaWRUKXtcclxuICAgICAgICAgICAgcHJvamVjdFRvUHVzaC5wdXNoKGFycmF5UHJvamVjdHNbaV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXN0LnB1c2goYXJyYXlQcm9qZWN0c1tpXSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvUHVzaCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0KTtcclxuICAgIGxldCByZXN0TGVuZ3RoID0gcmVzdC5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0TGVuZ3RoKTtcclxuXHJcbiAgICBsZXQgdGFza3MgPSBwcm9qZWN0VG9QdXNoWzBdWyd0YXNrcyddO1xyXG4gICAgY29uc29sZS5sb2codGFza3MpO1xyXG4gICAgbGV0IHRhc2tzTGVuZ3RoID0gdGFza3MubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2codGFza3NMZW5ndGgpO1xyXG4vKiBhZ3JlZ2FyIHVuYSBjb25kaWNpb24gcGFyYSBjdWFuZG8gZWwgYXJyYXkgZXMgbG9uZ2l0dWQgMCB5IHBhcmEgY3VhbmRvIHRpZW5lIG90cmFzIHRhcmVhcyAqL1xyXG4gICAgaWYgKHRhc2tzTGVuZ3RoPT0wKXtcclxuICAgIHByb2plY3RUb1B1c2hbMF1bJ3Rhc2tzJ10gPSBbdGFza107XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9QdXNoKTtcclxuICAgIH1lbHNle1xyXG4gICAgcHJvamVjdFRvUHVzaFswXVsndGFza3MnXS5wdXNoKHRhc2spOyAgXHJcbiAgICB9XHJcbi8qIGx1ZWdvIG1vZGlmaWNhciBlbCBhcnJheSBvcmlnaW5hbCBzdW1hbmRvIGVsIHJlc3QgY29uIGVsIHByb3llY3RvIGRvbmRlIHNlIGFncmVnbyBsYSB0YXJlYSAqLyAgIFxyXG4gICAgaWYgKHJlc3RMZW5ndGg9PTApe1xyXG4gICAgICAgIGFycmF5UHJvamVjdHMgPSBwcm9qZWN0VG9QdXNoO1xyXG4gICAgfWVsc2V7XHJcbi8qIHZhIGEgYWdyZWdhciBlbCBwcm95ZWN0byBtb2RpZmljYWRvIGFsIGZpbmFsICAqLyAgICAgICBcclxuICAgICAgICBhcnJheVByb2plY3RzID0gcmVzdC5jb25jYXQocHJvamVjdFRvUHVzaCk7XHJcbi8qIG9yZGVuYSBlbCBhcnJheSBkZSBhY3VlcmRvIGNvbiBsb3MgaWQgZGUgbG9zIHByb3llY3RvcyAgKi8gIFxyXG4gICAgICAgYXJyYXlQcm9qZWN0cyA9IHNvcnRPYmplY3RzKGFycmF5UHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcblxyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpibHVlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycpO1xyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuICAgIFxyXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhlIFRhc2sgJyt0aXRsZSsnIHdhcyBhZGRlZCB0byBQcm9qZWN0ICcraWRUO1xyXG4gIFxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibmV3dGFza1wiKTtcclxuXHJcbiAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBhc2tpbmdBZ2FpbiA9ICgpID0+IHsgXHJcbiAgLyogYXJnMSBpcyB0aGUgQ2xhc3MgVGFzayAtIGFyZzIgaXMgdGhlIHByb2plY3RJZCAtIGFyZzMgaXMgdGhlIGRpdiBjb250YWluZXIgZm9yIHRoZSB0YXNrRm9ybSBcclxuICAgIGFyZzQgZXMgZWwgYXJyYXlQcm9qZWN0cyAqLyAgXHJcbiAgICBhc2tGb3JDb250aW51ZShhcmcxLGlkLGFyZzMsYXJyYXlQcm9qZWN0cyk7XHJcblxyXG59IFxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcclxuICBcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVUYXNrJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhkdWVEYXRlVGFzayk7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcclxuICBcclxuICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2cobm90ZXMpO1xyXG5cclxuICAgIGxldCBjaGVja2xpc3QgPSB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RJZCA9ICBpZDsgXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xyXG4gIFxyXG4gICAgXHJcbiAgICBsZXQgdGFzayA9IG5ldyBhcmcxKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMsY2hlY2tsaXN0LHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV3dGFza1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XHJcblxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRhc2snKS5yZXNldCgpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCByZWFkQWRkZWRUYXNrKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXNraW5nQWdhaW4pO1xyXG4gXHJcblxyXG5yZXR1cm4gYXJyYXlQcm9qZWN0cztcclxuICAgXHJcblxyXG59IiwiaW1wb3J0IG5ld1Rhc2sgZnJvbSAnLi9uZXdUYXNrLmpzJztcclxuaW1wb3J0IGNsb3NlQW5kUmVmcmVzaCBmcm9tICcuL2Nsb3NlQW5kUmVmcmVzaC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUZvclRhc2soYXJnMSxhcmcyKSB7XHJcblxyXG4vKiBhcmcxIGlzIHRoZSBDbGFzcyBQcm9qZWN0ICAgIGFyZzIgaXMgdGhlIENsYXNzIFRhc2sgICAqLyBcclxuXHJcbmNvbnNvbGUubG9nKCdwcnVlYmEgZGUgcHJlcGFyZSBmb3IgVGFzaycpO1xyXG4gICAgXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IG5ldyBhcmcxKDAsJycsW10sJycpO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSAwO1xyXG4gICBcclxuICAgIGNvbnN0IFRhc2sgPSBhcmcyO1xyXG4gICAgY29uc29sZS5sb2coVGFzayk7XHJcbiAgXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcblxyXG4gICAgY29uc3QgbWVuc2FqZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIFxyXG4gICAgLyogaW5pY2lvIG9idGVuZXIgZGVsIG9iamV0byBqc29uIGxlaWRvIGxvcyBkYXRvcyBwcmluY2lwYWxlcyBuZWNlc2FyaW9zICovXHJcbiAgICAgICAgaWYgKHByb2plY3RMaXN0ICE9PSBudWxsICkge1xyXG4gICAgICAgIGFycmF5UHJvamVjdHMgPSBwcm9qZWN0TGlzdDtcclxuICAgICAgICBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICAgICAgbWVuc2FqZS5pbm5lclRleHQgPSAnU2VsZWN0IHRoZSBwcm9qZWN0IHdoZXJlIHRoZSB0YXNrcyB3aWxsIGJlIGFkZGVkJztcclxuICAgICAgICAgICAgaWYgKGFycmF5UHJvamVjdHNMZW5ndGg9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhcnJheVByb2plY3RzTGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgbmVlZCB0byBDUkVBVEUgeW91ciBvd24gUFJPSkVDVCBmaXJzdCcpO1xyXG4gICAgICAgIG1lbnNhamUuaW5uZXJUZXh0ID0gJ1lvdSBuZWVkIHRvIENSRUFURSB5b3VyIG93biBQUk9KRUNUIGZpcnN0IFxcbiAgXFxuIENMSUNLIElOIE5FVyBQUk9KRUNUJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0c0xlbmd0aCk7XHJcbiAgIFxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEZvck9wY2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxhYmVsRm9yT3BjaW9uLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5ybyAnKyBhcnJheVByb2plY3RzW2ldWydpZCddICsgJyAnICsgYXJyYXlQcm9qZWN0c1tpXVsndGl0bGUnXTtcclxuICAgICAgICAgICAgbGFiZWxGb3JPcGNpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7Jyk7XHJcbiAgICAgICAgICAgIGxhYmVsRm9yT3BjaW9uLnNldEF0dHJpYnV0ZSgnZm9yJyxhcnJheVByb2plY3RzW2ldWydpZCddKTtcclxuICAgICAgICAgICAgb3BjaW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgICAgIG9wY2lvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxhcnJheVByb2plY3RzW2ldWydpZCddKTtcclxuICAgICAgICAgICAgb3BjaW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2lkJyk7XHJcbiAgICAgICAgICAgIG9wY2lvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhcnJheVByb2plY3RzW2ldWydpZCddKTtcclxuXHJcbiAgICAgICAgICAgIG9wY2lvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbEZvck9wY2lvbik7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChvcGNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaWRQID0gMDtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImlkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgICAgICAgICAgaWRQID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRQKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlQcm9qZWN0c1tpXVsnaWQnXSA9PSBpZFApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBhcnJheVByb2plY3RzW2ldWyd0aXRsZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUpOyBcclxuICAgICAgICAgICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcIik7ICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlmIChpZFAgIT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBtZW5zYWplLmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdGVkLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5ybyAnKyBpZFAgKyAnICcgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2soVGFzayxpZFAsZm9ybUNvbnRhaW5lcixhcnJheVByb2plY3RzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICBcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2tzJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb3gnKTtcclxuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDTE9TRVwiO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25DbG9zZUJ1dHRvbicpO1xyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY2xvc2VBbmRSZWZyZXNoKGFycmF5UHJvamVjdHMpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnNhamUpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHRvZ2dsZURvbmVVbmRvbmUgZnJvbSAnLi9zZXR0aW5nQ29tcGxldGUnO1xyXG5pbXBvcnQgZGVsZXRlT2JqZWN0cyBmcm9tICcuL2RlbGV0ZU9iamVjdHMuanMnO1xyXG5pbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gcHJpbnRQcm9MaXN0KGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuLyogZWwgYXJnMSBlcyBlbCBkaXYgcHJvamVjdFNpZGUgLSBlbCBhcmcyIGVzIGVsIGFycmF5UHJvamVjdHMgb2J0ZW5pZG8gZGUgbGVlciBlbCBsb2NhbHN0b3JhZ2UgLSBlbCBhcmcgMyBlcyBlbCBkaXYgcHJvamVjdFRhc2tzKi9cclxuXHJcbmNvbnN0IHByb2plY3RUYXNrcyA9IGFyZzM7XHJcblxyXG5jb25zb2xlLmxvZygncHJ1ZWJhIHByaW50UHJvTGlzdCcpO1xyXG5cclxuY29uc3QgcHJvamVjdFNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdFNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclBybycpO1xyXG5cclxuYXJnMS5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZUJhcik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZzIubGVuZ3RoKTsgIFxyXG4gICAgXHJcbiAgICAgICAgLyogaW1wcmltZSBlbCBhcnJheSBkZSBsb3MgcHJveWVjdG9zICovXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhcmcyW2ldO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ViU2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRWFjaFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJtZWRpYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XHJcbiAgICAgICAgICAgIHNob3dUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9UaXRsZScpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmNsYXNzTGlzdC5hZGQoJ3N1YlNpZGVCYXInKTtcclxuICAgICAgICAgICAgc2hvd0lkLmNsYXNzTGlzdC5hZGQoJ3Byb0lkJyk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy50ZXh0Q29udGVudCA9IFwiU0hPVyBUQVNLU1wiO1xyXG4gICAgICAgICAgICBzaG93VGFza3MuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0blRhc2snK2N1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdCcrY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc3VidGFzaycpOyBcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICcjcHJvamVjdCcrY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG9wZW5EaXYodGFyZ2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza3MuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGFzaycpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXNrVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza1Rlc3QuaW5uZXJUZXh0ID0gJ1BST0pFQ1QgJytjdXJyZW50UHJvamVjdC5pZCsnICAnK2N1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBjb25zdCBoaWRlVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLnRleHRDb250ZW50ID0gXCJISURFIFRBU0tTXCI7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5jbGFzc0xpc3QuYWRkKCdoaWRlQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBjbG9zZURpdih0YXJnZXQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJyYXlUYXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVRhc2tzKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGltcHJpbWUgZWwgYXJyYXkgZGUgbGFzIHRhcmVhcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWFjaFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxGb3JDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9YXJyYXlUYXNrc1tpXVtcImR1ZURhdGVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudER1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWNoYWZvcm1hdGVhZGEgPSBjdXJyZW50RHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VzLWVjJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU6ICdVVEMnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZlY2hhZm9ybWF0ZWFkYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmNsYXNzTGlzdC5hZGQoJ2VhY2hUYXNrJyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9ICdUYXNrOiAgJythcnJheVRhc2tzW2ldW1widGl0bGVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXRhaWxzOiAgJythcnJheVRhc2tzW2ldW1wiZGVzY3JpcHRpb25cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOiAgJytmZWNoYWZvcm1hdGVhZGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJythcnJheVRhc2tzW2ldW1wicHJpb3JpdHlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza05vdGVzLmlubmVyVGV4dCA9ICdBZGRpdGlvbmFsIG5vdGVzOiAnK2FycmF5VGFza3NbaV1bXCJub3Rlc1wiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RpdkRlbGV0ZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsIGN1cnJlbnRQcm9qZWN0LmlkKyd4JytpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LmlubmVyVGV4dCA9J0RPTkUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnZm9yJywncHJvaicrY3VycmVudFByb2plY3QuaWQrJ3Rhc2snK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qJytjdXJyZW50UHJvamVjdC5pZCsndGFzaycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnY2hlY2tsaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3Q9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdCA9IHRvZ2dsZURvbmVVbmRvbmUoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcyID0gdXBkYXRlKGN1cnJlbnRQcm9qZWN0LGFycmF5VGFza3MsY2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJnMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShjdXJyZW50UHJvamVjdCxhcnJheVRhc2tzLGNoZWNrbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRhc2tzW2ldW1wiY2hlY2tsaXN0XCJdID0gY2hlY2tsaXN0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJnMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnMjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVPYmplY3RzKGRlbGV0ZUJ1dHRvbixhcmcyKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVEaXYuYXBwZW5kQ2hpbGQoZWFjaFRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKGNoZWNrbGlzdERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGxhYmVsRm9yQ2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKGRpdkRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBzaG93VGl0bGUuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHNob3dJZC5pbm5lclRleHQgPSBcIlByb2plY3QgaWQ6IFwiICtjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5hcHBlbmRDaGlsZChzaG93VGl0bGUpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFwcGVuZENoaWxkKHN1YlNpZGUpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmFwcGVuZENoaWxkKHNob3dJZCk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuYXBwZW5kQ2hpbGQoc2hvd1Rhc2tzKTtcclxuICAgICAgICAgICAgcHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKHRhc2tFYWNoUHJvamVjdCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChoZWFkZXJUYXNrcyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tzLmFwcGVuZENoaWxkKGhlYWRlclRhc2tUZXN0KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGludGVybWVkaWF0ZURpdik7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChoaWRlVGFza3MpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5EaXYodGFyZ2V0KSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkaXYgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbW9zdHJhcicpOyBcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmVlZCByZWZyZXNoIGZvciB1cGRhdGVzJyk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlRGl2KHRhcmdldCkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdtb3N0cmFyJyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnb2N1bHRhcicpOyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJnMTsgICAgXHJcblxyXG4gXHJcbiAgfTtcclxuICBcclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHNlbmREYXRhVG9Mb2NhbChhcmcxLGFyZzIpIHtcclxuXHJcbi8qIGFyZzEgaXMgdGhlIG5hbWUgb2YgdGhlIGtleSAtIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggdGhlIGRhdGEgKi9cclxuXHJcbmxldCBrZXkgPSBhcmcxO1xyXG5sZXQgZGF0YVRvU2VuZCA9IGFyZzI7XHJcblxyXG5jb25zb2xlLmxvZyhrZXkpO1xyXG5jb25zb2xlLmxvZyhkYXRhVG9TZW5kKTtcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZCkpO1xyXG5cclxuXHJcbiAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZURvbmVVbmRvbmUoYXJnKSB7XHJcblxyXG4gICAgLyogZWwgYXJnIGVzIGVsIGlucHV0IGNoZWNrYm94ICovXHJcbiAgICBsZXQgY2hlY2tsaXN0SW5wdXQgPSBhcmc7XHJcbiAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGNoZWNrbGlzdElucHV0LnZhbHVlOyBcclxuICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpO1xyXG4gICAgbGV0IGNoZWNrbGlzdCA9ICcnO1xyXG4gICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAnZmFsc2UnKSB7ICAgXHJcbiAgICAgICAgY2hlY2tsaXN0ID0gJ3RydWUnO1xyXG4gICAgfWVsc2UgeyBcclxuICAgICAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgIGNoZWNrbGlzdCA9ICdmYWxzZSc7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpOyBcclxuIHJldHVybiBjaGVja2xpc3Q7XHJcblxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBzb3J0T2JqZWN0cyhhcmcpIHtcclxuICAgXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzsgXHJcblxyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGxldCBhcnJheUlkID0gW107XHJcbiAgICBsZXQgaXRlbSA9IDA7XHJcbiBcclxuIFxyXG4gICAgZnVuY3Rpb24gc29ydElkKCl7XHJcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgICBpdGVtID0gYXJyYXlQcm9qZWN0c1tpXVtcImlkXCJdO1xyXG4gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgIGFycmF5SWQucHVzaChpdGVtKTtcclxuICAgICBjb25zb2xlLmxvZyhhcnJheUlkKTtcclxuICAgICBhcnJheUlkLnNvcnQoKTtcclxuICAgICB9OyBcclxuICAgICByZXR1cm4gYXJyYXlJZDtcclxuICAgICB9O1xyXG4gICAgIFxyXG4gICAgIGxldCBpZFNvcnRlZCA9IHNvcnRJZCgpO1xyXG4gICAgIGNvbnNvbGUubG9nKGlkU29ydGVkKTtcclxuICAgICBcclxuICAgICBsZXQgY3VycmVudElkID0gMDtcclxuICAgICBsZXQgYXJyYXlTb3J0ZWQgPSBbXTtcclxuICAgICBcclxuICAgICBmdW5jdGlvbiBzb3J0QXJyYXlPYmplY3QoaWRTb3J0ZWQsYXJyYXlQcm9qZWN0cyl7XHJcbiAgICAgXHJcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZFNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBjdXJyZW50SWQgPSBpZFNvcnRlZFtpXTtcclxuICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICBpZiggY3VycmVudElkID09IGFycmF5UHJvamVjdHNbal1bXCJpZFwiXSApe1xyXG4gICAgICAgICAgICAgICAgICAgYXJyYXlTb3J0ZWQucHVzaChhcnJheVByb2plY3RzW2pdKTtcclxuICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgfTtcdFxyXG4gICAgIH07XHJcbiAgICAgY29uc29sZS5sb2coYXJyYXlTb3J0ZWQpO1xyXG4gICAgIHJldHVybiBhcnJheVNvcnRlZDsgXHJcbiAgICAgfTtcclxuICAgICBcclxuICAgICBhcnJheVByb2plY3RzID0gc29ydEFycmF5T2JqZWN0KGlkU29ydGVkLGFycmF5UHJvamVjdHMpO1xyXG4gICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG5yZXR1cm4gYXJyYXlQcm9qZWN0cztcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9