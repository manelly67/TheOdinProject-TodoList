/* formato de fecha yyyy-MM-dd HH:mm:ss */

export default

function defaultData() {

const projects = {
    "defaultData":[
 
       {
 
          "id":1,
 
          "title":"sales plan presentation",
 
          "tasks":[
 
             {
               "title":"prepare presentation",
               "description":"keep the talk and slides simple",
               "dueDate":"2024-05-03",
               "priority":"media",
               "notes":"n/a",
               "checklist":"false",
               "projectId":1
             },
             {
               "title":"review with manager",
               "description":"meeting",
               "dueDate":"2024-05-05",
               "priority":"media",
               "notes":"n/a",
               "checklist":"false",
               "projectId":1
             },
             {
               "title":"present in the forum",
               "description":"talking via online",
               "dueDate":"2024-05-08",
               "priority":"media",
               "notes":"n/a",
               "checklist":"false",
               "projectId":1
             }
 
          ],
 
          "dueDateProj":" "
 
       },
 
       {
 
          "id":2,
 
          "title":"personal arrangements of the week",
 
          "tasks":[
 
            {
               "title":"buy groceries",
               "description":"food needed for 15 days",
               "dueDate":"2024-05-06",
               "priority":"media",
               "notes":"n/a",
               "checklist":"false",
               "projectId":2
             } 
 
          ],
 
          "dueDateProj":" "
 
       }
 
    ]
 
 };
return projects;

}
defaultData();