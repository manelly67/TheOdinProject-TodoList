"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["printUser"],{

/***/ "./src/components/printing.js":
/*!************************************!*\
  !*** ./src/components/printing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printUser)
/* harmony export */ });

function printUser(arg1, arg2) {

    const createUser = document.createElement('div');
    const userName = document.createElement('p');
    
    createUser.classList.add('user');
    userName.innerText = "Hello " + arg2.userName;
  
    arg1.appendChild(createUser);
    createUser.appendChild(arg2.userIcon);
    createUser.appendChild(userName);   

    return arg1;
 
  };





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/printing.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRVc2VyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJpbnRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0XHJcblxyXG4gICAgZnVuY3Rpb24gcHJpbnRVc2VyKGFyZzEsIGFyZzIpIHtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIFxyXG4gICAgY3JlYXRlVXNlci5jbGFzc0xpc3QuYWRkKCd1c2VyJyk7XHJcbiAgICB1c2VyTmFtZS5pbm5lclRleHQgPSBcIkhlbGxvIFwiICsgYXJnMi51c2VyTmFtZTtcclxuICBcclxuICAgIGFyZzEuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlcik7XHJcbiAgICBjcmVhdGVVc2VyLmFwcGVuZENoaWxkKGFyZzIudXNlckljb24pO1xyXG4gICAgY3JlYXRlVXNlci5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7ICAgXHJcblxyXG4gICAgcmV0dXJuIGFyZzE7XHJcbiBcclxuICB9O1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=