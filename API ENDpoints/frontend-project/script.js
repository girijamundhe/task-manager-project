async function getTasks() {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

    let data = await response.json();

    let tasksDiv = document.getElementById("tasks");

    data.forEach(task => {

        let p = document.createElement("p");

        p.innerText = task.title;

        tasksDiv.appendChild(p);

    });

}

getTasks();

function addTask(){

    let input = document.getElementById("taskInput");

    let p = document.createElement("p");

    p.innerText = input.value;

    document.getElementById("tasks").appendChild(p);

    input.value = "";

}