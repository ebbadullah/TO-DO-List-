



// let form = document.getElementById("form")
// let TaskStore = document.getElementById("TaskStore")
// let AllTaskStore = [];
// form.addEventListener (  (e)=>{


// })


// let form = document.getElementById("form");
//     let taskList = document.getElementById("taskList");
//     let AllTaskStore = [];
    
//     form.addEventListener("submit", (e) => {
//         e.preventDefault(); 
        
//         let taskInput = e.target.inp.value; 

//         if (taskInput === "") { 
//             alert("Please enter a task!");
//         } else {
//             AllTaskStore.push(taskInput); 
//             form.reset();

            
//             allTaskReceived(AllTaskStore);
//         }
//     });


//     function allTaskReceived(allTasks) {
//         taskList.innerHTML = allTasks.map((task, index) => {
//             return `<p>${index + 1}. <i>${task}</i></p>`;
//         }).join(""); 
//     }