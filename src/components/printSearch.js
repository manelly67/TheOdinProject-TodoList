export default

function printSearch(arg1,arg2) {
 /* arg1 is the array with tasks searched - arg2 is the container */

let tasksSearched = arg1;
console.log(tasksSearched);

let arrayDates = [];
let item = 0;
let uniqueDates = [];


for (let i = 0; i < tasksSearched.length; i++)  {
    item = tasksSearched[i]["dueDate"];
    console.log(item);
    arrayDates.push(item);
    console.log(arrayDates);
    arrayDates.sort();   
}
/* take from the array the unique values */
uniqueDates.push(arrayDates[0]);
        for (let i = 0; i < arrayDates.length; i++) {
        if( arrayDates[i]!==arrayDates[i+1] &&  arrayDates[i+1]!==undefined ){
        uniqueDates.push(arrayDates[i+1]);
        }else{}
        }   
console.log(uniqueDates);

for (let i = 0; i < uniqueDates.length; i++) {
    const eachDate = document.createElement('div');
    const taskDueDate = document.createElement('p');

    taskDueDate.innerText = 'Tasks for '+uniqueDates[i];
    taskDueDate.setAttribute('style','font-size:1.5rem; text-transform:uppercase;text-align: center;');

    
    arg2.appendChild(eachDate);
    eachDate.appendChild(taskDueDate);
    
    for (let j = 0; j < tasksSearched.length; j++){
        if( tasksSearched[j]["dueDate"] == uniqueDates[i] ){
            
            const div1 = document.createElement('div');
            const taskTitle = document.createElement('p');
            const projectOf = document.createElement('p');
            const div2 = document.createElement('div');
            const taskPriority = document.createElement('p');
            const checklistDiv = document.createElement('div');
            const labelForChecklist = document.createElement('p');
            const checklistInput = document.createElement('input');

            div1.setAttribute('style','display:flex;justify-content: flex-start;');
            taskTitle.innerText = 'Task: '+  tasksSearched[j]["title"]+' - ';
            taskTitle.setAttribute('style','text-transform:uppercase;');
            projectOf.innerText = 'From PROJECT '+ tasksSearched[j]["projectId"]+' - ';
            checklistDiv.setAttribute('style','display:flex;justify-content: flex-end;'); 
            taskPriority.innerText = 'Priority: '+ tasksSearched[j]["priority"]+' - ';
                    labelForChecklist.innerText = 'DONE';
                    checklistInput.setAttribute('name','checklist');
                    checklistInput.setAttribute('type','checkbox');
                    checklistInput.setAttribute('value',tasksSearched[j]["checklist"]);
                    if (tasksSearched[j]["checklist"] === 'true'){
                      checklistInput.setAttribute('checked',true);
                    }


                    eachDate.appendChild(div1);
                    eachDate.appendChild(div2);
            div1.appendChild(taskTitle);
            div1.appendChild(projectOf);
            div1.appendChild(taskPriority);
            div1.appendChild(checklistDiv);
            checklistDiv.appendChild(labelForChecklist);
            checklistDiv.appendChild(checklistInput);

        }
    }
    

}


}


