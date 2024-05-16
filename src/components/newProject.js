import sendDataToLocal from './sendDataToLocal.js';
import clearContainers from './clearContainers.js';
import createContainer from './createContainer.js';
import printProList from './printProject.js';
import newTask from './newTask.js';
import closeAndRefresh from './closeAndRefresh.js';


export default

function newProject(arg1,arg2) {

  /* arg1 is the Class Project    arg2 is the Class Task   */ 
   
    console.log('prueba de newProject');
    
    let arrayProjects = new arg1(0,'',[],'');
    let arrayProjectsLength = 0;
    let arrayId = [];
    let item = 0;
    let idMayor = 0;
    const Task = arg2;
    console.log(Task);
  
    const projectList = JSON.parse(localStorage.getItem("projects"));
    
    /* inicio obtener del objeto json leido los datos principales necesarios */
        if (projectList !== null ) {
        arrayProjects = projectList;
        arrayProjectsLength = arrayProjects.length;
            if (arrayProjectsLength===undefined){
            arrayProjectsLength = 0;
            }
        arrayId = addId();
        idMayor = arrayId.reduce((previous, current) => {
            return current > previous ? current : previous;
          })
              
        }else{
        arrayProjects = new arg1(0,'',[],'');
        arrayProjectsLength = 0;
        arrayId = [];
        idMayor = 0;
        }

        function addId(){
            for (let i = 0; i < arrayProjectsLength; i++) {
            item = arrayProjects[i]["id"];
            arrayId.push(item);
            };
            return arrayId;
        };
    

    console.log(projectList);
    console.log(arrayProjects);
    console.log(arrayProjectsLength);
    console.log(arrayId);
    console.log(idMayor);
   

    
    /* crear forma para captar el nuevo proyecto */

    
    const formContainer = document.querySelector('.tasks');
    const closeButton = document.createElement('button');
    const form = document.createElement('form');
    const labelForTitle = document.createElement('label');
    const titleInput = document.createElement('input');
    const labelForDueDate = document.createElement('label');
    const dueDateProjInput = document.createElement('input');
    
    const submitButton = document.createElement('button');

    const field1 = document.createElement('div');
    const field2 = document.createElement('div');
    const field3 = document.createElement('div');
    const field4 = document.createElement('div');

   
    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      closeAndRefresh(arrayProjects)
    });

    form.setAttribute('id','form');
    form.setAttribute('action','');
    form.setAttribute('method','get');

    labelForTitle.innerText = "Add the name of the new project: ";
    labelForTitle.setAttribute('for','title');
    titleInput.setAttribute('id','title');
    titleInput.setAttribute('name','title');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('required',true);
    labelForDueDate.innerText = "Due Date of the new project: ";
    labelForDueDate.setAttribute('for','dueDateProj');
    dueDateProjInput.setAttribute('id','dueDateProj');
    dueDateProjInput.setAttribute('name','dueDateProj');
    dueDateProjInput.setAttribute('type','date');
    dueDateProjInput.setAttribute('required',true);
    
    
    
    submitButton.textContent = "CREATE Project";
    submitButton.setAttribute('type','submit');
    submitButton.classList.add('btn2');

    formContainer.appendChild(closeButton);
    formContainer.appendChild(form);
    form.appendChild(field1);
    field1.appendChild(labelForTitle);
    field1.appendChild(titleInput);
    form.appendChild(field2);
    field2.appendChild(labelForDueDate);
    field2.appendChild(dueDateProjInput);
    form.appendChild(field3);
    field3.appendChild(submitButton);
    

    const readAddedProject = () => {
    
        let project = JSON.parse(localStorage.getItem("newproject"));
        let id = project.id;
        let title = project.title;

        form.remove();
        
        const message = document.createElement('p');
        formContainer.appendChild(message);
        message.innerText = 'The Project #'+id+' '+title+' was created';

          if (idMayor==0){
            arrayProjects=[project];
            console.log(arrayProjects);
            console.log(arrayProjects.length);
          }else{
            arrayProjects.push(project);
          }

        console.log(arrayProjects);
        localStorage.removeItem("newproject");
        
        addTaskYesorNot(id);
   
    };

    const addTaskYesorNot = (arg1) => {
        
        let id = arg1;
        console.log('prueba de lectura'+id);

        const askingMessage = document.createElement('p');
        const answerOptions = document.createElement('div');
        const labelForYes = document.createElement('label');
        const answerYes = document.createElement('input');
        const labelForNo = document.createElement('label');
        const answerNo = document.createElement('input');
        

        askingMessage.innerText ='Do you want add a TASK for this project?';
        
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
            displayRadioValue();
            displayFormTask(answer);
          });
        
        answerNo.addEventListener('change', () => {
            displayRadioValue();
            displayFormTask(answer)
          });

          function displayRadioValue() {
            
            let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');   
            
            if(getSelectedValue != null) {   
             answer = getSelectedValue.value;
             console.log(getSelectedValue); 
             console.log(answer); 
             }else {  
             console.log("Nothing has been selected");  
             }
          
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
       
        
        formContainer.appendChild(field4);
        field4.appendChild(askingMessage);
        field4.appendChild(answerOptions);
        answerOptions.appendChild(labelForYes);
        answerOptions.appendChild(answerYes);
        answerOptions.appendChild(labelForNo);
        answerOptions.appendChild(answerNo);
        
    };


  form.addEventListener('submit', function(event){
  event.preventDefault()

  let title = document.getElementById('title').value;
  console.log(title);

  let dueDateProj = document.getElementById('dueDateProj').value;
  console.log(dueDateProj);

  let id =  asignId(idMayor); 
  console.log(id);

  let tasks = [];
  
  let project = new arg1(id,title,tasks,dueDateProj);
  console.log(project);
  localStorage.setItem("newproject", JSON.stringify(project));

 function  asignId(arg) {
    let id = arg + 1;
    return id;
  };
  
  document.getElementById('form').reset(); 
  
  return project;

});

form.addEventListener("submit", readAddedProject);




}