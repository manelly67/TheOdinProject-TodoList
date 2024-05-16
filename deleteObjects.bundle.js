"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["deleteObjects"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/deleteObjects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY2xlYXJDb250YWluZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2VuZERhdGFUb0xvY2FsLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nQ29tcGxldGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250YWluZXJzKGFyZzEpIHtcclxuICAgIC8qYXJnMSBpcyB0aGUgY2xhc3Mgb2YgdGhlIGNvbnRhaW5lciBmb3IgcmVtb3ZlICovXHJcbiAgICBsZXQgY2xhc3NUb1JlbW92ZSA9IGFyZzE7XHJcbiAgICAvKiBsaW1waWEgZWwgY29udGVuaWRvIGFudGVyaW9yICovXHJcbiAgICBsZXQgY29udGVudEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzVG9SZW1vdmUpO1xyXG5cclxuICAgIGlmICggY29udGVudEluZm8gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnRJbmZvLnJlbW92ZSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGlvbiBub3QgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxLGFyZzIpIHtcclxuICAgIC8qIHRoZSBhcmcxIGlzIHRoZSBjbGFzcyBmb3IgdGhlIG5ldyBjb250YWluZXIgLSB0aGUgYXJnMiBpcyB0aGUgaWQgYXR0cmlidXRlIGZvciB0aGUgbmV3IGNvbnRhaW5lciAgICovXHJcbiAgICBsZXQgY2xhc3NUb0FkZCA9IGFyZzEgO1xyXG4gICAgbGV0ICBpZEZvckNvbnRhaW5lciA9IGFyZzI7XHJcbiAgIFxyXG4gICAgLyogY3JlYSB1biBudWV2byBjb250YWluZXIgKi9cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGlkRm9yQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuIiwiaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcbmltcG9ydCBjbGVhckNvbnRhaW5lcnMgZnJvbSAnLi9jbGVhckNvbnRhaW5lcnMuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IHByaW50UHJvTGlzdCBmcm9tICcuL3ByaW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0cyhhcmcxLGFyZzIpIHtcclxuXHJcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiKSA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5UHJvamVjdHNMZW5ndGggPSBhcnJheVByb2plY3RzLmxlbmd0aDtcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5kZXggPSBhcmcxLmdldEF0dHJpYnV0ZSgnZGF0YScpOyBcclxuXHJcbiAgICBsZXQgYSA9IGdldEluZGV4LmluZGV4T2YoJ3gnKTtcclxuICAgIGxldCBiID0gYSArMTtcclxuICAgIGxldCBlbmQgPSBnZXRJbmRleC5sZW5ndGg7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SWQgPSBnZXRJbmRleC5zbGljZSgwLGEpO1xyXG4gICAgcHJvamVjdElkID0gTnVtYmVyKHByb2plY3RJZCk7XHJcbiAgICBcclxuICAgIGxldCBpT2ZBcnJheSA9IGdldEluZGV4LnNsaWNlKGIsZW5kKTtcclxuICAgIGlPZkFycmF5ID0gTnVtYmVyKGlPZkFycmF5KTtcclxuICAgIFxyXG4gICAgbGV0IGl0ZW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVByb2plY3RzTGVuZ3RoOyBpKyspIHtcclxuICAgIFxyXG4gICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgaWYgKGl0ZW0gPT0gcHJvamVjdElkKXtcclxuICAgICAgICBhcnJheVByb2plY3RzW2ldW1widGFza3NcIl0ucG9wKGlPZkFycmF5KTtcdFxyXG5cclxuICAgIH0gXHJcbiAgICBjb25zb2xlLmxvZyAoYXJyYXlQcm9qZWN0cyk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coZ2V0SW5kZXgubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGEpO1xyXG4gICAgY29uc29sZS5sb2coZW5kKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgcHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKGlPZkFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpT2ZBcnJheSk7XHJcblxyXG4gICAgc2VuZERhdGFUb0xvY2FsKCdwcm9qZWN0cycsYXJyYXlQcm9qZWN0cyk7XHJcbiAgICAvKiBmcm9tIGhlcmUgcmVmcmVzaCB0aGUgcHJpbnQgb2YgdGhlIHByb2plY3QgYW5kIHRhc2tzICovXHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy50YXNrcycpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyKCd0YXNrcycsJ3Byb2plY3RUYXNrcycpO1xyXG4gICAgY2xlYXJDb250YWluZXJzKCcuc2lkZWJhclBybycpO1xyXG4gICAgbGV0IHByb2plY3RTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RTaWRlKTtcclxuICAgIGxldCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUYXNrcyk7XHJcbiAgICBwcmludFByb0xpc3QocHJvamVjdFNpZGUsYXJyYXlQcm9qZWN0cyxwcm9qZWN0VGFza3MpO1xyXG4gICAgbGV0IHRhcmdldCA9ICcjcHJvamVjdCcrcHJvamVjdElkO1xyXG4gICAgY29uc3Qgb3BlbkRpdiA9ICh0YXJnZXQpID0+eyBcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCBkaXYgIT09IG51bGwpe1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmVlZCByZWZyZXNoIGZvciB1cGRhdGVzJyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgb3BlbkRpdih0YXJnZXQpO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgdG9nZ2xlRG9uZVVuZG9uZSBmcm9tICcuL3NldHRpbmdDb21wbGV0ZSc7XHJcbmltcG9ydCBkZWxldGVPYmplY3RzIGZyb20gJy4vZGVsZXRlT2JqZWN0cy5qcyc7XHJcbmltcG9ydCBzZW5kRGF0YVRvTG9jYWwgZnJvbSAnLi9zZW5kRGF0YVRvTG9jYWwuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBwcmludFByb0xpc3QoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4vKiBlbCBhcmcxIGVzIGVsIGRpdiBwcm9qZWN0U2lkZSAtIGVsIGFyZzIgZXMgZWwgYXJyYXlQcm9qZWN0cyBvYnRlbmlkbyBkZSBsZWVyIGVsIGxvY2Fsc3RvcmFnZSAtIGVsIGFyZyAzIGVzIGVsIGRpdiBwcm9qZWN0VGFza3MqL1xyXG5cclxuY29uc3QgcHJvamVjdFRhc2tzID0gYXJnMztcclxuXHJcbmNvbnNvbGUubG9nKCdwcnVlYmEgcHJpbnRQcm9MaXN0Jyk7XHJcblxyXG5jb25zdCBwcm9qZWN0U2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0U2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvJyk7XHJcblxyXG5hcmcxLmFwcGVuZENoaWxkKHByb2plY3RTaWRlQmFyKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXJnMi5sZW5ndGgpOyAgXHJcbiAgICBcclxuICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxvcyBwcm95ZWN0b3MgKi9cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmcyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFyZzJbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFYWNoUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm1lZGlhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcclxuICAgICAgICAgICAgc2hvd1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb1RpdGxlJyk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuY2xhc3NMaXN0LmFkZCgnc3ViU2lkZUJhcicpO1xyXG4gICAgICAgICAgICBzaG93SWQuY2xhc3NMaXN0LmFkZCgncHJvSWQnKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnRleHRDb250ZW50ID0gXCJTSE9XIFRBU0tTXCI7XHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnZGF0YScsIGN1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuVGFzaycrY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzdWJ0YXNrJyk7IFxyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuY2xhc3NMaXN0LmFkZCgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFza3NDb250YWluZXInKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJyNwcm9qZWN0JytjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaG93VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb3BlbkRpdih0YXJnZXQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUYXNrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrVGVzdC5pbm5lclRleHQgPSAnUFJPSkVDVCAnK2N1cnJlbnRQcm9qZWN0LmlkKycgICcrY3VycmVudFByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MudGV4dENvbnRlbnQgPSBcIkhJREUgVEFTS1NcIjtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hpZGVCdXR0b24nKTtcclxuICAgICAgICAgICAgaGlkZVRhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cclxuICAgICAgICAgICAgaGlkZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsb3NlRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheVRhc2tzID0gY3VycmVudFByb2plY3QudGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG5cclxuICAgICAgICAgICAgLyogaW1wcmltZSBlbCBhcnJheSBkZSBsYXMgdGFyZWFzICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEZvckNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdkRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID1hcnJheVRhc2tzW2ldW1wiZHVlRGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlY2hhZm9ybWF0ZWFkYSA9IGN1cnJlbnREdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZXMtZWMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZTogJ1VUQycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVjaGFmb3JtYXRlYWRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suY2xhc3NMaXN0LmFkZCgnZWFjaFRhc2snKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1Rhc2s6ICAnK2FycmF5VGFza3NbaV1bXCJ0aXRsZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0RldGFpbHM6ICAnK2FycmF5VGFza3NbaV1bXCJkZXNjcmlwdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICAnK2ZlY2hhZm9ybWF0ZWFkYTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnK2FycmF5VGFza3NbaV1bXCJwcmlvcml0eVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTm90ZXMuaW5uZXJUZXh0ID0gJ0FkZGl0aW9uYWwgbm90ZXM6ICcrYXJyYXlUYXNrc1tpXVtcIm5vdGVzXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGl2RGVsZXRlQnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQrJ3gnK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3QuaW5uZXJUZXh0ID0nRE9ORSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb3JDaGVja2xpc3Quc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qJytjdXJyZW50UHJvamVjdC5pZCsndGFzaycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaWYgKGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPT09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdD0nJztcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0ID0gdG9nZ2xlRG9uZVVuZG9uZShjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZzIgPSB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGN1cnJlbnRQcm9qZWN0LGFycmF5VGFza3MsY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VGFza3NbaV1bXCJjaGVja2xpc3RcIl0gPSBjaGVja2xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVRhc2tzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcyOyBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU9iamVjdHMoZGVsZXRlQnV0dG9uLGFyZzIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5hcHBlbmRDaGlsZChlYWNoVGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoY2hlY2tsaXN0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQoZGl2RGVsZXRlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNob3dUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgc2hvd0lkLmlubmVyVGV4dCA9IFwiUHJvamVjdCBpZDogXCIgK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RTaWRlQmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc3ViU2lkZSk7XHJcbiAgICAgICAgICAgIHN1YlNpZGUuYXBwZW5kQ2hpbGQoc2hvd0lkKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93VGFza3MpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VhY2hQcm9qZWN0KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhlYWRlclRhc2tzKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFza3MuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza1Rlc3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaW50ZXJtZWRpYXRlRGl2KTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmFwcGVuZENoaWxkKGhpZGVUYXNrcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gb3BlbkRpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtb3N0cmFyJyk7IFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VEaXYodGFyZ2V0KSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21vc3RyYXInKTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiBhcmcxOyAgICBcclxuXHJcbiBcclxuICB9O1xyXG4gIFxyXG4iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gc2VuZERhdGFUb0xvY2FsKGFyZzEsYXJnMikge1xyXG5cclxuLyogYXJnMSBpcyB0aGUgbmFtZSBvZiB0aGUga2V5IC0gYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCB0aGUgZGF0YSAqL1xyXG5cclxubGV0IGtleSA9IGFyZzE7XHJcbmxldCBkYXRhVG9TZW5kID0gYXJnMjtcclxuXHJcbmNvbnNvbGUubG9nKGtleSk7XHJcbmNvbnNvbGUubG9nKGRhdGFUb1NlbmQpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSk7XHJcblxyXG5cclxuICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRG9uZVVuZG9uZShhcmcpIHtcclxuXHJcbiAgICAvKiBlbCBhcmcgZXMgZWwgaW5wdXQgY2hlY2tib3ggKi9cclxuICAgIGxldCBjaGVja2xpc3RJbnB1dCA9IGFyZztcclxuICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gY2hlY2tsaXN0SW5wdXQudmFsdWU7IFxyXG4gICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICBsZXQgY2hlY2tsaXN0ID0gJyc7XHJcbiAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICdmYWxzZScpIHsgICBcclxuICAgICAgICBjaGVja2xpc3QgPSAndHJ1ZSc7XHJcbiAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgY2hlY2tsaXN0ID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRWYWx1ZSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdCk7IFxyXG4gcmV0dXJuIGNoZWNrbGlzdDtcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=