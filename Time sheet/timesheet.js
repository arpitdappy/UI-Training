document.addEventListener("DOMContentLoaded", function(event) {
    hideAddTaskSidebar();
  });
  
function showAddTaskSidebar(){
    var addTaskSidebar=document.getElementsByClassName('add-task-section')[0];
    addTaskSidebar.style.display = "block";
}

function hideAddTaskSidebar(){
    var addTaskSidebar=document.getElementsByClassName('add-task-section')[0];
    addTaskSidebar.style.display = "none";
}

