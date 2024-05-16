"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["sortObjects"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/sortObjects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydE9iamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NvcnRPYmplY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdFxyXG5cclxuZnVuY3Rpb24gc29ydE9iamVjdHMoYXJnKSB7XHJcbiAgIFxyXG4gICAgbGV0IGFycmF5UHJvamVjdHMgPSBhcmc7IFxyXG5cclxuICAgIGxldCBhcnJheVByb2plY3RzTGVuZ3RoID0gYXJyYXlQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBsZXQgYXJyYXlJZCA9IFtdO1xyXG4gICAgbGV0IGl0ZW0gPSAwO1xyXG4gXHJcbiBcclxuICAgIGZ1bmN0aW9uIHNvcnRJZCgpe1xyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0c0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgaXRlbSA9IGFycmF5UHJvamVjdHNbaV1bXCJpZFwiXTtcclxuICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICBhcnJheUlkLnB1c2goaXRlbSk7XHJcbiAgICAgY29uc29sZS5sb2coYXJyYXlJZCk7XHJcbiAgICAgYXJyYXlJZC5zb3J0KCk7XHJcbiAgICAgfTsgXHJcbiAgICAgcmV0dXJuIGFycmF5SWQ7XHJcbiAgICAgfTtcclxuICAgICBcclxuICAgICBsZXQgaWRTb3J0ZWQgPSBzb3J0SWQoKTtcclxuICAgICBjb25zb2xlLmxvZyhpZFNvcnRlZCk7XHJcbiAgICAgXHJcbiAgICAgbGV0IGN1cnJlbnRJZCA9IDA7XHJcbiAgICAgbGV0IGFycmF5U29ydGVkID0gW107XHJcbiAgICAgXHJcbiAgICAgZnVuY3Rpb24gc29ydEFycmF5T2JqZWN0KGlkU29ydGVkLGFycmF5UHJvamVjdHMpe1xyXG4gICAgIFxyXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRTb3J0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgY3VycmVudElkID0gaWRTb3J0ZWRbaV07XHJcbiAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVByb2plY3RzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgaWYoIGN1cnJlbnRJZCA9PSBhcnJheVByb2plY3RzW2pdW1wiaWRcIl0gKXtcclxuICAgICAgICAgICAgICAgICAgIGFycmF5U29ydGVkLnB1c2goYXJyYXlQcm9qZWN0c1tqXSk7XHJcbiAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgIH07XHRcclxuICAgICB9O1xyXG4gICAgIGNvbnNvbGUubG9nKGFycmF5U29ydGVkKTtcclxuICAgICByZXR1cm4gYXJyYXlTb3J0ZWQ7IFxyXG4gICAgIH07XHJcbiAgICAgXHJcbiAgICAgYXJyYXlQcm9qZWN0cyA9IHNvcnRBcnJheU9iamVjdChpZFNvcnRlZCxhcnJheVByb2plY3RzKTtcclxuICAgICBjb25zb2xlLmxvZyhhcnJheVByb2plY3RzKTtcclxucmV0dXJuIGFycmF5UHJvamVjdHM7XHJcblxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==