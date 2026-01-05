// To do App

//enter "list" to show all tasks
//enter "add" to add a task
//enter "delete" to remove a task
//enter "quit" to quit todo


let todo = [];

let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }

    if(req == "list") {
        console.log("------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if(req  == "add") {
        let task = prompt("enter task to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete") {
        let idx = prompt("please enter task index do  delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}