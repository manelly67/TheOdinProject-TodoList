"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["weekTasks"],{

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

/***/ "./src/components/printSearch.js":
/*!***************************************!*\
  !*** ./src/components/printSearch.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printSearch)
/* harmony export */ });
function printSearch(arg1,arg2) {
 /* arg1 is the array with tasks searched - arg2 is the container */

let tasksSearched = arg1;
console.log(tasksSearched);

let arrayDates = [];
let item = 0;
let uniqueDates = [];


for (let i = 0; i < tasksSearched.length; i++)  {
    item = tasksSearched[i]["dueDate"];
    console.log(item);
    arrayDates.push(item);
    console.log(arrayDates);
    arrayDates.sort();   
}
/* take from the array the unique values */
uniqueDates.push(arrayDates[0]);
        for (let i = 0; i < arrayDates.length; i++) {
        if( arrayDates[i]!==arrayDates[i+1] &&  arrayDates[i+1]!==undefined ){
        uniqueDates.push(arrayDates[i+1]);
        }else{}
        }   
console.log(uniqueDates);

for (let i = 0; i < uniqueDates.length; i++) {
    const eachDate = document.createElement('div');
    const taskDueDate = document.createElement('p');

    taskDueDate.innerText = 'Tasks for '+uniqueDates[i];
    taskDueDate.setAttribute('style','font-size:1.5rem; text-transform:uppercase;text-align: center;');

    
    arg2.appendChild(eachDate);
    eachDate.appendChild(taskDueDate);
    
    for (let j = 0; j < tasksSearched.length; j++){
        if( tasksSearched[j]["dueDate"] == uniqueDates[i] ){
            
            const div1 = document.createElement('div');
            const taskTitle = document.createElement('p');
            const projectOf = document.createElement('p');
            const div2 = document.createElement('div');
            const taskPriority = document.createElement('p');
            const checklistDiv = document.createElement('div');
            const labelForChecklist = document.createElement('p');
            const checklistInput = document.createElement('input');

            div1.setAttribute('style','display:flex;justify-content: flex-start;');
            taskTitle.innerText = 'Task: '+  tasksSearched[j]["title"]+' - ';
            taskTitle.setAttribute('style','text-transform:uppercase;');
            projectOf.innerText = 'From PROJECT '+ tasksSearched[j]["projectId"]+' - ';
            checklistDiv.setAttribute('style','display:flex;justify-content: flex-end;'); 
            taskPriority.innerText = 'Priority: '+ tasksSearched[j]["priority"]+' - ';
                    labelForChecklist.innerText = 'DONE';
                    checklistInput.setAttribute('name','checklist');
                    checklistInput.setAttribute('type','checkbox');
                    checklistInput.setAttribute('value',tasksSearched[j]["checklist"]);
                    if (tasksSearched[j]["checklist"] === 'true'){
                      checklistInput.setAttribute('checked',true);
                    }


                    eachDate.appendChild(div1);
                    eachDate.appendChild(div2);
            div1.appendChild(taskTitle);
            div1.appendChild(projectOf);
            div1.appendChild(taskPriority);
            div1.appendChild(checklistDiv);
            checklistDiv.appendChild(labelForChecklist);
            checklistDiv.appendChild(checklistInput);

        }
    }
    

}


}




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

/***/ "./src/components/weekTasks.js":
/*!*************************************!*\
  !*** ./src/components/weekTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weekTasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var _closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeAndRefresh.js */ "./src/components/closeAndRefresh.js");
/* harmony import */ var _printSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printSearch.js */ "./src/components/printSearch.js");






function weekTasks(arg1,arg2) {

    let arrayProjects = new arg1(0,'',[],'');
    let arrayForToday = [];
    let arrayProjectsLength = 0;
    const today = new Date();
    const futureDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.add)(today, { weeks: 1 });
    
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
        
            after = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(dueDate, today);
            console.log(after);
            before = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(dueDate, futureDate);
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
        (0,_printSearch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayForToday,displayProjects);
    }


    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      (0,_closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayProjects)
    });
    
    formContainer.appendChild(closeButton);
    formContainer.appendChild(mensaje);
    formContainer.appendChild(displayProjects);

}

