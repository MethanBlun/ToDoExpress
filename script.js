



function addTask() {
    var taskValue = document.getElementById('taskInput').value;
    // Vérifiez si l'input n'est pas vide
    if (taskValue.trim() !== '') {
      var newTask = document.createElement('div'); 
      newTask.textContent = taskValue

      newTask.style.border = '1px solid #ccc'
      var tasksList = document.getElementById('tasksList');
    //  var tasksList = document.(".taskSide")
      tasksList.appendChild(newTask); 
      document.getElementById('taskInput').value = '';
    }
  }
  
  