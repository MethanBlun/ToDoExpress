

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour ajouter une tâche
    function addTask() {
        // Récupérer la valeur du champ de saisie
        const taskInput = document.getElementById('taskInput');
        const taskValue = taskInput.value;

        // Vérifier si la valeur n'est pas vide
        if (taskValue.trim() !== '') {
            // Créer un nouvel élément li pour la tâche
            const taskItem = document.createElement('li');
            taskItem.textContent = taskValue;

            // Ajouter la tâche à la liste des tâches (à adapter selon votre structure)
            const tasksList = document.querySelector('.tasks-side'); // Sélectionnez votre liste de tâches
            tasksList.appendChild(taskItem);

            // Effacer le champ de saisie
            taskInput.value = '';
        }
    }

    // Associer la fonction addTask au clic sur le bouton
    window.addTask = addTask;
});
