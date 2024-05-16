export default

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