/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/isAfter.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isAfter.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/weekTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jbGVhckNvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Nsb3NlQW5kUmVmcmVzaC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGVPYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wcmludFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ByaW50U2VhcmNoLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZW5kRGF0YVRvTG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvd2Vla1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkLm1qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkTW9udGhzLm1qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNBZnRlci5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0JlZm9yZS5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKmFyZzEgaXMgdGhlIGNsYXNzIG9mIHRoZSBjb250YWluZXIgZm9yIHJlbW92ZSAqL1xyXG4gICAgbGV0IGNsYXNzVG9SZW1vdmUgPSBhcmcxO1xyXG4gICAgLyogbGltcGlhIGVsIGNvbnRlbmlkbyBhbnRlcmlvciAqL1xyXG4gICAgbGV0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc1RvUmVtb3ZlKTtcclxuXHJcbiAgICBpZiAoIGNvbnRlbnRJbmZvICE9IG51bGwpIHtcclxuICAgICAgICBjb250ZW50SW5mby5yZW1vdmUoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24gbm90IHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgICIsImltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VBbmRSZWZyZXNoKGFyZykge1xyXG5cclxuICAgIC8qIHRoZSBhcmcgaXMgdGhlIGFycmF5IHdpdGggdGhlIHByb2plY3RzICovXHJcbiAgICAgIGNsZWFyQ29udGFpbmVycygnLmZvcm1Cb3gnKTsgXHJcbiAgICAgIGNyZWF0ZUNvbnRhaW5lcigndGFza3MnLCdwcm9qZWN0VGFza3MnKTtcclxuICAgICAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICAgICAgbGV0IHByb2plY3RTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2lkZSk7XHJcbiAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUYXNrcyk7XHJcbiAgICAgICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmc7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAgICAgLyogIGxsYW1hciBkZSBudWV2byBhIGxhIGZ1bmNpb24gZGUgcHJpbnRQcm9qZWN0ICAqL1xyXG4gICAgICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcblxyXG5cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKGFyZzEsYXJnMikge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIGNsYXNzIGZvciB0aGUgbmV3IGNvbnRhaW5lciAtIHRoZSBhcmcyIGlzIHRoZSBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBuZXcgY29udGFpbmVyICAgKi9cclxuICAgIGxldCBjbGFzc1RvQWRkID0gYXJnMSA7XHJcbiAgICBsZXQgIGlkRm9yQ29udGFpbmVyID0gYXJnMjtcclxuICAgXHJcbiAgICAvKiBjcmVhIHVuIG51ZXZvIGNvbnRhaW5lciAqL1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsaWRGb3JDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4iLCJpbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBkZWxldGVPYmplY3RzKGFyZzEsYXJnMikge1xyXG5cclxuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpID09PSB0cnVlKSB7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2cgKGFycmF5UHJvamVjdHMpO1xyXG5cclxuICAgIGxldCBnZXRJbmRleCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdkYXRhJyk7IFxyXG5cclxuICAgIGxldCBhID0gZ2V0SW5kZXguaW5kZXhPZigneCcpO1xyXG4gICAgbGV0IGIgPSBhICsxO1xyXG4gICAgbGV0IGVuZCA9IGdldEluZGV4Lmxlbmd0aDtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3RJZCA9IGdldEluZGV4LnNsaWNlKDAsYSk7XHJcbiAgICBwcm9qZWN0SWQgPSBOdW1iZXIocHJvamVjdElkKTtcclxuICAgIFxyXG4gICAgbGV0IGlPZkFycmF5ID0gZ2V0SW5kZXguc2xpY2UoYixlbmQpO1xyXG4gICAgaU9mQXJyYXkgPSBOdW1iZXIoaU9mQXJyYXkpO1xyXG4gICAgXHJcbiAgICBsZXQgaXRlbSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICBpdGVtID0gYXJyYXlQcm9qZWN0c1tpXVtcImlkXCJdO1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBpZiAoaXRlbSA9PSBwcm9qZWN0SWQpe1xyXG4gICAgICAgIGFycmF5UHJvamVjdHNbaV1bXCJ0YXNrc1wiXS5wb3AoaU9mQXJyYXkpO1x0XHJcblxyXG4gICAgfSBcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRJbmRleC5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coYSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2coaU9mQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGlPZkFycmF5KTtcclxuXHJcbiAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuICAgIC8qIGZyb20gaGVyZSByZWZyZXNoIHRoZSBwcmludCBvZiB0aGUgcHJvamVjdCBhbmQgdGFza3MgKi9cclxuICAgIGNsZWFyQ29udGFpbmVycygnLnRhc2tzJyk7XHJcbiAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJyNwcm9qZWN0Jytwcm9qZWN0SWQ7XHJcbiAgICBjb25zdCBvcGVuRGl2ID0gKHRhcmdldCkgPT57IFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBvcGVuRGl2KHRhcmdldCk7XHJcbiAgICBcclxufVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxufSIsImltcG9ydCB0b2dnbGVEb25lVW5kb25lIGZyb20gJy4vc2V0dGluZ0NvbXBsZXRlJztcclxuaW1wb3J0IGRlbGV0ZU9iamVjdHMgZnJvbSAnLi9kZWxldGVPYmplY3RzLmpzJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHByaW50UHJvTGlzdChhcmcxLCBhcmcyLCBhcmczKSB7XHJcbi8qIGVsIGFyZzEgZXMgZWwgZGl2IHByb2plY3RTaWRlIC0gZWwgYXJnMiBlcyBlbCBhcnJheVByb2plY3RzIG9idGVuaWRvIGRlIGxlZXIgZWwgbG9jYWxzdG9yYWdlIC0gZWwgYXJnIDMgZXMgZWwgZGl2IHByb2plY3RUYXNrcyovXHJcblxyXG5jb25zdCBwcm9qZWN0VGFza3MgPSBhcmczO1xyXG5cclxuY29uc29sZS5sb2coJ3BydWViYSBwcmludFByb0xpc3QnKTtcclxuXHJcbmNvbnN0IHByb2plY3RTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm8nKTtcclxuXHJcbmFyZzEuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVCYXIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcmcyLmxlbmd0aCk7ICBcclxuICAgIFxyXG4gICAgICAgIC8qIGltcHJpbWUgZWwgYXJyYXkgZGUgbG9zIHByb3llY3RvcyAqL1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXJnMltpXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0VhY2hQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybWVkaWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xyXG4gICAgICAgICAgICBzaG93VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvVGl0bGUnKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5jbGFzc0xpc3QuYWRkKCdzdWJTaWRlQmFyJyk7XHJcbiAgICAgICAgICAgIHNob3dJZC5jbGFzc0xpc3QuYWRkKCdwcm9JZCcpO1xyXG4gICAgICAgICAgICBzaG93VGFza3MudGV4dENvbnRlbnQgPSBcIlNIT1cgVEFTS1NcIjtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICdidG5UYXNrJytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2snKTsgXHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAnI3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBvcGVuRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRhc2snKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFza1Rlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tUZXN0LmlubmVyVGV4dCA9ICdQUk9KRUNUICcrY3VycmVudFByb2plY3QuaWQrJyAgJytjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgaGlkZVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy50ZXh0Q29udGVudCA9IFwiSElERSBUQVNLU1wiO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnaGlkZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcblxyXG4gICAgICAgICAgICBoaWRlVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvc2VEaXYodGFyZ2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5VGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcblxyXG4gICAgICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxhcyB0YXJlYXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5VGFza3MubGVuZ3RoOyBpKyspIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVhY2hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPWFycmF5VGFza3NbaV1bXCJkdWVEYXRlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVjaGFmb3JtYXRlYWRhID0gY3VycmVudER1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlcy1lYycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lOiAnVVRDJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWNoYWZvcm1hdGVhZGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5jbGFzc0xpc3QuYWRkKCdlYWNoVGFzaycpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSAnVGFzazogICcrYXJyYXlUYXNrc1tpXVtcInRpdGxlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGV0YWlsczogICcrYXJyYXlUYXNrc1tpXVtcImRlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogICcrZmVjaGFmb3JtYXRlYWRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICcrYXJyYXlUYXNrc1tpXVtcInByaW9yaXR5XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tOb3Rlcy5pbm5lclRleHQgPSAnQWRkaXRpb25hbCBub3RlczogJythcnJheVRhc2tzW2ldW1wibm90ZXNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXZEZWxldGVCdXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBjdXJyZW50UHJvamVjdC5pZCsneCcraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bjMnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5pbm5lclRleHQgPSdET05FJztcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvaicrY3VycmVudFByb2plY3QuaWQrJ3Rhc2snK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9PT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0PScnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QgPSB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnMiA9IHVwZGF0ZShjdXJyZW50UHJvamVjdCxhcnJheVRhc2tzLGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9IGNoZWNrbGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZzI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlT2JqZWN0cyhkZWxldGVCdXR0b24sYXJnMik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlRGl2LmFwcGVuZENoaWxkKGVhY2hUYXNrKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza05vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChjaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChkaXZEZWxldGVCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgc2hvd1RpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBzaG93SWQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0IGlkOiBcIiArY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdFNpZGVCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc2hvd1RpdGxlKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5hcHBlbmRDaGlsZChzdWJTaWRlKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93SWQpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmFwcGVuZENoaWxkKHNob3dUYXNrcyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrRWFjaFByb2plY3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza3MpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5hcHBlbmRDaGlsZChoZWFkZXJUYXNrVGVzdCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChpbnRlcm1lZGlhdGVEaXYpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGlkZVRhc2tzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBvcGVuRGl2KHRhcmdldCkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICggZGl2ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25lZWQgcmVmcmVzaCBmb3IgdXBkYXRlcycpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZURpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnbW9zdHJhcicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyZzE7ICAgIFxyXG5cclxuIFxyXG4gIH07XHJcbiAgXHJcbiIsImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBwcmludFNlYXJjaChhcmcxLGFyZzIpIHtcclxuIC8qIGFyZzEgaXMgdGhlIGFycmF5IHdpdGggdGFza3Mgc2VhcmNoZWQgLSBhcmcyIGlzIHRoZSBjb250YWluZXIgKi9cclxuXHJcbmxldCB0YXNrc1NlYXJjaGVkID0gYXJnMTtcclxuY29uc29sZS5sb2codGFza3NTZWFyY2hlZCk7XHJcblxyXG5sZXQgYXJyYXlEYXRlcyA9IFtdO1xyXG5sZXQgaXRlbSA9IDA7XHJcbmxldCB1bmlxdWVEYXRlcyA9IFtdO1xyXG5cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NTZWFyY2hlZC5sZW5ndGg7IGkrKykgIHtcclxuICAgIGl0ZW0gPSB0YXNrc1NlYXJjaGVkW2ldW1wiZHVlRGF0ZVwiXTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgYXJyYXlEYXRlcy5wdXNoKGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlEYXRlcyk7XHJcbiAgICBhcnJheURhdGVzLnNvcnQoKTsgICBcclxufVxyXG4vKiB0YWtlIGZyb20gdGhlIGFycmF5IHRoZSB1bmlxdWUgdmFsdWVzICovXHJcbnVuaXF1ZURhdGVzLnB1c2goYXJyYXlEYXRlc1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheURhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoIGFycmF5RGF0ZXNbaV0hPT1hcnJheURhdGVzW2krMV0gJiYgIGFycmF5RGF0ZXNbaSsxXSE9PXVuZGVmaW5lZCApe1xyXG4gICAgICAgIHVuaXF1ZURhdGVzLnB1c2goYXJyYXlEYXRlc1tpKzFdKTtcclxuICAgICAgICB9ZWxzZXt9XHJcbiAgICAgICAgfSAgIFxyXG5jb25zb2xlLmxvZyh1bmlxdWVEYXRlcyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZURhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlYWNoRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gJ1Rhc2tzIGZvciAnK3VuaXF1ZURhdGVzW2ldO1xyXG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtc2l6ZToxLjVyZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOiBjZW50ZXI7Jyk7XHJcblxyXG4gICAgXHJcbiAgICBhcmcyLmFwcGVuZENoaWxkKGVhY2hEYXRlKTtcclxuICAgIGVhY2hEYXRlLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrc1NlYXJjaGVkLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBpZiggdGFza3NTZWFyY2hlZFtqXVtcImR1ZURhdGVcIl0gPT0gdW5pcXVlRGF0ZXNbaV0gKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxGb3JDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgIGRpdjEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Jyk7XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSAnVGFzazogJysgIHRhc2tzU2VhcmNoZWRbal1bXCJ0aXRsZVwiXSsnIC0gJztcclxuICAgICAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3RPZi5pbm5lclRleHQgPSAnRnJvbSBQUk9KRUNUICcrIHRhc2tzU2VhcmNoZWRbal1bXCJwcm9qZWN0SWRcIl0rJyAtICc7XHJcbiAgICAgICAgICAgIGNoZWNrbGlzdERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7Jyk7IFxyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnKyB0YXNrc1NlYXJjaGVkW2pdW1wicHJpb3JpdHlcIl0rJyAtICc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0gJ0RPTkUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsdGFza3NTZWFyY2hlZFtqXVtcImNoZWNrbGlzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tzU2VhcmNoZWRbal1bXCJjaGVja2xpc3RcIl0gPT09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hEYXRlLmFwcGVuZENoaWxkKGRpdjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hEYXRlLmFwcGVuZENoaWxkKGRpdjIpO1xyXG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQocHJvamVjdE9mKTtcclxuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGNoZWNrbGlzdERpdik7XHJcbiAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gc2VuZERhdGFUb0xvY2FsKGFyZzEsYXJnMikge1xyXG5cclxuLyogYXJnMSBpcyB0aGUgbmFtZSBvZiB0aGUga2V5IC0gYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCB0aGUgZGF0YSAqL1xyXG5cclxubGV0IGtleSA9IGFyZzE7XHJcbmxldCBkYXRhVG9TZW5kID0gYXJnMjtcclxuXHJcbmNvbnNvbGUubG9nKGtleSk7XHJcbmNvbnNvbGUubG9nKGRhdGFUb1NlbmQpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSk7XHJcblxyXG5cclxuICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRG9uZVVuZG9uZShhcmcpIHtcclxuXHJcbiAgICAvKiBlbCBhcmcgZXMgZWwgaW5wdXQgY2hlY2tib3ggKi9cclxuICAgIGxldCBjaGVja2xpc3RJbnB1dCA9IGFyZztcclxuICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gY2hlY2tsaXN0SW5wdXQudmFsdWU7IFxyXG4gICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBsZXQgY2hlY2tsaXN0ID0gJyc7XHJcbiAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICdmYWxzZScpIHsgICBcclxuICAgICAgICBjaGVja2xpc3QgPSAndHJ1ZSc7XHJcbiAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgY2hlY2tsaXN0ID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7IFxyXG4gcmV0dXJuIGNoZWNrbGlzdDtcclxuXHJcbn0iLCJpbXBvcnQgeyBpc0JlZm9yZSwgaXNBZnRlciwgaXNFcXVhbCB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgYWRkLCBzdWIsIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBjbG9zZUFuZFJlZnJlc2ggZnJvbSAnLi9jbG9zZUFuZFJlZnJlc2guanMnO1xyXG5pbXBvcnQgcHJpbnRTZWFyY2ggZnJvbSAnLi9wcmludFNlYXJjaC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHdlZWtUYXNrcyhhcmcxLGFyZzIpIHtcclxuXHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IG5ldyBhcmcxKDAsJycsW10sJycpO1xyXG4gICAgbGV0IGFycmF5Rm9yVG9kYXkgPSBbXTtcclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gMDtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZ1dHVyZURhdGUgPSBhZGQodG9kYXksIHsgd2Vla3M6IDEgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcIjIwMjQtMDUtMTRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiAgICBjb25zb2xlLmxvZyhmdXR1cmVEYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKHV0Y0RhdGUpO1xyXG4gICBcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuXHJcbiAgICBjb25zdCBtZW5zYWplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgXHJcbiAgICAvKiBpbmljaW8gb2J0ZW5lciBkZWwgb2JqZXRvIGpzb24gbGVpZG8gbG9zIGRhdG9zIHByaW5jaXBhbGVzIG5lY2VzYXJpb3MgKi9cclxuICAgICAgICBpZiAocHJvamVjdExpc3QgIT09IG51bGwgKSB7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0cyA9IHByb2plY3RMaXN0O1xyXG4gICAgICAgIGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGFycmF5UHJvamVjdHNMZW5ndGg9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhcnJheVByb2plY3RzTGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgbmVlZCB0byBDUkVBVEUgeW91ciBvd24gUFJPSkVDVCBmaXJzdCcpO1xyXG4gICAgICAgIG1lbnNhamUuaW5uZXJUZXh0ID0gJ1lvdSBuZWVkIHRvIENSRUFURSB5b3VyIG93biBQUk9KRUNUIGZpcnN0IFxcbiAgXFxuIENMSUNLIElOIE5FVyBQUk9KRUNUJztcclxuICAgICAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzTGVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gLyogbGVlIGVsIGFycmF5IGRlIGxvcyBwcm95ZWN0b3MgeSBsYXMgdGFyZWFzIHkgY3JlYSB1biBhcnJheSBjb24gbGFzIHRhcmVhcyBxdWUgY3VtcGxlbiBsb3MgY3JpdGVyaW9zIGRlIGxhIGJ1c3F1ZWRhKi9cclxuXHJcbiBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXJyYXlQcm9qZWN0c1tpXTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuICAgIGNvbnN0IGFycmF5VGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcztcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG4gICAgbGV0IGFmdGVyID0gZmFsc2U7XHJcbiAgICBsZXQgYmVmb3JlID0gZmFsc2U7XHJcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcclxuICAgIGxldCBjaGVja1dlZWsgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkdWVEYXRlID1hcnJheVRhc2tzW2pdW1wiZHVlRGF0ZVwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYWZ0ZXIgPSBpc0FmdGVyKGR1ZURhdGUsIHRvZGF5KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWZ0ZXIpO1xyXG4gICAgICAgICAgICBiZWZvcmUgPSBpc0JlZm9yZShkdWVEYXRlLCBmdXR1cmVEYXRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYmVmb3JlKTtcclxuICAgICAgICAgICAgaWYgKCBhZnRlciA9PSB0cnVlICYmIGJlZm9yZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY2hlY2tXZWVrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNoZWNrV2VlayA9IGZhbHNlOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja1dlZWspO1xyXG5cclxuICAgICAgICBpZihjaGVja1dlZWs9PT10cnVlKXtcclxuICAgICAgICBhcnJheUZvclRvZGF5LnB1c2goYXJyYXlQcm9qZWN0c1tpXVtcInRhc2tzXCJdW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcbiBjb25zb2xlLmxvZyhhcnJheUZvclRvZGF5KTtcclxuICAgIGlmIChhcnJheUZvclRvZGF5Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBjb25zdCBub1Rhc2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5vVGFza01lc3NhZ2UuaW5uZXJUZXh0ID0gJ3RoZXJlIGFyZSBubyB0YXNrcyBhc3NpZ25lZCBmb3IgdGhpcyB3ZWVrJztcclxuICAgICAgICBub1Rhc2tNZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LXNpemU6MS41cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjogY2VudGVyOycpO1xyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cy5hcHBlbmRDaGlsZChub1Rhc2tNZXNzYWdlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHByaW50U2VhcmNoKGFycmF5Rm9yVG9kYXksZGlzcGxheVByb2plY3RzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrcycpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQm94Jyk7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ0xPU0VcIjtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uQ2xvc2VCdXR0b24nKTtcclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQW5kUmVmcmVzaChhcnJheVByb2plY3RzKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW5zYWplKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3RzKTtcclxuXHJcbn0iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcbmltcG9ydCB7IGFkZE1vbnRocyB9IGZyb20gXCIuL2FkZE1vbnRocy5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gZHVyYXRpb24gLSBUaGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxcXFwtN1xuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKGRhdGUsIGR1cmF0aW9uKSB7XG4gIGNvbnN0IHtcbiAgICB5ZWFycyA9IDAsXG4gICAgbW9udGhzID0gMCxcbiAgICB3ZWVrcyA9IDAsXG4gICAgZGF5cyA9IDAsXG4gICAgaG91cnMgPSAwLFxuICAgIG1pbnV0ZXMgPSAwLFxuICAgIHNlY29uZHMgPSAwLFxuICB9ID0gZHVyYXRpb247XG5cbiAgLy8gQWRkIHllYXJzIGFuZCBtb250aHNcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRhdGVXaXRoTW9udGhzID1cbiAgICBtb250aHMgfHwgeWVhcnMgPyBhZGRNb250aHMoX2RhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogX2RhdGU7XG5cbiAgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG4gIGNvbnN0IGRhdGVXaXRoRGF5cyA9XG4gICAgZGF5cyB8fCB3ZWVrcyA/IGFkZERheXMoZGF0ZVdpdGhNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpIDogZGF0ZVdpdGhNb250aHM7XG5cbiAgLy8gQWRkIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG4gIGNvbnN0IG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICBjb25zdCBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XG4gIGNvbnN0IG1zVG9BZGQgPSBzZWNvbmRzVG9BZGQgKiAxMDAwO1xuICBjb25zdCBmaW5hbERhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcblxuICByZXR1cm4gZmluYWxEYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZDtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqXG4gKiAvLyBBZGQgb25lIG1vbnRoIHRvIDMwIEphbnVhcnkgMjAyMzpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDIzLCAwLCAzMCksIDEpXG4gKiAvLz0+IFR1ZSBGZWIgMjggMjAyMyAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9udGhzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIGNvbnN0IGRheU9mTW9udGggPSBfZGF0ZS5nZXREYXRlKCk7XG5cbiAgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuICBjb25zdCBlbmRPZkRlc2lyZWRNb250aCA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgX2RhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoX2RhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICBjb25zdCBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBfZGF0ZS5zZXRGdWxsWWVhcihcbiAgICAgIGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgICBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLFxuICAgICAgZGF5T2ZNb250aCxcbiAgICApO1xuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZE1vbnRocztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0gZGF0ZVRvQ29tcGFyZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICpcbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBfZGF0ZS5nZXRUaW1lKCkgPiBfZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNBZnRlcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9