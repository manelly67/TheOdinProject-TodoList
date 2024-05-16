export default 
        class Task {
        constructor(title,description,dueDate,priority,notes,checklist,projectId) {
          // invokes the setter
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
            this.projectId = projectId;
        }
    }

