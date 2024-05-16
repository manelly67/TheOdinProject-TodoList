import newTask from './newTask.js';
import sendDataToLocal from './sendDataToLocal.js';
import clearContainers from './clearContainers.js';
import createContainer from './createContainer.js';
import printProList from './printProject.js';

export default

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
                sendDataToLocal('projects',arrayProjects);
            /*  funcion que limpie el container de la forma  y regrese al container de impresion  */
                clearContainers('.formBox');
                createContainer('tasks','projectTasks');
                clearContainers('.sidebarPro');
                let projectSide = document.querySelector('.sidebar');
                console.log(projectSide);
                let projectTasks = document.querySelector('.tasks');
                console.log(projectTasks);
                arrayProjects = JSON.parse(localStorage.getItem("projects"));
                console.log(arrayProjects);
                /*  llamar de nuevo a la funcion de printProject  */
                  printProList(projectSide,arrayProjects,projectTasks);

                console.log("asignar funcion para NO");  
            }else{
                /*  llamar a la funcion newTask pasando la clase, el id, el container y el array  */

                  newTask(Task,id,formContainer,arrayProjects);
                 
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