import newTask from './newTask.js';
import closeAndRefresh from './closeAndRefresh.js';

export default

function prepareForTask(arg1,arg2) {

/* arg1 is the Class Project    arg2 is the Class Task   */ 

console.log('prueba de prepare for Task');
    
    let arrayProjects = new arg1(0,'',[],'');
    let arrayProjectsLength = 0;
   
    const Task = arg2;
    console.log(Task);
  
    const projectList = JSON.parse(localStorage.getItem("projects"));

    const mensaje = document.createElement('p');
    
    /* inicio obtener del objeto json leido los datos principales necesarios */
        if (projectList !== null ) {
        arrayProjects = projectList;
        arrayProjectsLength = arrayProjects.length;
        mensaje.innerText = 'Select the project where the tasks will be added';
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
    

            for (let i = 0; i < arrayProjectsLength; i++) {
                const div = document.createElement('div');
                const labelForOpcion = document.createElement('label');
                const opcion = document.createElement('input');


            labelForOpcion.innerText = 'Project Nro '+ arrayProjects[i]['id'] + ' ' + arrayProjects[i]['title'];
            labelForOpcion.setAttribute('style','text-transform:capitalize;');
            labelForOpcion.setAttribute('for',arrayProjects[i]['id']);
            opcion.setAttribute('type','radio');
            opcion.setAttribute('id',arrayProjects[i]['id']);
            opcion.setAttribute('name','id');
            opcion.setAttribute('value',arrayProjects[i]['id']);

            opcion.addEventListener('change', () => {
                displayRadioValue();
              });
            
            displayProjects.appendChild(div);
            div.appendChild(labelForOpcion);
            div.appendChild(opcion);
            }
            
            let idP = 0;
            let title = '';
            function displayRadioValue() {
        
                let getSelectedValue = document.querySelector( 'input[name="id"]:checked');   
                
                if(getSelectedValue != null) {   
                 idP = getSelectedValue.value;
                 console.log(getSelectedValue); 
                 console.log(idP); 
                    for (let i = 0; i < arrayProjectsLength; i++){
                        if (arrayProjects[i]['id'] == idP){
                            title = arrayProjects[i]['title'];
                        }
                    }
                console.log(title); 
                 }else {  
                 console.log("Nothing has been selected");  
                 }
            
                 if (idP !== 0){
                   
                   mensaje.classList.add('ocultar');
                   displayProjects.remove();
                    
                    const projectSelected = document.createElement('p');
                    projectSelected.innerText = 'Project Nro '+ idP + ' ' + title;
                    formContainer.appendChild(projectSelected);

                    newTask(Task,idP,formContainer,arrayProjects);

                }

              };

   

    formContainer.classList.remove('tasks');
    formContainer.classList.add('formBox');
    closeButton.textContent = "CLOSE";
    closeButton.classList.add('btn2');
    closeButton.classList.add('locationCloseButton');
    closeButton.addEventListener("click", () => {
      closeAndRefresh(arrayProjects)
    });
    
    formContainer.appendChild(closeButton);
    formContainer.appendChild(mensaje);
    formContainer.appendChild(displayProjects);



}