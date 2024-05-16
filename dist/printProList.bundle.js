"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["printProList"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/printProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jbGVhckNvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJpbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zZW5kRGF0YVRvTG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdDb21wbGV0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyphcmcxIGlzIHRoZSBjbGFzcyBvZiB0aGUgY29udGFpbmVyIGZvciByZW1vdmUgKi9cclxuICAgIGxldCBjbGFzc1RvUmVtb3ZlID0gYXJnMTtcclxuICAgIC8qIGxpbXBpYSBlbCBjb250ZW5pZG8gYW50ZXJpb3IgKi9cclxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgaWYgKCBjb250ZW50SW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudEluZm8ucmVtb3ZlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uIG5vdCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKGFyZzEsYXJnMikge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIGNsYXNzIGZvciB0aGUgbmV3IGNvbnRhaW5lciAtIHRoZSBhcmcyIGlzIHRoZSBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBuZXcgY29udGFpbmVyICAgKi9cclxuICAgIGxldCBjbGFzc1RvQWRkID0gYXJnMSA7XHJcbiAgICBsZXQgIGlkRm9yQ29udGFpbmVyID0gYXJnMjtcclxuICAgXHJcbiAgICAvKiBjcmVhIHVuIG51ZXZvIGNvbnRhaW5lciAqL1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsaWRGb3JDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4iLCJpbXBvcnQgc2VuZERhdGFUb0xvY2FsIGZyb20gJy4vc2VuZERhdGFUb0xvY2FsLmpzJztcclxuaW1wb3J0IGNsZWFyQ29udGFpbmVycyBmcm9tICcuL2NsZWFyQ29udGFpbmVycy5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9jcmVhdGVDb250YWluZXIuanMnO1xyXG5pbXBvcnQgcHJpbnRQcm9MaXN0IGZyb20gJy4vcHJpbnRQcm9qZWN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBkZWxldGVPYmplY3RzKGFyZzEsYXJnMikge1xyXG5cclxuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpID09PSB0cnVlKSB7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0cyA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlQcm9qZWN0c0xlbmd0aCA9IGFycmF5UHJvamVjdHMubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2cgKGFycmF5UHJvamVjdHMpO1xyXG5cclxuICAgIGxldCBnZXRJbmRleCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdkYXRhJyk7IFxyXG5cclxuICAgIGxldCBhID0gZ2V0SW5kZXguaW5kZXhPZigneCcpO1xyXG4gICAgbGV0IGIgPSBhICsxO1xyXG4gICAgbGV0IGVuZCA9IGdldEluZGV4Lmxlbmd0aDtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3RJZCA9IGdldEluZGV4LnNsaWNlKDAsYSk7XHJcbiAgICBwcm9qZWN0SWQgPSBOdW1iZXIocHJvamVjdElkKTtcclxuICAgIFxyXG4gICAgbGV0IGlPZkFycmF5ID0gZ2V0SW5kZXguc2xpY2UoYixlbmQpO1xyXG4gICAgaU9mQXJyYXkgPSBOdW1iZXIoaU9mQXJyYXkpO1xyXG4gICAgXHJcbiAgICBsZXQgaXRlbSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHNMZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICBpdGVtID0gYXJyYXlQcm9qZWN0c1tpXVtcImlkXCJdO1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBpZiAoaXRlbSA9PSBwcm9qZWN0SWQpe1xyXG4gICAgICAgIGFycmF5UHJvamVjdHNbaV1bXCJ0YXNrc1wiXS5wb3AoaU9mQXJyYXkpO1x0XHJcblxyXG4gICAgfSBcclxuICAgIGNvbnNvbGUubG9nIChhcnJheVByb2plY3RzKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRJbmRleC5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coYSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9qZWN0SWQpO1xyXG4gICAgY29uc29sZS5sb2coaU9mQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGlPZkFycmF5KTtcclxuXHJcbiAgICBzZW5kRGF0YVRvTG9jYWwoJ3Byb2plY3RzJyxhcnJheVByb2plY3RzKTtcclxuICAgIC8qIGZyb20gaGVyZSByZWZyZXNoIHRoZSBwcmludCBvZiB0aGUgcHJvamVjdCBhbmQgdGFza3MgKi9cclxuICAgIGNsZWFyQ29udGFpbmVycygnLnRhc2tzJyk7XHJcbiAgICBjcmVhdGVDb250YWluZXIoJ3Rhc2tzJywncHJvamVjdFRhc2tzJyk7XHJcbiAgICBjbGVhckNvbnRhaW5lcnMoJy5zaWRlYmFyUHJvJyk7XHJcbiAgICBsZXQgcHJvamVjdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFNpZGUpO1xyXG4gICAgbGV0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRhc2tzKTtcclxuICAgIHByaW50UHJvTGlzdChwcm9qZWN0U2lkZSxhcnJheVByb2plY3RzLHByb2plY3RUYXNrcyk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJyNwcm9qZWN0Jytwcm9qZWN0SWQ7XHJcbiAgICBjb25zdCBvcGVuRGl2ID0gKHRhcmdldCkgPT57IFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIGRpdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnb2N1bHRhcicpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCduZWVkIHJlZnJlc2ggZm9yIHVwZGF0ZXMnKTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBvcGVuRGl2KHRhcmdldCk7XHJcbiAgICBcclxufVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxufSIsImltcG9ydCB0b2dnbGVEb25lVW5kb25lIGZyb20gJy4vc2V0dGluZ0NvbXBsZXRlJztcclxuaW1wb3J0IGRlbGV0ZU9iamVjdHMgZnJvbSAnLi9kZWxldGVPYmplY3RzLmpzJztcclxuaW1wb3J0IHNlbmREYXRhVG9Mb2NhbCBmcm9tICcuL3NlbmREYXRhVG9Mb2NhbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuXHJcbmZ1bmN0aW9uIHByaW50UHJvTGlzdChhcmcxLCBhcmcyLCBhcmczKSB7XHJcbi8qIGVsIGFyZzEgZXMgZWwgZGl2IHByb2plY3RTaWRlIC0gZWwgYXJnMiBlcyBlbCBhcnJheVByb2plY3RzIG9idGVuaWRvIGRlIGxlZXIgZWwgbG9jYWxzdG9yYWdlIC0gZWwgYXJnIDMgZXMgZWwgZGl2IHByb2plY3RUYXNrcyovXHJcblxyXG5jb25zdCBwcm9qZWN0VGFza3MgPSBhcmczO1xyXG5cclxuY29uc29sZS5sb2coJ3BydWViYSBwcmludFByb0xpc3QnKTtcclxuXHJcbmNvbnN0IHByb2plY3RTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm8nKTtcclxuXHJcbmFyZzEuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVCYXIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcmcyLmxlbmd0aCk7ICBcclxuICAgIFxyXG4gICAgICAgIC8qIGltcHJpbWUgZWwgYXJyYXkgZGUgbG9zIHByb3llY3RvcyAqL1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXJnMltpXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG93VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0VhY2hQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybWVkaWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xyXG4gICAgICAgICAgICBzaG93VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvVGl0bGUnKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5jbGFzc0xpc3QuYWRkKCdzdWJTaWRlQmFyJyk7XHJcbiAgICAgICAgICAgIHNob3dJZC5jbGFzc0xpc3QuYWRkKCdwcm9JZCcpO1xyXG4gICAgICAgICAgICBzaG93VGFza3MudGV4dENvbnRlbnQgPSBcIlNIT1cgVEFTS1NcIjtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdkYXRhJywgY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICBzaG93VGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICdidG5UYXNrJytjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgdGFza0VhY2hQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3N1YnRhc2snKTsgXHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdvY3VsdGFyJyk7XHJcbiAgICAgICAgICAgIGludGVybWVkaWF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAnI3Byb2plY3QnK2N1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNob3dUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBvcGVuRGl2KHRhcmdldClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRhc2snKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGFza1Rlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhc2tUZXN0LmlubmVyVGV4dCA9ICdQUk9KRUNUICcrY3VycmVudFByb2plY3QuaWQrJyAgJytjdXJyZW50UHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgaGlkZVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhpZGVUYXNrcy50ZXh0Q29udGVudCA9IFwiSElERSBUQVNLU1wiO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnaGlkZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICBoaWRlVGFza3MuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcblxyXG4gICAgICAgICAgICBoaWRlVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xvc2VEaXYodGFyZ2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5VGFza3MgPSBjdXJyZW50UHJvamVjdC50YXNrcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlUYXNrcyk7XHJcblxyXG4gICAgICAgICAgICAvKiBpbXByaW1lIGVsIGFycmF5IGRlIGxhcyB0YXJlYXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5VGFza3MubGVuZ3RoOyBpKyspIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVhY2hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPWFycmF5VGFza3NbaV1bXCJkdWVEYXRlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVjaGFmb3JtYXRlYWRhID0gY3VycmVudER1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlcy1lYycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lOiAnVVRDJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWNoYWZvcm1hdGVhZGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5jbGFzc0xpc3QuYWRkKCdlYWNoVGFzaycpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSAnVGFzazogICcrYXJyYXlUYXNrc1tpXVtcInRpdGxlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGV0YWlsczogICcrYXJyYXlUYXNrc1tpXVtcImRlc2NyaXB0aW9uXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogICcrZmVjaGFmb3JtYXRlYWRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICcrYXJyYXlUYXNrc1tpXVtcInByaW9yaXR5XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tOb3Rlcy5pbm5lclRleHQgPSAnQWRkaXRpb25hbCBub3RlczogJythcnJheVRhc2tzW2ldW1wibm90ZXNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXZEZWxldGVCdXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBjdXJyZW50UHJvamVjdC5pZCsneCcraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bjMnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5pbm5lclRleHQgPSdET05FJztcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvckNoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2onK2N1cnJlbnRQcm9qZWN0LmlkKyd0YXNrJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvaicrY3VycmVudFByb2plY3QuaWQrJ3Rhc2snK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9PT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0PScnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QgPSB0b2dnbGVEb25lVW5kb25lKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnMiA9IHVwZGF0ZShjdXJyZW50UHJvamVjdCxhcnJheVRhc2tzLGNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmREYXRhVG9Mb2NhbCgncHJvamVjdHMnLGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGUoY3VycmVudFByb2plY3QsYXJyYXlUYXNrcyxjaGVja2xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUYXNrc1tpXVtcImNoZWNrbGlzdFwiXSA9IGNoZWNrbGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZzI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlT2JqZWN0cyhkZWxldGVCdXR0b24sYXJnMik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlRGl2LmFwcGVuZENoaWxkKGVhY2hUYXNrKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVhY2hUYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaFRhc2suYXBwZW5kQ2hpbGQodGFza05vdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChjaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0RGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoVGFzay5hcHBlbmRDaGlsZChkaXZEZWxldGVCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgc2hvd1RpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBzaG93SWQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0IGlkOiBcIiArY3VycmVudFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdFNpZGVCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuYXBwZW5kQ2hpbGQoc2hvd1RpdGxlKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC5hcHBlbmRDaGlsZChzdWJTaWRlKTtcclxuICAgICAgICAgICAgc3ViU2lkZS5hcHBlbmRDaGlsZChzaG93SWQpO1xyXG4gICAgICAgICAgICBzdWJTaWRlLmFwcGVuZENoaWxkKHNob3dUYXNrcyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrRWFjaFByb2plY3QpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGVhZGVyVGFza3MpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYXNrcy5hcHBlbmRDaGlsZChoZWFkZXJUYXNrVGVzdCk7XHJcbiAgICAgICAgICAgIHRhc2tFYWNoUHJvamVjdC5hcHBlbmRDaGlsZChpbnRlcm1lZGlhdGVEaXYpO1xyXG4gICAgICAgICAgICB0YXNrRWFjaFByb2plY3QuYXBwZW5kQ2hpbGQoaGlkZVRhc2tzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBvcGVuRGl2KHRhcmdldCkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICggZGl2ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29jdWx0YXInKTtcclxuICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vc3RyYXInKTsgXHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25lZWQgcmVmcmVzaCBmb3IgdXBkYXRlcycpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZURpdih0YXJnZXQpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnbW9zdHJhcicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ29jdWx0YXInKTsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyZzE7ICAgIFxyXG5cclxuIFxyXG4gIH07XHJcbiAgXHJcbiIsImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiBzZW5kRGF0YVRvTG9jYWwoYXJnMSxhcmcyKSB7XHJcblxyXG4vKiBhcmcxIGlzIHRoZSBuYW1lIG9mIHRoZSBrZXkgLSBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIHRoZSBkYXRhICovXHJcblxyXG5sZXQga2V5ID0gYXJnMTtcclxubGV0IGRhdGFUb1NlbmQgPSBhcmcyO1xyXG5cclxuY29uc29sZS5sb2coa2V5KTtcclxuY29uc29sZS5sb2coZGF0YVRvU2VuZCk7XHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGFUb1NlbmQpKTtcclxuXHJcblxyXG4gICBcclxufSIsImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVEb25lVW5kb25lKGFyZykge1xyXG5cclxuICAgIC8qIGVsIGFyZyBlcyBlbCBpbnB1dCBjaGVja2JveCAqL1xyXG4gICAgbGV0IGNoZWNrbGlzdElucHV0ID0gYXJnO1xyXG4gICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBjaGVja2xpc3RJbnB1dC52YWx1ZTsgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTtcclxuICAgIGxldCBjaGVja2xpc3QgPSAnJztcclxuICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ2ZhbHNlJykgeyAgIFxyXG4gICAgICAgIGNoZWNrbGlzdCA9ICd0cnVlJztcclxuICAgIH1lbHNlIHsgXHJcbiAgICAgICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICBjaGVja2xpc3QgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTsgXHJcbiByZXR1cm4gY2hlY2tsaXN0O1xyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==