"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["clearContainers"],{

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
    

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/clearContainers.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJDb250YWluZXJzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NsZWFyQ29udGFpbmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyphcmcxIGlzIHRoZSBjbGFzcyBvZiB0aGUgY29udGFpbmVyIGZvciByZW1vdmUgKi9cclxuICAgIGxldCBjbGFzc1RvUmVtb3ZlID0gYXJnMTtcclxuICAgIC8qIGxpbXBpYSBlbCBjb250ZW5pZG8gYW50ZXJpb3IgKi9cclxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgaWYgKCBjb250ZW50SW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudEluZm8ucmVtb3ZlKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uIG5vdCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=