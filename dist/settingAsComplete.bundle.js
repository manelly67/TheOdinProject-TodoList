"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["settingAsComplete"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/settingComplete.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ0FzQ29tcGxldGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ0NvbXBsZXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVEb25lVW5kb25lKGFyZykge1xyXG5cclxuICAgIC8qIGVsIGFyZyBlcyBlbCBpbnB1dCBjaGVja2JveCAqL1xyXG4gICAgbGV0IGNoZWNrbGlzdElucHV0ID0gYXJnO1xyXG4gICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBjaGVja2xpc3RJbnB1dC52YWx1ZTsgXHJcbiAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTtcclxuICAgIGxldCBjaGVja2xpc3QgPSAnJztcclxuICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ2ZhbHNlJykgeyAgIFxyXG4gICAgICAgIGNoZWNrbGlzdCA9ICd0cnVlJztcclxuICAgIH1lbHNlIHsgXHJcbiAgICAgICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICBjaGVja2xpc3QgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RlZFZhbHVlKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0KTsgXHJcbiByZXR1cm4gY2hlY2tsaXN0O1xyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==