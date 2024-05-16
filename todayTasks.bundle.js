"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["todayTasks"],{

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

/***/ "./src/components/todayTasks.js":
/*!**************************************!*\
  !*** ./src/components/todayTasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todayTasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isEqual.mjs");
/* harmony import */ var _closeAndRefresh_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeAndRefresh.js */ "./src/components/closeAndRefresh.js");
/* harmony import */ var _printSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printSearch.js */ "./src/components/printSearch.js");





function todayTasks(arg1,arg2) {

    let arrayProjects = new arg1(0,'',[],'');
    let arrayForToday = [];
    let arrayProjectsLength = 0;
    const today = new Date();
    console.log(today);
   
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
    
    for (let j = 0; j < arrayTasks.length; j++) {
    
        const dueDate =arrayTasks[j]["dueDate"];
        console.log(dueDate);
        const checkToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(dueDate, today); 
        console.log(checkToday);

        if(checkToday===true){
        arrayForToday.push(arrayProjects[i]["tasks"][j]);
        }
    }
 }
 console.log(arrayForToday);
    if (arrayForToday.length == 0){
        const noTaskMessage = document.createElement('p');
        noTaskMessage.innerText = 'there are no tasks assigned for today';
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

/***/ "./node_modules/date-fns/isEqual.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isEqual.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isEqual: () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(leftDate);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(rightDate);
  return +_dateLeft === +_dateRight;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/todayTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQixtREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jbGVhckNvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Nsb3NlQW5kUmVmcmVzaC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGVPYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wcmludFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ByaW50U2VhcmNoLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZW5kRGF0YVRvTG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRXF1YWwubWpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyphcmcxIGlzIHRoZSBjbGFzcyBvZiB0aGUgY29udGFpbmVyIGZvciByZW1vdmUgKi9cclxuICAgIGxldCBjbGFzc1RvUmVtb3ZlID0gYXJnMTtcclxuICAgIC8qIGxpbXBpYSBlbCBjb250ZW5pZG8gYW50ZXJpb3IgKi9cclxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgaWYgKCBjb250ZW50SW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudEluZm8ucmVtb3ZlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uIG5vdCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAiLCJpbXBvcnQgY2xlYXJDb250YWluZXJzIGZyb20gJy4vY2xlYXJDb250YWluZXJzLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBwcmludFByb0xpc3QgZnJvbSAnLi9wcmludFByb2plY3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlQW5kUmVmcmVzaChhcmcpIHtcclxuXHJcbiAgICAvKiB0aGUgYXJnIGlzIHRoZSBhcnJheSB3aXRoIHRoZSBwcm9qZWN0cyAqL1xyXG4gICAgICBjbGVhckNvbnRhaW5lcnMoJy5mb3JtQm94Jyk7IFxyXG4gICAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICAgICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgIGxldCBhcnJheVByb2plY3RzID0gYXJnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHMpO1xyXG4gICAgICAgIC8qICBsbGFtYXIgZGUgbnVldm8gYSBsYSBmdW5jaW9uIGRlIHByaW50UHJvamVjdCAgKi9cclxuICAgICAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG5cclxuXHJcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxLGFyZzIpIHtcclxuICAgIC8qIHRoZSBhcmcxIGlzIHRoZSBjbGFzcyBmb3IgdGhlIG5ldyBjb250YWluZXIgLSB0aGUgYXJnMiBpcyB0aGUgaWQgYXR0cmlidXRlIGZvciB0aGUgbmV3IGNvbnRhaW5lciAgICovXHJcbiAgICBsZXQgY2xhc3NUb0FkZCA9IGFyZzEgO1xyXG4gICAgbGV0ICBpZEZvckNvbnRhaW5lciA9IGFyZzI7XHJcbiAgIFxyXG4gICAgLyogY3JlYSB1biBudWV2byBjb250YWluZXIgKi9cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGlkRm9yQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuIiwiaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0cyhhcmcxLGFyZzIpIHtcclxuXHJcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiKSA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5kZXggPSBhcmcxLmdldEF0dHJpYnV0ZSgnZGF0YScpOyBcclxuXHJcbiAgICBsZXQgYSA9IGdldEluZGV4LmluZGV4T2YoJ3gnKTtcclxuICAgIGxldCBiID0gYSArMTtcclxuICAgIGxldCBlbmQgPSBnZXRJbmRleC5sZW5ndGg7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SWQgPSBnZXRJbmRleC5zbGljZSgwLGEpO1xyXG4gICAgcHJvamVjdElkID0gTnVtYmVyKHByb2plY3RJZCk7XHJcbiAgICBcclxuICAgIGxldCBpT2ZBcnJheSA9IGdldEluZGV4LnNsaWNlKGIsZW5kKTtcclxuICAgIGlPZkFycmF5ID0gTnVtYmVyKGlPZkFycmF5KTtcclxuICAgIFxyXG4gICAgbGV0IGl0ZW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgIFxyXG4gICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgaWYgKGl0ZW0gPT0gcHJvamVjdElkKXtcclxuICAgICAgICBhcnJheVByb2plY3RzW2ldW1widGFza3NcIl0ucG9wKGlPZkFycmF5KTtcdFxyXG5cclxuICAgIH0gXHJcbiAgICBjb25zb2xlLmxvZyAoYXJyYXlQcm9qZWN0cyk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coZ2V0SW5kZXgubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGEpO1xyXG4gICAgY29uc29sZS5sb2coZW5kKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgcHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKGlPZkFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpT2ZBcnJheSk7XHJcblxyXG4gICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAvKiBmcm9tIGhlcmUgcmVmcmVzaCB0aGUgcHJpbnQgb2YgdGhlIHByb2plY3QgYW5kIHRhc2tzICovXHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy50YXNrcycpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgbGV0IHByb2plY3RTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUYXNrcyk7XHJcbiAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG4gICAgbGV0IHRhcmdldCA9ICcjcHJvamVjdCcrcHJvamVjdElkO1xyXG4gICAgY29uc3Qgb3BlbkRpdiA9ICh0YXJnZXQpID0+eyBcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCBkaXYgIT09IG51bGwpe1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmVlZCByZWZyZXNoIGZvciB1cGRhdGVzJyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgb3BlbkRpdih0YXJnZXQpO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgdG9nZ2xlRG9uZVVuZG9uZSBmcm9tICcuL3NldHRpbmdDb21wbGV0ZSc7XHJcbmltcG9ydCBkZWxldGVPYmplY3RzIGZyb20gJy4vZGVsZXRlT2JqZWN0cy5qcyc7XHJcbmltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBwcmludFByb0xpc3QoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4vKiBlbCBhcmcxIGVzIGVsIGRpdiBwcm9qZWN0U2lkZSAtIGVsIGFyZzIgZXMgZWwgYXJyYXlQcm9qZWN0cyBvYnRlbmlkbyBkZSBsZWVyIGVsIGxvY2Fsc3RvcmFnZSAtIGVsIGFyZyAzIGVzIGVsIGRpdiBwcm9qZWN0VGFza3MqL1xyXG5cclxuY29uc3QgcHJvamVjdFRhc2tzID0gYXJnMztcclxuXHJcbmNvbnNvbGUubG9nKCdwcnVlYmEgcHJpbnRQcm9MaXN0Jyk7XHJcblxyXG5jb25zdCBwcm9qZWN0U2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0U2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvJyk7XHJcblxyXG5hcmcxLmFwcGVuZENoaWxkKHByb2plY3RTaWRlQmFyKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXJnMi5sZW5ndGgpOyAgXHJcbiAgICBcclxuICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxvcyBwcm95ZWN0b3MgKi9cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFyZzJbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFYWNoUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcclxuICAgICAgICAgICAgc2hvd1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb1RpdGxlJyk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuY2xhc3NMaXN0LmFkZCgnc3ViU2lkZUJhcicpO1xyXG4gICAgICAgICAgICBzaG93SWQuY2xhc3NMaXN0LmFkZCgncHJvSWQnKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnRleHRDb250ZW50ID0gXCJTSE9XIFRBU0tTXCI7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnZGF0YScsIGN1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuVGFzaycrY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzdWJ0YXNrJyk7IFxyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuY2xhc3NMaXN0LmFkZCgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFza3NDb250YWluZXInKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJyNwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaG93VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb3BlbkRpdih0YXJnZXQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUYXNrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrVGVzdC5pbm5lclRleHQgPSAnUFJPSkVDVCAnK2N1cnJlbnRQcm9qZWN0LmlkKycgICcrY3VycmVudFByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MudGV4dENvbnRlbnQgPSBcIkhJREUgVEFTS1NcIjtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hpZGVCdXR0b24nKTtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cclxuICAgICAgICAgICAgaGlkZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsb3NlRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheVRhc2tzID0gY3VycmVudFByb2plY3QudGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgLyogaW1wcmltZSBlbCBhcnJheSBkZSBsYXMgdGFyZWFzICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEZvckNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdkRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID1hcnJheVRhc2tzW2ldW1wiZHVlRGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlY2hhZm9ybWF0ZWFkYSA9IGN1cnJlbnREdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZXMtZWMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZTogJ1VUQycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVjaGFmb3JtYXRlYWRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suY2xhc3NMaXN0LmFkZCgnZWFjaFRhc2snKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1Rhc2s6ICAnK2FycmF5VGFza3NbaV1bXCJ0aXRsZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0RldGFpbHM6ICAnK2FycmF5VGFza3NbaV1bXCJkZXNjcmlwdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICAnK2ZlY2hhZm9ybWF0ZWFkYTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnK2FycmF5VGFza3NbaV1bXCJwcmlvcml0eVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTm90ZXMuaW5uZXJUZXh0ID0gJ0FkZGl0aW9uYWwgbm90ZXM6ICcrYXJyYXlUYXNrc1tpXVtcIm5vdGVzXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGl2RGVsZXRlQnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQrJ3gnK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0nRE9ORSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3Quc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qJytjdXJyZW50UHJvamVjdC5pZCsndGFzaycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPT09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdD0nJztcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0ID0gdG9nZ2xlRG9uZVVuZG9uZShjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZzIgPSB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGN1cnJlbnRQcm9qZWN0LGFycmF5VGFza3MsY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPSBjaGVja2xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVRhc2tzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU9iamVjdHMoZGVsZXRlQnV0dG9uLGFyZzIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5hcHBlbmRDaGlsZChlYWNoVGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoY2hlY2tsaXN0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoZGl2RGVsZXRlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNob3dUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgc2hvd0lkLmlubmVyVGV4dCA9IFwiUHJvamVjdCBpZDogXCIgK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RTaWRlQmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc3ViU2lkZSk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuYXBwZW5kQ2hpbGQoc2hvd0lkKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93VGFza3MpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VhY2hQcm9qZWN0KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhlYWRlclRhc2tzKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza3MuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza1Rlc3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaW50ZXJtZWRpYXRlRGl2KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhpZGVUYXNrcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gb3BlbkRpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VEaXYodGFyZ2V0KSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21vc3RyYXInKTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiBhcmcxOyAgICBcclxuXHJcbiBcclxuICB9O1xyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gcHJpbnRTZWFyY2goYXJnMSxhcmcyKSB7XHJcbiAvKiBhcmcxIGlzIHRoZSBhcnJheSB3aXRoIHRhc2tzIHNlYXJjaGVkIC0gYXJnMiBpcyB0aGUgY29udGFpbmVyICovXHJcblxyXG5sZXQgdGFza3NTZWFyY2hlZCA9IGFyZzE7XHJcbmNvbnNvbGUubG9nKHRhc2tzU2VhcmNoZWQpO1xyXG5cclxubGV0IGFycmF5RGF0ZXMgPSBbXTtcclxubGV0IGl0ZW0gPSAwO1xyXG5sZXQgdW5pcXVlRGF0ZXMgPSBbXTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzU2VhcmNoZWQubGVuZ3RoOyBpKyspICB7XHJcbiAgICBpdGVtID0gdGFza3NTZWFyY2hlZFtpXVtcImR1ZURhdGVcIl07XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGFycmF5RGF0ZXMucHVzaChpdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5RGF0ZXMpO1xyXG4gICAgYXJyYXlEYXRlcy5zb3J0KCk7ICAgXHJcbn1cclxuLyogdGFrZSBmcm9tIHRoZSBhcnJheSB0aGUgdW5pcXVlIHZhbHVlcyAqL1xyXG51bmlxdWVEYXRlcy5wdXNoKGFycmF5RGF0ZXNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKCBhcnJheURhdGVzW2ldIT09YXJyYXlEYXRlc1tpKzFdICYmICBhcnJheURhdGVzW2krMV0hPT11bmRlZmluZWQgKXtcclxuICAgICAgICB1bmlxdWVEYXRlcy5wdXNoKGFycmF5RGF0ZXNbaSsxXSk7XHJcbiAgICAgICAgfWVsc2V7fVxyXG4gICAgICAgIH0gICBcclxuY29uc29sZS5sb2codW5pcXVlRGF0ZXMpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWFjaERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9ICdUYXNrcyBmb3IgJyt1bmlxdWVEYXRlc1tpXTtcclxuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LXNpemU6MS41cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjogY2VudGVyOycpO1xyXG5cclxuICAgIFxyXG4gICAgYXJnMi5hcHBlbmRDaGlsZChlYWNoRGF0ZSk7XHJcbiAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFza3NTZWFyY2hlZC5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgaWYoIHRhc2tzU2VhcmNoZWRbal1bXCJkdWVEYXRlXCJdID09IHVuaXF1ZURhdGVzW2ldICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OycpO1xyXG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1Rhc2s6ICcrICB0YXNrc1NlYXJjaGVkW2pdW1widGl0bGVcIl0rJyAtICc7XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOycpO1xyXG4gICAgICAgICAgICBwcm9qZWN0T2YuaW5uZXJUZXh0ID0gJ0Zyb20gUFJPSkVDVCAnKyB0YXNrc1NlYXJjaGVkW2pdW1wicHJvamVjdElkXCJdKycgLSAnO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOycpOyBcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJysgdGFza3NTZWFyY2hlZFtqXVtcInByaW9yaXR5XCJdKycgLSAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LmlubmVyVGV4dCA9ICdET05FJztcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLHRhc2tzU2VhcmNoZWRbal1bXCJjaGVja2xpc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrc1NlYXJjaGVkW2pdW1wiY2hlY2tsaXN0XCJdID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZChkaXYyKTtcclxuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKHByb2plY3RPZik7XHJcbiAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChjaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SW5wdXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHNlbmREYXRhVG9Mb2NhbChhcmcxLGFyZzIpIHtcclxuXHJcbi8qIGFyZzEgaXMgdGhlIG5hbWUgb2YgdGhlIGtleSAtIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggdGhlIGRhdGEgKi9cclxuXHJcbmxldCBrZXkgPSBhcmcxO1xyXG5sZXQgZGF0YVRvU2VuZCA9IGFyZzI7XHJcblxyXG5jb25zb2xlLmxvZyhrZXkpO1xyXG5jb25zb2xlLmxvZyhkYXRhVG9TZW5kKTtcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZCkpO1xyXG5cclxuXHJcbiAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZURvbmVVbmRvbmUoYXJnKSB7XHJcblxyXG4gICAgLyogZWwgYXJnIGVzIGVsIGlucHV0IGNoZWNrYm94ICovXHJcbiAgICBsZXQgY2hlY2tsaXN0SW5wdXQgPSBhcmc7XHJcbiAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGNoZWNrbGlzdElucHV0LnZhbHVlOyBcclxuICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpO1xyXG4gICAgbGV0IGNoZWNrbGlzdCA9ICcnO1xyXG4gICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAnZmFsc2UnKSB7ICAgXHJcbiAgICAgICAgY2hlY2tsaXN0ID0gJ3RydWUnO1xyXG4gICAgfWVsc2UgeyBcclxuICAgICAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgIGNoZWNrbGlzdCA9ICdmYWxzZSc7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkVmFsdWUpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3QpOyBcclxuIHJldHVybiBjaGVja2xpc3Q7XHJcblxyXG59IiwiaW1wb3J0IHsgaXNCZWZvcmUsIGlzQWZ0ZXIsIGlzRXF1YWwgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBjbG9zZUFuZFJlZnJlc2ggZnJvbSAnLi9jbG9zZUFuZFJlZnJlc2guanMnO1xyXG5pbXBvcnQgcHJpbnRTZWFyY2ggZnJvbSAnLi9wcmludFNlYXJjaC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHRvZGF5VGFza3MoYXJnMSxhcmcyKSB7XHJcblxyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBuZXcgYXJnMSgwLCcnLFtdLCcnKTtcclxuICAgIGxldCBhcnJheUZvclRvZGF5ID0gW107XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IDA7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiAgIFxyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG5cclxuICAgIGNvbnN0IG1lbnNhamUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBcclxuICAgIC8qIGluaWNpbyBvYnRlbmVyIGRlbCBvYmpldG8ganNvbiBsZWlkbyBsb3MgZGF0b3MgcHJpbmNpcGFsZXMgbmVjZXNhcmlvcyAqL1xyXG4gICAgICAgIGlmIChwcm9qZWN0TGlzdCAhPT0gbnVsbCApIHtcclxuICAgICAgICBhcnJheVByb2plY3RzID0gcHJvamVjdExpc3Q7XHJcbiAgICAgICAgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYXJyYXlQcm9qZWN0c0xlbmd0aD09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFycmF5UHJvamVjdHNMZW5ndGggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBuZWVkIHRvIENSRUFURSB5b3VyIG93biBQUk9KRUNUIGZpcnN0Jyk7XHJcbiAgICAgICAgbWVuc2FqZS5pbm5lclRleHQgPSAnWW91IG5lZWQgdG8gQ1JFQVRFIHlvdXIgb3duIFBST0pFQ1QgZmlyc3QgXFxuICBcXG4gQ0xJQ0sgSU4gTkVXIFBST0pFQ1QnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdHNMZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAvKiBsZWUgZWwgYXJyYXkgZGUgbG9zIHByb3llY3RvcyB5IGxhcyB0YXJlYXMgeSBjcmVhIHVuIGFycmF5IGNvbiBsYXMgdGFyZWFzIHF1ZSBjdW1wbGVuIGxvcyBjcml0ZXJpb3MgZGUgbGEgYnVzcXVlZGEqL1xyXG5cclxuIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhcnJheVByb2plY3RzW2ldO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudGl0bGUpO1xyXG4gICAgY29uc3QgYXJyYXlUYXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyYXlUYXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9YXJyYXlUYXNrc1tqXVtcImR1ZURhdGVcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tUb2RheSA9IGlzRXF1YWwoZHVlRGF0ZSwgdG9kYXkpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja1RvZGF5KTtcclxuXHJcbiAgICAgICAgaWYoY2hlY2tUb2RheT09PXRydWUpe1xyXG4gICAgICAgIGFycmF5Rm9yVG9kYXkucHVzaChhcnJheVByb2plY3RzW2ldW1widGFza3NcIl1bal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIH1cclxuIGNvbnNvbGUubG9nKGFycmF5Rm9yVG9kYXkpO1xyXG4gICAgaWYgKGFycmF5Rm9yVG9kYXkubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5pbm5lclRleHQgPSAndGhlcmUgYXJlIG5vIHRhc2tzIGFzc2lnbmVkIGZvciB0b2RheSc7XHJcbiAgICAgICAgbm9UYXNrTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC1zaXplOjEuNXJlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246IGNlbnRlcjsnKTtcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHMuYXBwZW5kQ2hpbGQobm9UYXNrTWVzc2FnZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwcmludFNlYXJjaChhcnJheUZvclRvZGF5LGRpc3BsYXlQcm9qZWN0cyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFza3MnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUJveCcpO1xyXG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNMT1NFXCI7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbkNsb3NlQnV0dG9uJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjbG9zZUFuZFJlZnJlc2goYXJyYXlQcm9qZWN0cylcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVuc2FqZSk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0cyk7XHJcblxyXG59IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzRXF1YWxcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBlcXVhbFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiBjb25zdCByZXN1bHQgPSBpc0VxdWFsKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwobGVmdERhdGUsIHJpZ2h0RGF0ZSkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUobGVmdERhdGUpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKHJpZ2h0RGF0ZSk7XG4gIHJldHVybiArX2RhdGVMZWZ0ID09PSArX2RhdGVSaWdodDtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0VxdWFsO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==