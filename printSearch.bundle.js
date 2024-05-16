"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["printSearch"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/printSearch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRTZWFyY2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBCQUEwQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUJBQXlCLG1CQUFtQjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDRCQUE0QjtBQUNoRjtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLDREQUE0RCwwQkFBMEI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wcmludFNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gcHJpbnRTZWFyY2goYXJnMSxhcmcyKSB7XHJcbiAvKiBhcmcxIGlzIHRoZSBhcnJheSB3aXRoIHRhc2tzIHNlYXJjaGVkIC0gYXJnMiBpcyB0aGUgY29udGFpbmVyICovXHJcblxyXG5sZXQgdGFza3NTZWFyY2hlZCA9IGFyZzE7XHJcbmNvbnNvbGUubG9nKHRhc2tzU2VhcmNoZWQpO1xyXG5cclxubGV0IGFycmF5RGF0ZXMgPSBbXTtcclxubGV0IGl0ZW0gPSAwO1xyXG5sZXQgdW5pcXVlRGF0ZXMgPSBbXTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzU2VhcmNoZWQubGVuZ3RoOyBpKyspICB7XHJcbiAgICBpdGVtID0gdGFza3NTZWFyY2hlZFtpXVtcImR1ZURhdGVcIl07XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGFycmF5RGF0ZXMucHVzaChpdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5RGF0ZXMpO1xyXG4gICAgYXJyYXlEYXRlcy5zb3J0KCk7ICAgXHJcbn1cclxuLyogdGFrZSBmcm9tIHRoZSBhcnJheSB0aGUgdW5pcXVlIHZhbHVlcyAqL1xyXG51bmlxdWVEYXRlcy5wdXNoKGFycmF5RGF0ZXNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKCBhcnJheURhdGVzW2ldIT09YXJyYXlEYXRlc1tpKzFdICYmICBhcnJheURhdGVzW2krMV0hPT11bmRlZmluZWQgKXtcclxuICAgICAgICB1bmlxdWVEYXRlcy5wdXNoKGFycmF5RGF0ZXNbaSsxXSk7XHJcbiAgICAgICAgfWVsc2V7fVxyXG4gICAgICAgIH0gICBcclxuY29uc29sZS5sb2codW5pcXVlRGF0ZXMpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWFjaERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9ICdUYXNrcyBmb3IgJyt1bmlxdWVEYXRlc1tpXTtcclxuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LXNpemU6MS41cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjogY2VudGVyOycpO1xyXG5cclxuICAgIFxyXG4gICAgYXJnMi5hcHBlbmRDaGlsZChlYWNoRGF0ZSk7XHJcbiAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFza3NTZWFyY2hlZC5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgaWYoIHRhc2tzU2VhcmNoZWRbal1bXCJkdWVEYXRlXCJdID09IHVuaXF1ZURhdGVzW2ldICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OycpO1xyXG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1Rhc2s6ICcrICB0YXNrc1NlYXJjaGVkW2pdW1widGl0bGVcIl0rJyAtICc7XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOycpO1xyXG4gICAgICAgICAgICBwcm9qZWN0T2YuaW5uZXJUZXh0ID0gJ0Zyb20gUFJPSkVDVCAnKyB0YXNrc1NlYXJjaGVkW2pdW1wicHJvamVjdElkXCJdKycgLSAnO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOycpOyBcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJysgdGFza3NTZWFyY2hlZFtqXVtcInByaW9yaXR5XCJdKycgLSAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9yQ2hlY2tsaXN0LmlubmVyVGV4dCA9ICdET05FJztcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLHRhc2tzU2VhcmNoZWRbal1bXCJjaGVja2xpc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrc1NlYXJjaGVkW2pdW1wiY2hlY2tsaXN0XCJdID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoRGF0ZS5hcHBlbmRDaGlsZChkaXYyKTtcclxuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKHByb2plY3RPZik7XHJcbiAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChjaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQobGFiZWxGb3JDaGVja2xpc3QpO1xyXG4gICAgICAgICAgICBjaGVja2xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SW5wdXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9