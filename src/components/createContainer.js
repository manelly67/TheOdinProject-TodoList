export default function createContainers(arg1,arg2) {
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

