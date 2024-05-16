export default function clearContainers(arg1) {
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
    