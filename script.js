



function addTask() {
    // Récupérez la valeur de l'input
    var taskValue = document.getElementById('taskInput').value;
    // Vérifiez si l'input n'est pas vide
    if (taskValue.trim() !== '') {
      // Créez un nouvel élément li
      var newTask = document.createElement('div');
      // Ajoutez la valeur de la tâche à l'élément li
      newTask.textContent = taskValue
      var tasksList = document.getElementById('tasksList');
    //  var tasksList = document.(".taskSide")
      // Ajoutez l'élément li à la liste
      tasksList.appendChild(newTask);
      
      document.getElementById('taskInput').value = '';
    }
  }
  
  