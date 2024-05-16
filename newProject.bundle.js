"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["newProject"],{

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

/***/ "./src/components/newProject.js":
/*!**************************************!*\
  !*** ./src/components/newProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendDataToLocal.js */ "./src/components/sendDataToLocal.js");
/* harmony import */ var _clearContainers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearContainers.js */ "./src/components/clearContainers.js");
/* harmony import */ var _createContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createContainer.js */ "./src/components/createContainer.js");
/* harmony import */ var _printProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printProject.js */ "./src/components/printProject.js");
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newTask.js */ "./src/components/newTask.js");
/* harmony import */ var _closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closeAndRefresh.js */ "./src/components/closeAndRefresh.js");








function newProject(arg1,arg2) {

  /* arg1 is the Class Project    arg2 is the Class Task   */ 
   
    console.log('prueba de newProject');
    
    let arrayProjects = new arg1(0,'',[],'');
    let arrayProjectsLength = 0;
    let arrayId = [];
    let item = 0;
    let idMayor = 0;
    const Task = arg2;
    console.log(Task);
  
    const projectList = JSON.parse(localStorage.getItem("projects"));
    
    /* inicio obtener del objeto json leido los datos principales necesarios */
        if (projectList !== null ) {
        arrayProjects = projectList;
        arrayProjectsLength = arrayProjects.length;
            if (arrayProjectsLength===undefined){
            arrayProjectsLength = 0;
            }
        arrayId = addId();
        idMayor = arrayId.reduce((previous, current) => {
            return current > previous ? current : previous;
          })
              
        }else{
        arrayProjects = new arg1(0,'',[],'');
        arrayProjectsLength = 0;
        arrayId = [];
        idMayor = 0;
        }

        function addId(){
            for (let i = 0; i < arrayProjectsLength; i++) {
            item = arrayProjects[i]["id"];
            arrayId.push(item);
            };
            return arrayId;
        };
    

    console.log(projectList);
    console.log(arrayProjects);
    console.log(arrayProjectsLength);
    console.log(arrayId);
    console.log(idMayor);
   

    
    /* crear forma para captar el nuevo proyecto */

    
    const formContainer = document.querySelector('.tasks');
    const closeButton = document.createElement('button');
    const form = document.createElement('form');
    const labelForTitle = document.createElement('label');
    const titleInput = document.createElement('input');
    const labelForDueDate = document.createElement('label');
    const dueDateProjInput = document.createElement('input');
    
    const submitButton = document.createElement('button');

    const field1 = document.createElement('div');
    const field2 = document.createElement('div');
    const field3 = document.createElement('div');
    const field4 = document.createElement('div');

   
    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      (0,_closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProjects)
    });

    form.setAttribute('id','form');
    form.setAttribute('action','');
    form.setAttribute('method','get');

    labelForTitle.innerText = "Add the name of the new project: ";
    labelForTitle.setAttribute('for','title');
    titleInput.setAttribute('id','title');
    titleInput.setAttribute('name','title');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('required',true);
    labelForDueDate.innerText = "Due Date of the new project: ";
    labelForDueDate.setAttribute('for','dueDateProj');
    dueDateProjInput.setAttribute('id','dueDateProj');
    dueDateProjInput.setAttribute('name','dueDateProj');
    dueDateProjInput.setAttribute('type','date');
    dueDateProjInput.setAttribute('required',true);
    
    
    
    submitButton.textContent = "CREATE Project";
    submitButton.setAttribute('type','submit');
    submitButton.classList.add('btn2');

    formContainer.appendChild(closeButton);
    formContainer.appendChild(form);
    form.appendChild(field1);
    field1.appendChild(labelForTitle);
    field1.appendChild(titleInput);
    form.appendChild(field2);
    field2.appendChild(labelForDueDate);
    field2.appendChild(dueDateProjInput);
    form.appendChild(field3);
    field3.appendChild(submitButton);
    

    const readAddedProject = () => {
    
        let project = JSON.parse(localStorage.getItem("newproject"));
        let id = project.id;
        let title = project.title;

        form.remove();
        
        const message = document.createElement('p');
        formContainer.appendChild(message);
        message.innerText = 'The Project #'+id+' '+title+' was created';

          if (idMayor==0){
            arrayProjects=[project];
            console.log(arrayProjects);
            console.log(arrayProjects.length);
          }else{
            arrayProjects.push(project);
          }

        console.log(arrayProjects);
        localStorage.removeItem("newproject");
        
        addTaskYesorNot(id);
   
    };

    const addTaskYesorNot = (arg1) => {
        
        let id = arg1;
        console.log('prueba de lectura'+id);

        const askingMessage = document.createElement('p');
        const answerOptions = document.createElement('div');
        const labelForYes = document.createElement('label');
        const answerYes = document.createElement('input');
        const labelForNo = document.createElement('label');
        const answerNo = document.createElement('input');
        

        askingMessage.innerText ='Do you want add a TASK for this project?';
        
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
            displayRadioValue();
            displayFormTask(answer);
          });
        
        answerNo.addEventListener('change', () => {
            displayRadioValue();
            displayFormTask(answer)
          });

          function displayRadioValue() {
            
            let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');   
            
            if(getSelectedValue != null) {   
             answer = getSelectedValue.value;
             console.log(getSelectedValue); 
             console.log(answer); 
             }else {  
             console.log("Nothing has been selected");  
             }
          
          };

          function displayFormTask(answer) {
            
            if(answer == 'nothing') {   
                console.log("Nothing has been selected");
             }else {  
                if(answer == 'no') {
                    /*  funcion que envíe a local storage el projecto completo actualizado   */
                    (0,_sendDataToLocal_js__WEBPACK_IMPORTED_MODULE_0__["default"])('projects',arrayProjects);
                /*  funcion que limpie el container de la forma  y regrese al container de impresion  */
                    (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.formBox');
                    (0,_createContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"])('tasks','projectTasks');
                    (0,_clearContainers_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.sidebarPro');
                    let projectSide = document.querySelector('.sidebar');
                    console.log(projectSide);
                    let projectTasks = document.querySelector('.tasks');
                    console.log(projectTasks);
                    arrayProjects = JSON.parse(localStorage.getItem("projects"));
                    console.log(arrayProjects);
                    /*  llamar de nuevo a la funcion de printProject  */
                      (0,_printProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectSide,arrayProjects,projectTasks);

                    console.log("asignar funcion para NO");  
                }else{
                    /*  llamar a la funcion newTask pasando la clase, el id, el container y el array  */

                      (0,_newTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Task,id,formContainer,arrayProjects);
                     
                      console.log("asignar funcion para YES");   

                }
             }
          
          };
       
        
        formContainer.appendChild(field4);
        field4.appendChild(askingMessage);
        field4.appendChild(answerOptions);
        answerOptions.appendChild(labelForYes);
        answerOptions.appendChild(answerYes);
        answerOptions.appendChild(labelForNo);
        answerOptions.appendChild(answerNo);
        
    };


  form.addEventListener('submit', function(event){
  event.preventDefault()

  let title = document.getElementById('title').value;
  console.log(title);

  let dueDateProj = document.getElementById('dueDateProj').value;
  console.log(dueDateProj);

  let id =  asignId(idMayor); 
  console.log(id);

  let tasks = [];
  
  let project = new arg1(id,title,tasks,dueDateProj);
  console.log(project);
  localStorage.setItem("newproject", JSON.stringify(project));

 function  asignId(arg) {
    let id = arg + 1;
    return id;
  };
  
  document.getElementById('form').reset(); 
  
  return project;

});

form.addEventListener("submit", readAddedProject);




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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/newProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFlO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hc2tGb3JDb250aW51ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY2xlYXJDb250YWluZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jbG9zZUFuZFJlZnJlc2guanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJpbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZW5kRGF0YVRvTG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc29ydE9iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Rhc2sgZnJvbSAnLi9uZXdUYXNrLmpzJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gYXNrRm9yQ29udGludWUoYXJnMSxhcmcyLGFyZzMsYXJnNCkge1xyXG4gICAgXHJcbiAgICAvKiBhcmcxIGlzIHRoZSBDbGFzcyBUYXNrIC0gYXJnMiBpcyB0aGUgcHJvamVjdElkIC0gYXJnMyBpcyB0aGUgZGl2IGNvbnRhaW5lciBmb3IgdGhlIHRhc2tGb3JtIFxyXG4gICAgYXJnNCBlcyBlbCBhcnJheVByb2plY3RzICovICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ3BydWViYSBkZSBmdW5jaW9uIGFza2luZyBmb3IgY29udGludWUnKTtcclxuXHJcbiAgICBsZXQgVGFzayA9IGFyZzE7XHJcbiAgICAgICBcclxuICAgIGxldCBpZCA9IGFyZzI7XHJcbiAgICBjb25zb2xlLmxvZygncHJ1ZWJhIGRlIGxlY3R1cmEgZGUgaWQ6ICcraWQpO1xyXG5cclxuICAgIGxldCBmb3JtQ29udGFpbmVyID0gYXJnMztcclxuICAgIGNvbnNvbGUubG9nKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnNDtcclxuICAgIFxyXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFza2luZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvclllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJZZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBhbnN3ZXJObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuXHJcbiAgICBhc2tpbmdNZXNzYWdlLmlubmVyVGV4dCA9J0RvIHlvdSB3YW50IENPTlRJTlVFIEFERElORyBUQVNLUz8nO1xyXG4gICAgXHJcbiAgICBsYWJlbEZvclllcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3llcycpO1xyXG4gICAgbGFiZWxGb3JZZXMuaW5uZXJUZXh0ID0gJ1lFUyc7XHJcbiAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCdpZCcsJ3llcycpO1xyXG4gICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCd5ZXMnKTtcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdhbnN3ZXInKTtcclxuICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgbGFiZWxGb3JOby5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25vJyk7XHJcbiAgICBsYWJlbEZvck5vLmlubmVyVGV4dCA9J05PJztcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgnaWQnLCdubycpO1xyXG4gICAgYW5zd2VyTm8uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ25vJyk7XHJcbiAgICBhbnN3ZXJOby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdhbnN3ZXInKTtcclxuICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcblxyXG4gICBsZXQgYW5zd2VyPSdub3RoaW5nJzsgICAgXHJcbiAgICBhbnN3ZXJZZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlBZ2FpbigpO1xyXG4gICAgICAgIGRpc3BsYXlGb3JtVGFzayhhbnN3ZXIpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYW5zd2VyTm8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlBZ2FpbigpO1xyXG4gICAgICAgIGRpc3BsYXlGb3JtVGFzayhhbnN3ZXIpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUFnYWluKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBhbnN3ZXIgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGFuc3dlcik7IFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpOyAgXHJcbiAgICAgICAgIH1cclxuICAgICAgcmV0dXJuIGFuc3dlcjtcclxuICAgICAgfTsgXHJcblxyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5Rm9ybVRhc2soYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGFuc3dlciA9PSAnbm90aGluZycpIHsgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgaWYoYW5zd2VyID09ICdubycpIHtcclxuICAgICAgICAgICAgICAgIC8qICBmdW5jaW9uIHF1ZSBlbnbDrWUgYSBsb2NhbCBzdG9yYWdlIGVsIHByb2plY3RvIGNvbXBsZXRvIGFjdHVhbGl6YWRvICAgKi9cclxuICAgICAgICAgICAgICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgICAgICAvKiAgZnVuY2lvbiBxdWUgbGltcGllIGVsIGNvbnRhaW5lciBkZSBsYSBmb3JtYSAgeSByZWdyZXNlIGFsIGNvbnRhaW5lciBkZSBpbXByZXNpb24gICovXHJcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5mb3JtQm94Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgICAgICAgICAgICAgIGFycmF5UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAvKiAgbGxhbWFyIGRlIG51ZXZvIGEgbGEgZnVuY2lvbiBkZSBwcmludFByb2plY3QgICovXHJcbiAgICAgICAgICAgICAgICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2lnbmFyIGZ1bmNpb24gcGFyYSBOT1wiKTsgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8qICBsbGFtYXIgYSBsYSBmdW5jaW9uIG5ld1Rhc2sgcGFzYW5kbyBsYSBjbGFzZSwgZWwgaWQsIGVsIGNvbnRhaW5lciB5IGVsIGFycmF5ICAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgbmV3VGFzayhUYXNrLGlkLGZvcm1Db250YWluZXIsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNpZ25hciBmdW5jaW9uIHBhcmEgWUVTXCIpOyAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9O1xyXG4gICBcclxuXHJcbiAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGQpO1xyXG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChhc2tpbmdNZXNzYWdlKTtcclxuICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoYW5zd2VyT3B0aW9ucyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQobGFiZWxGb3JZZXMpO1xyXG4gICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGFuc3dlclllcyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQobGFiZWxGb3JObyk7XHJcbiAgICAgIGFuc3dlck9wdGlvbnMuYXBwZW5kQ2hpbGQoYW5zd2VyTm8pO1xyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyphcmcxIGlzIHRoZSBjbGFzcyBvZiB0aGUgY29udGFpbmVyIGZvciByZW1vdmUgKi9cclxuICAgIGxldCBjbGFzc1RvUmVtb3ZlID0gYXJnMTtcclxuICAgIC8qIGxpbXBpYSBlbCBjb250ZW5pZG8gYW50ZXJpb3IgKi9cclxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgaWYgKCBjb250ZW50SW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudEluZm8ucmVtb3ZlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uIG5vdCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAiLCJpbXBvcnQgY2xlYXJDb250YWluZXJzIGZyb20gJy4vY2xlYXJDb250YWluZXJzLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBwcmludFByb0xpc3QgZnJvbSAnLi9wcmludFByb2plY3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlQW5kUmVmcmVzaChhcmcpIHtcclxuXHJcbiAgICAvKiB0aGUgYXJnIGlzIHRoZSBhcnJheSB3aXRoIHRoZSBwcm9qZWN0cyAqL1xyXG4gICAgICBjbGVhckNvbnRhaW5lcnMoJy5mb3JtQm94Jyk7IFxyXG4gICAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICAgICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgIC8qICBsbGFtYXIgZGUgbnVldm8gYSBsYSBmdW5jaW9uIGRlIHByaW50UHJvamVjdCAgKi9cclxuICAgICAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG5cclxuXHJcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxLGFyZzIpIHtcclxuICAgIC8qIHRoZSBhcmcxIGlzIHRoZSBjbGFzcyBmb3IgdGhlIG5ldyBjb250YWluZXIgLSB0aGUgYXJnMiBpcyB0aGUgaWQgYXR0cmlidXRlIGZvciB0aGUgbmV3IGNvbnRhaW5lciAgICovXHJcbiAgICBsZXQgY2xhc3NUb0FkZCA9IGFyZzEgO1xyXG4gICAgbGV0ICBpZEZvckNvbnRhaW5lciA9IGFyZzI7XHJcbiAgIFxyXG4gICAgLyogY3JlYSB1biBudWV2byBjb250YWluZXIgKi9cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGlkRm9yQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuIiwiaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0cyhhcmcxLGFyZzIpIHtcclxuXHJcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiKSA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5kZXggPSBhcmcxLmdldEF0dHJpYnV0ZSgnZGF0YScpOyBcclxuXHJcbiAgICBsZXQgYSA9IGdldEluZGV4LmluZGV4T2YoJ3gnKTtcclxuICAgIGxldCBiID0gYSArMTtcclxuICAgIGxldCBlbmQgPSBnZXRJbmRleC5sZW5ndGg7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SWQgPSBnZXRJbmRleC5zbGljZSgwLGEpO1xyXG4gICAgcHJvamVjdElkID0gTnVtYmVyKHByb2plY3RJZCk7XHJcbiAgICBcclxuICAgIGxldCBpT2ZBcnJheSA9IGdldEluZGV4LnNsaWNlKGIsZW5kKTtcclxuICAgIGlPZkFycmF5ID0gTnVtYmVyKGlPZkFycmF5KTtcclxuICAgIFxyXG4gICAgbGV0IGl0ZW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgIFxyXG4gICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgaWYgKGl0ZW0gPT0gcHJvamVjdElkKXtcclxuICAgICAgICBhcnJheVByb2plY3RzW2ldW1widGFza3NcIl0ucG9wKGlPZkFycmF5KTtcdFxyXG5cclxuICAgIH0gXHJcbiAgICBjb25zb2xlLmxvZyAoYXJyYXlQcm9qZWN0cyk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coZ2V0SW5kZXgubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGEpO1xyXG4gICAgY29uc29sZS5sb2coZW5kKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgcHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKGlPZkFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpT2ZBcnJheSk7XHJcblxyXG4gICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAvKiBmcm9tIGhlcmUgcmVmcmVzaCB0aGUgcHJpbnQgb2YgdGhlIHByb2plY3QgYW5kIHRhc2tzICovXHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy50YXNrcycpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgbGV0IHByb2plY3RTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUYXNrcyk7XHJcbiAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG4gICAgbGV0IHRhcmdldCA9ICcjcHJvamVjdCcrcHJvamVjdElkO1xyXG4gICAgY29uc3Qgb3BlbkRpdiA9ICh0YXJnZXQpID0+eyBcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCBkaXYgIT09IG51bGwpe1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmVlZCByZWZyZXNoIGZvciB1cGRhdGVzJyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgb3BlbkRpdih0YXJnZXQpO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuaW1wb3J0IG5ld1Rhc2sgZnJvbSAnLi9uZXdUYXNrLmpzJztcclxuaW1wb3J0IGNsb3NlQW5kUmVmcmVzaCBmcm9tICcuL2Nsb3NlQW5kUmVmcmVzaC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3QoYXJnMSxhcmcyKSB7XHJcblxyXG4gIC8qIGFyZzEgaXMgdGhlIENsYXNzIFByb2plY3QgICAgYXJnMiBpcyB0aGUgQ2xhc3MgVGFzayAgICovIFxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmEgZGUgbmV3UHJvamVjdCcpO1xyXG4gICAgXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IG5ldyBhcmcxKDAsJycsW10sJycpO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSAwO1xyXG4gICAgbGV0IGFycmF5SWQgPSBbXTtcclxuICAgIGxldCBpdGVtID0gMDtcclxuICAgIGxldCBpZE1heW9yID0gMDtcclxuICAgIGNvbnN0IFRhc2sgPSBhcmcyO1xyXG4gICAgY29uc29sZS5sb2coVGFzayk7XHJcbiAgXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgICBcclxuICAgIC8qIGluaWNpbyBvYnRlbmVyIGRlbCBvYmpldG8ganNvbiBsZWlkbyBsb3MgZGF0b3MgcHJpbmNpcGFsZXMgbmVjZXNhcmlvcyAqL1xyXG4gICAgICAgIGlmIChwcm9qZWN0TGlzdCAhPT0gbnVsbCApIHtcclxuICAgICAgICBhcnJheVByb2plY3RzID0gcHJvamVjdExpc3Q7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlQcm9qZWN0c0xlbmd0aD09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFycmF5UHJvamVjdHNMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYXJyYXlJZCA9IGFkZElkKCk7XHJcbiAgICAgICAgaWRNYXlvciA9IGFycmF5SWQucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudCA+IHByZXZpb3VzID8gY3VycmVudCA6IHByZXZpb3VzO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBhcnJheVByb2plY3RzID0gbmV3IGFyZzEoMCwnJyxbXSwnJyk7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IDA7XHJcbiAgICAgICAgYXJyYXlJZCA9IFtdO1xyXG4gICAgICAgIGlkTWF5b3IgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSWQoKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgICAgICAgICAgYXJyYXlJZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlJZDtcclxuICAgICAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzTGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5SWQpO1xyXG4gICAgY29uc29sZS5sb2coaWRNYXlvcik7XHJcbiAgIFxyXG5cclxuICAgIFxyXG4gICAgLyogY3JlYXIgZm9ybWEgcGFyYSBjYXB0YXIgZWwgbnVldm8gcHJveWVjdG8gKi9cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBkdWVEYXRlUHJvaklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgZmllbGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmaWVsZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZpZWxkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZmllbGQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICBcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFza3MnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUJveCcpO1xyXG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNMT1NFXCI7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbkNsb3NlQnV0dG9uJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjbG9zZUFuZFJlZnJlc2goYXJyYXlQcm9qZWN0cylcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCcnKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdnZXQnKTtcclxuXHJcbiAgICBsYWJlbEZvclRpdGxlLmlubmVyVGV4dCA9IFwiQWRkIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdDogXCI7XHJcbiAgICBsYWJlbEZvclRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsdHJ1ZSk7XHJcbiAgICBsYWJlbEZvckR1ZURhdGUuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZSBvZiB0aGUgbmV3IHByb2plY3Q6IFwiO1xyXG4gICAgbGFiZWxGb3JEdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywnZHVlRGF0ZVByb2onKTtcclxuICAgIGR1ZURhdGVQcm9qSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGVQcm9qJyk7XHJcbiAgICBkdWVEYXRlUHJvaklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2R1ZURhdGVQcm9qJyk7XHJcbiAgICBkdWVEYXRlUHJvaklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcclxuICAgIGR1ZURhdGVQcm9qSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsdHJ1ZSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQcm9qZWN0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQxKTtcclxuICAgIGZpZWxkMS5hcHBlbmRDaGlsZChsYWJlbEZvclRpdGxlKTtcclxuICAgIGZpZWxkMS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQyKTtcclxuICAgIGZpZWxkMi5hcHBlbmRDaGlsZChsYWJlbEZvckR1ZURhdGUpO1xyXG4gICAgZmllbGQyLmFwcGVuZENoaWxkKGR1ZURhdGVQcm9qSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDMpO1xyXG4gICAgZmllbGQzLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCByZWFkQWRkZWRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmV3cHJvamVjdFwiKSk7XHJcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdC5pZDtcclxuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xyXG5cclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGUgUHJvamVjdCAjJytpZCsnICcrdGl0bGUrJyB3YXMgY3JlYXRlZCc7XHJcblxyXG4gICAgICAgICAgaWYgKGlkTWF5b3I9PTApe1xyXG4gICAgICAgICAgICBhcnJheVByb2plY3RzPVtwcm9qZWN0XTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMubGVuZ3RoKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhcnJheVByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibmV3cHJvamVjdFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBhZGRUYXNrWWVzb3JOb3QoaWQpO1xyXG4gICBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGFza1llc29yTm90ID0gKGFyZzEpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaWQgPSBhcmcxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcnVlYmEgZGUgbGVjdHVyYScraWQpO1xyXG5cclxuICAgICAgICBjb25zdCBhc2tpbmdNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlck9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvclllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBsYWJlbEZvck5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBhbnN3ZXJObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGFza2luZ01lc3NhZ2UuaW5uZXJUZXh0ID0nRG8geW91IHdhbnQgYWRkIGEgVEFTSyBmb3IgdGhpcyBwcm9qZWN0Pyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFiZWxGb3JZZXMuc2V0QXR0cmlidXRlKCdmb3InLCd5ZXMnKTtcclxuICAgICAgICBsYWJlbEZvclllcy5pbm5lclRleHQgPSAnWUVTJztcclxuICAgICAgICBhbnN3ZXJZZXMuc2V0QXR0cmlidXRlKCdpZCcsJ3llcycpO1xyXG4gICAgICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywneWVzJyk7XHJcbiAgICAgICAgYW5zd2VyWWVzLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Fuc3dlcicpO1xyXG4gICAgICAgIGFuc3dlclllcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGxhYmVsRm9yTm8uc2V0QXR0cmlidXRlKCdmb3InLCdubycpO1xyXG4gICAgICAgIGxhYmVsRm9yTm8uaW5uZXJUZXh0ID0nTk8nO1xyXG4gICAgICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgnaWQnLCdubycpO1xyXG4gICAgICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdubycpO1xyXG4gICAgICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Fuc3dlcicpO1xyXG4gICAgICAgIGFuc3dlck5vLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcblxyXG4gICAgICAgIGxldCBhbnN3ZXI9J25vdGhpbmcnOyAgICBcclxuICAgICAgICBhbnN3ZXJZZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybVRhc2soYW5zd2VyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFuc3dlck5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgICAgICAgICAgZGlzcGxheUZvcm1UYXNrKGFuc3dlcilcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgICAgIGFuc3dlciA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpOyBcclxuICAgICAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpOyAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZGlzcGxheUZvcm1UYXNrKGFuc3dlcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYW5zd2VyID09ICdub3RoaW5nJykgeyAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgICAgICBpZihhbnN3ZXIgPT0gJ25vJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICBmdW5jaW9uIHF1ZSBlbnbDrWUgYSBsb2NhbCBzdG9yYWdlIGVsIHByb2plY3RvIGNvbXBsZXRvIGFjdHVhbGl6YWRvICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgICAgIC8qICBmdW5jaW9uIHF1ZSBsaW1waWUgZWwgY29udGFpbmVyIGRlIGxhIGZvcm1hICB5IHJlZ3Jlc2UgYWwgY29udGFpbmVyIGRlIGltcHJlc2lvbiAgKi9cclxuICAgICAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5mb3JtQm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVycygnLnNpZGViYXJQcm8nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgbGxhbWFyIGRlIG51ZXZvIGEgbGEgZnVuY2lvbiBkZSBwcmludFByb2plY3QgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzaWduYXIgZnVuY2lvbiBwYXJhIE5PXCIpOyAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgbGxhbWFyIGEgbGEgZnVuY2lvbiBuZXdUYXNrIHBhc2FuZG8gbGEgY2xhc2UsIGVsIGlkLCBlbCBjb250YWluZXIgeSBlbCBhcnJheSAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrKFRhc2ssaWQsZm9ybUNvbnRhaW5lcixhcnJheVByb2plY3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzaWduYXIgZnVuY2lvbiBwYXJhIFlFU1wiKTsgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH07XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkNCk7XHJcbiAgICAgICAgZmllbGQ0LmFwcGVuZENoaWxkKGFza2luZ01lc3NhZ2UpO1xyXG4gICAgICAgIGZpZWxkNC5hcHBlbmRDaGlsZChhbnN3ZXJPcHRpb25zKTtcclxuICAgICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGxhYmVsRm9yWWVzKTtcclxuICAgICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGFuc3dlclllcyk7XHJcbiAgICAgICAgYW5zd2VyT3B0aW9ucy5hcHBlbmRDaGlsZChsYWJlbEZvck5vKTtcclxuICAgICAgICBhbnN3ZXJPcHRpb25zLmFwcGVuZENoaWxkKGFuc3dlck5vKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuXHJcbiAgbGV0IGR1ZURhdGVQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVQcm9qJykudmFsdWU7XHJcbiAgY29uc29sZS5sb2coZHVlRGF0ZVByb2opO1xyXG5cclxuICBsZXQgaWQgPSAgYXNpZ25JZChpZE1heW9yKTsgXHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG5cclxuICBsZXQgdGFza3MgPSBbXTtcclxuICBcclxuICBsZXQgcHJvamVjdCA9IG5ldyBhcmcxKGlkLHRpdGxlLHRhc2tzLGR1ZURhdGVQcm9qKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5ld3Byb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG5cclxuIGZ1bmN0aW9uICBhc2lnbklkKGFyZykge1xyXG4gICAgbGV0IGlkID0gYXJnICsgMTtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykucmVzZXQoKTsgXHJcbiAgXHJcbiAgcmV0dXJuIHByb2plY3Q7XHJcblxyXG59KTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCByZWFkQWRkZWRQcm9qZWN0KTtcclxuXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgdG9nZ2xlRG9uZVVuZG9uZSBmcm9tICcuL3NldHRpbmdDb21wbGV0ZSc7XHJcbmltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5pbXBvcnQgYXNrRm9yQ29udGludWUgZnJvbSAnLi9hc2tGb3JDb250aW51ZS5qcyc7XHJcbmltcG9ydCBzb3J0T2JqZWN0cyBmcm9tICcuL3NvcnRPYmplY3RzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKGFyZzEsYXJnMixhcmczLGFyZzQpIHtcclxuICAgIC8qIGFyZzEgaXMgdGhlIENsYXNzIFRhc2sgLSBhcmcyIGlzIHRoZSBwcm9qZWN0SWQgLSBhcmczIGlzIHRoZSBkaXYgY29udGFpbmVyIGZvciB0aGUgdGFza0Zvcm0gXHJcbiAgICBhcmc0IGVzIGVsIGFycmF5UHJvamVjdHMgKi9cclxuXHJcbmxldCBpZCA9IGFyZzI7XHJcbmNvbnNvbGUubG9nKCdwcnVlYmEgZGUgZnVuY2lvbiBuZXdUYXNrJyk7XHJcbmNvbnNvbGUubG9nKGlkKTtcclxuY29uc29sZS5sb2coYXJnMyk7XHJcbmxldCBhcnJheVByb2plY3RzID0gYXJnNDsgXHJcbmNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG5cclxuLyogY3JlYXIgZm9ybWEgcGFyYSBjYXB0YXIgbGEgbnVldmEgdGFyZWEgKi9cclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbmNvbnN0IGxhYmVsRm9yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGxhYmVsRm9yTG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yTWVkaWFQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IG1lZGlhUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5jb25zdCBsYWJlbEZvckhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IGxhYmVsRm9yTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuY29uc3QgbGFiZWxGb3JDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5jb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgY29uc3QgZmllbGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IGZpZWxkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb25zdCBmaWVsZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29uc3QgZmllbGQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cclxuICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9ybVRhc2snKTtcclxuXHJcbiAgIGxhYmVsRm9yVGl0bGUuaW5uZXJUZXh0ID0gXCJBZGQgdGhlIHRpdGxlIG9mIHRoZSB0YXNrOiBcIjtcclxuICAgbGFiZWxGb3JUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlJyk7XHJcbiAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XHJcbiAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywndGl0bGUnKTtcclxuICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcbiAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsdHJ1ZSk7XHJcblxyXG5cclxuICAgbGFiZWxGb3JEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkFkZGl0aW9uYWwgZGVzY3JpcHRpb246IFwiO1xyXG4gICBsYWJlbEZvckRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKTtcclxuICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKTtcclxuICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkZXNjcmlwdGlvbicpO1xyXG4gICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuXHJcbiAgIGxhYmVsRm9yRHVlRGF0ZS5pbm5lclRleHQgPSBcIlRhc2sncyBEdWUgRGF0ZTogXCI7XHJcbiAgIGxhYmVsRm9yRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2R1ZURhdGVUYXNrJyk7XHJcbiAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZHVlRGF0ZVRhc2snKTtcclxuICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2R1ZURhdGUnKTtcclxuICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcclxuICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLHRydWUpO1xyXG5cclxuXHJcbiAgIHByaW9yaXR5SW5wdXQuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XHJcbiAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcclxuICAgXHJcbiAgIGxhYmVsRm9yTG93UHJpb3JpdHkuaW5uZXJUZXh0ID0nbG93JztcclxuICAgbGFiZWxGb3JMb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xvdycpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnbG93Jyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XHJcbiAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKTtcclxuICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjaGVja2VkJyx0cnVlKTtcclxuXHJcbiAgIGxhYmVsRm9yTWVkaWFQcmlvcml0eS5pbm5lclRleHQgPSdtZWRpYSc7XHJcbiAgIGxhYmVsRm9yTWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ21lZGlhJyk7XHJcbiAgIG1lZGlhUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgbWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVkaWEnKTtcclxuICAgbWVkaWFQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xyXG4gICBtZWRpYVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdtZWRpYScpO1xyXG5cclxuICAgbGFiZWxGb3JIaWdoUHJpb3JpdHkuaW5uZXJUZXh0ID0naGlnaCc7XHJcbiAgIGxhYmVsRm9ySGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywnaGlnaCcpO1xyXG4gICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdoaWdoJyk7XHJcbiAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xyXG4gICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2hpZ2gnKTtcclxuXHJcbiAgIGxhYmVsRm9yTm90ZXMuaW5uZXJUZXh0ID0gXCJBZGRpdGlvbmFsIG5vdGVzOiBcIjtcclxuICAgbGFiZWxGb3JOb3Rlcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25vdGVzJyk7XHJcbiAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ25vdGVzJyk7XHJcbiAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnbm90ZXMnKTtcclxuICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcblxyXG4gICBsYWJlbEZvckNoZWNrbGlzdC5pbm5lclRleHQgPSdET05FJztcclxuICAgbGFiZWxGb3JDaGVja2xpc3Quc2V0QXR0cmlidXRlKCdmb3InLCdjaGVja2xpc3QnKTtcclxuICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2NoZWNrbGlzdCcpO1xyXG4gICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcclxuICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2ZhbHNlJyk7XHJcblxyXG4gICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNSRUFURSBUYXNrXCI7XHJcbiAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcclxuICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcclxuXHJcbiAgIGFyZzMuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQxKTtcclxuICAgZmllbGQxLmFwcGVuZENoaWxkKGxhYmVsRm9yVGl0bGUpO1xyXG4gICBmaWVsZDEuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQyKTtcclxuICAgZmllbGQyLmFwcGVuZENoaWxkKGxhYmVsRm9yRGVzY3JpcHRpb24pO1xyXG4gICBmaWVsZDIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQzKTtcclxuICAgZmllbGQzLmFwcGVuZENoaWxkKGxhYmVsRm9yRHVlRGF0ZSk7XHJcbiAgIGZpZWxkMy5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkNCk7XHJcbiAgIGZpZWxkNC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvckxvd1ByaW9yaXR5KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JNZWRpYVByaW9yaXR5KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpYVByaW9yaXR5KTtcclxuICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvckhpZ2hQcmlvcml0eSk7XHJcbiAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDUpO1xyXG4gICBmaWVsZDUuYXBwZW5kQ2hpbGQobGFiZWxGb3JOb3Rlcyk7XHJcbiAgIGZpZWxkNS5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcclxuICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZDYpO1xyXG4gICBmaWVsZDYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICBmaWVsZDYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkNyk7XHJcbiAgIGZpZWxkNy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgbG93UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgICB9KTtcclxuICAgbWVkaWFQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgIH0pO1xyXG4gICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcclxuICAgICB9KTtcclxuXHJcbiAgIGNoZWNrbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHRvZ2dsZURvbmVVbmRvbmUoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgIGxldCBwcmlvcml0eVNlbGVjdGVkID0gJyc7XHJcbiAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICBcclxuICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgIHByaW9yaXR5U2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eVNlbGVjdGVkKTsgXHJcbiAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXCIpOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHJldHVybiBwcmlvcml0eVNlbGVjdGVkO1xyXG4gICAgIH07XHJcbiAgIFxyXG4gICAvKiBmaW5hbGl6YSBsYSBmdW5jaW9uIHF1ZSBjcmVhIGVsIGZvcm11bGFyaW8gKi9cclxuXHJcbmNvbnN0IHJlYWRBZGRlZFRhc2sgPSAoKSA9PiB7ICAgICAvKiBsZWUgeSBhcmNoaXZhIGxhIHRhcmVhIHF1ZSBmdWUgYWdyZWdhZGEgYSB0cmF2ZXMgZGVsIGZvcm11bGFyaW8gKi9cclxuICBcclxuICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgbGV0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmV3dGFza1wiKSk7XHJcbiAgICBsZXQgaWRUID0gdGFzay5wcm9qZWN0SWQ7XHJcbiAgICBsZXQgdGl0bGUgPSB0YXNrLnRpdGxlO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGxldCBwcm9qZWN0VG9QdXNoID0gW107XHJcbiAgICBsZXQgcmVzdCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoYXJyYXlQcm9qZWN0c1tpXVsnaWQnXSA9PSBpZFQpe1xyXG4gICAgICAgICAgICBwcm9qZWN0VG9QdXNoLnB1c2goYXJyYXlQcm9qZWN0c1tpXSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlc3QucHVzaChhcnJheVByb2plY3RzW2ldKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9QdXNoKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3QpO1xyXG4gICAgbGV0IHJlc3RMZW5ndGggPSByZXN0Lmxlbmd0aDtcclxuICAgIGNvbnNvbGUubG9nKHJlc3RMZW5ndGgpO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IHByb2plY3RUb1B1c2hbMF1bJ3Rhc2tzJ107XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcbiAgICBsZXQgdGFza3NMZW5ndGggPSB0YXNrcy5sZW5ndGg7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xlbmd0aCk7XHJcbi8qIGFncmVnYXIgdW5hIGNvbmRpY2lvbiBwYXJhIGN1YW5kbyBlbCBhcnJheSBlcyBsb25naXR1ZCAwIHkgcGFyYSBjdWFuZG8gdGllbmUgb3RyYXMgdGFyZWFzICovXHJcbiAgICBpZiAodGFza3NMZW5ndGg9PTApe1xyXG4gICAgcHJvamVjdFRvUHVzaFswXVsndGFza3MnXSA9IFt0YXNrXTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUb1B1c2gpO1xyXG4gICAgfWVsc2V7XHJcbiAgICBwcm9qZWN0VG9QdXNoWzBdWyd0YXNrcyddLnB1c2godGFzayk7ICBcclxuICAgIH1cclxuLyogbHVlZ28gbW9kaWZpY2FyIGVsIGFycmF5IG9yaWdpbmFsIHN1bWFuZG8gZWwgcmVzdCBjb24gZWwgcHJveWVjdG8gZG9uZGUgc2UgYWdyZWdvIGxhIHRhcmVhICovICAgXHJcbiAgICBpZiAocmVzdExlbmd0aD09MCl7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0cyA9IHByb2plY3RUb1B1c2g7XHJcbiAgICB9ZWxzZXtcclxuLyogdmEgYSBhZ3JlZ2FyIGVsIHByb3llY3RvIG1vZGlmaWNhZG8gYWwgZmluYWwgICovICAgICAgIFxyXG4gICAgICAgIGFycmF5UHJvamVjdHMgPSByZXN0LmNvbmNhdChwcm9qZWN0VG9QdXNoKTtcclxuLyogb3JkZW5hIGVsIGFycmF5IGRlIGFjdWVyZG8gY29uIGxvcyBpZCBkZSBsb3MgcHJveWVjdG9zICAqLyAgXHJcbiAgICAgICBhcnJheVByb2plY3RzID0gc29ydE9iamVjdHMoYXJyYXlQcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuXHJcbiAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmJsdWU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Jyk7XHJcbiAgICBhcmczLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xyXG4gICAgXHJcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGUgVGFzayAnK3RpdGxlKycgd2FzIGFkZGVkIHRvIFByb2plY3QgJytpZFQ7XHJcbiAgXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJuZXd0YXNrXCIpO1xyXG5cclxuICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFycmF5UHJvamVjdHMpO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGFza2luZ0FnYWluID0gKCkgPT4geyBcclxuICAvKiBhcmcxIGlzIHRoZSBDbGFzcyBUYXNrIC0gYXJnMiBpcyB0aGUgcHJvamVjdElkIC0gYXJnMyBpcyB0aGUgZGl2IGNvbnRhaW5lciBmb3IgdGhlIHRhc2tGb3JtIFxyXG4gICAgYXJnNCBlcyBlbCBhcnJheVByb2plY3RzICovICBcclxuICAgIGFza0ZvckNvbnRpbnVlKGFyZzEsaWQsYXJnMyxhcnJheVByb2plY3RzKTtcclxuXHJcbn0gXHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codGl0bGUpO1xyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xyXG4gIFxyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZVRhc2snKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGR1ZURhdGVUYXNrKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xyXG4gICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xyXG4gIFxyXG4gICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhub3Rlcyk7XHJcblxyXG4gICAgbGV0IGNoZWNrbGlzdCA9IHRvZ2dsZURvbmVVbmRvbmUoY2hlY2tsaXN0SW5wdXQpO1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTtcclxuXHJcbiAgICBsZXQgcHJvamVjdElkID0gIGlkOyBcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbiAgXHJcbiAgICBcclxuICAgIGxldCB0YXNrID0gbmV3IGFyZzEodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3RlcyxjaGVja2xpc3QscHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuZXd0YXNrXCIsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcclxuXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGFzaycpLnJlc2V0KCk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gdGFzaztcclxuICBcclxuICB9KTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHJlYWRBZGRlZFRhc2spO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc2tpbmdBZ2Fpbik7XHJcbiBcclxuXHJcbnJldHVybiBhcnJheVByb2plY3RzO1xyXG4gICBcclxuXHJcbn0iLCJpbXBvcnQgdG9nZ2xlRG9uZVVuZG9uZSBmcm9tICcuL3NldHRpbmdDb21wbGV0ZSc7XHJcbmltcG9ydCBkZWxldGVPYmplY3RzIGZyb20gJy4vZGVsZXRlT2JqZWN0cy5qcyc7XHJcbmltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBwcmludFByb0xpc3QoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4vKiBlbCBhcmcxIGVzIGVsIGRpdiBwcm9qZWN0U2lkZSAtIGVsIGFyZzIgZXMgZWwgYXJyYXlQcm9qZWN0cyBvYnRlbmlkbyBkZSBsZWVyIGVsIGxvY2Fsc3RvcmFnZSAtIGVsIGFyZyAzIGVzIGVsIGRpdiBwcm9qZWN0VGFza3MqL1xyXG5cclxuY29uc3QgcHJvamVjdFRhc2tzID0gYXJnMztcclxuXHJcbmNvbnNvbGUubG9nKCdwcnVlYmEgcHJpbnRQcm9MaXN0Jyk7XHJcblxyXG5jb25zdCBwcm9qZWN0U2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0U2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvJyk7XHJcblxyXG5hcmcxLmFwcGVuZENoaWxkKHByb2plY3RTaWRlQmFyKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXJnMi5sZW5ndGgpOyAgXHJcbiAgICBcclxuICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxvcyBwcm95ZWN0b3MgKi9cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFyZzJbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFYWNoUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcclxuICAgICAgICAgICAgc2hvd1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb1RpdGxlJyk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuY2xhc3NMaXN0LmFkZCgnc3ViU2lkZUJhcicpO1xyXG4gICAgICAgICAgICBzaG93SWQuY2xhc3NMaXN0LmFkZCgncHJvSWQnKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnRleHRDb250ZW50ID0gXCJTSE9XIFRBU0tTXCI7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnZGF0YScsIGN1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuVGFzaycrY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzdWJ0YXNrJyk7IFxyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuY2xhc3NMaXN0LmFkZCgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFza3NDb250YWluZXInKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJyNwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaG93VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb3BlbkRpdih0YXJnZXQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUYXNrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrVGVzdC5pbm5lclRleHQgPSAnUFJPSkVDVCAnK2N1cnJlbnRQcm9qZWN0LmlkKycgICcrY3VycmVudFByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MudGV4dENvbnRlbnQgPSBcIkhJREUgVEFTS1NcIjtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hpZGVCdXR0b24nKTtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cclxuICAgICAgICAgICAgaGlkZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsb3NlRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheVRhc2tzID0gY3VycmVudFByb2plY3QudGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgLyogaW1wcmltZSBlbCBhcnJheSBkZSBsYXMgdGFyZWFzICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEZvckNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdkRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID1hcnJheVRhc2tzW2ldW1wiZHVlRGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlY2hhZm9ybWF0ZWFkYSA9IGN1cnJlbnREdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZXMtZWMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZTogJ1VUQycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVjaGFmb3JtYXRlYWRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suY2xhc3NMaXN0LmFkZCgnZWFjaFRhc2snKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1Rhc2s6ICAnK2FycmF5VGFza3NbaV1bXCJ0aXRsZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0RldGFpbHM6ICAnK2FycmF5VGFza3NbaV1bXCJkZXNjcmlwdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICAnK2ZlY2hhZm9ybWF0ZWFkYTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnK2FycmF5VGFza3NbaV1bXCJwcmlvcml0eVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTm90ZXMuaW5uZXJUZXh0ID0gJ0FkZGl0aW9uYWwgbm90ZXM6ICcrYXJyYXlUYXNrc1tpXVtcIm5vdGVzXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGl2RGVsZXRlQnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQrJ3gnK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0nRE9ORSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3Quc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qJytjdXJyZW50UHJvamVjdC5pZCsndGFzaycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPT09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdD0nJztcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0ID0gdG9nZ2xlRG9uZVVuZG9uZShjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZzIgPSB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGN1cnJlbnRQcm9qZWN0LGFycmF5VGFza3MsY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPSBjaGVja2xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVRhc2tzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU9iamVjdHMoZGVsZXRlQnV0dG9uLGFyZzIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5hcHBlbmRDaGlsZChlYWNoVGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoY2hlY2tsaXN0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoZGl2RGVsZXRlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNob3dUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgc2hvd0lkLmlubmVyVGV4dCA9IFwiUHJvamVjdCBpZDogXCIgK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RTaWRlQmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc3ViU2lkZSk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuYXBwZW5kQ2hpbGQoc2hvd0lkKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93VGFza3MpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VhY2hQcm9qZWN0KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhlYWRlclRhc2tzKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza3MuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza1Rlc3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaW50ZXJtZWRpYXRlRGl2KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhpZGVUYXNrcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gb3BlbkRpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VEaXYodGFyZ2V0KSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21vc3RyYXInKTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiBhcmcxOyAgICBcclxuXHJcbiBcclxuICB9O1xyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gc2VuZERhdGFUb0xvY2FsKGFyZzEsYXJnMikge1xyXG5cclxuLyogYXJnMSBpcyB0aGUgbmFtZSBvZiB0aGUga2V5IC0gYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCB0aGUgZGF0YSAqL1xyXG5cclxubGV0IGtleSA9IGFyZzE7XHJcbmxldCBkYXRhVG9TZW5kID0gYXJnMjtcclxuXHJcbmNvbnNvbGUubG9nKGtleSk7XHJcbmNvbnNvbGUubG9nKGRhdGFUb1NlbmQpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSk7XHJcblxyXG5cclxuICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRG9uZVVuZG9uZShhcmcpIHtcclxuXHJcbiAgICAvKiBlbCBhcmcgZXMgZWwgaW5wdXQgY2hlY2tib3ggKi9cclxuICAgIGxldCBjaGVja2xpc3RJbnB1dCA9IGFyZztcclxuICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gY2hlY2tsaXN0SW5wdXQudmFsdWU7IFxyXG4gICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBsZXQgY2hlY2tsaXN0ID0gJyc7XHJcbiAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICdmYWxzZScpIHsgICBcclxuICAgICAgICBjaGVja2xpc3QgPSAndHJ1ZSc7XHJcbiAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgY2hlY2tsaXN0ID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7IFxyXG4gcmV0dXJuIGNoZWNrbGlzdDtcclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHNvcnRPYmplY3RzKGFyZykge1xyXG4gICBcclxuICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnOyBcclxuXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgbGV0IGFycmF5SWQgPSBbXTtcclxuICAgIGxldCBpdGVtID0gMDtcclxuIFxyXG4gXHJcbiAgICBmdW5jdGlvbiBzb3J0SWQoKXtcclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG4gICAgIGl0ZW0gPSBhcnJheVByb2plY3RzW2ldW1wiaWRcIl07XHJcbiAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgYXJyYXlJZC5wdXNoKGl0ZW0pO1xyXG4gICAgIGNvbnNvbGUubG9nKGFycmF5SWQpO1xyXG4gICAgIGFycmF5SWQuc29ydCgpO1xyXG4gICAgIH07IFxyXG4gICAgIHJldHVybiBhcnJheUlkO1xyXG4gICAgIH07XHJcbiAgICAgXHJcbiAgICAgbGV0IGlkU29ydGVkID0gc29ydElkKCk7XHJcbiAgICAgY29uc29sZS5sb2coaWRTb3J0ZWQpO1xyXG4gICAgIFxyXG4gICAgIGxldCBjdXJyZW50SWQgPSAwO1xyXG4gICAgIGxldCBhcnJheVNvcnRlZCA9IFtdO1xyXG4gICAgIFxyXG4gICAgIGZ1bmN0aW9uIHNvcnRBcnJheU9iamVjdChpZFNvcnRlZCxhcnJheVByb2plY3RzKXtcclxuICAgICBcclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkU29ydGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGN1cnJlbnRJZCA9IGlkU29ydGVkW2ldO1xyXG4gICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgIGlmKCBjdXJyZW50SWQgPT0gYXJyYXlQcm9qZWN0c1tqXVtcImlkXCJdICl7XHJcbiAgICAgICAgICAgICAgICAgICBhcnJheVNvcnRlZC5wdXNoKGFycmF5UHJvamVjdHNbal0pO1xyXG4gICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICB9O1x0XHJcbiAgICAgfTtcclxuICAgICBjb25zb2xlLmxvZyhhcnJheVNvcnRlZCk7XHJcbiAgICAgcmV0dXJuIGFycmF5U29ydGVkOyBcclxuICAgICB9O1xyXG4gICAgIFxyXG4gICAgIGFycmF5UHJvamVjdHMgPSBzb3J0QXJyYXlPYmplY3QoaWRTb3J0ZWQsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbnJldHVybiBhcnJheVByb2plY3RzO1xyXG5cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=