const fs = require('fs');
const path = require('path');
const filepat = './dta/tasks.json';
exports. writeTasksTofie = (tasks)=>{
    fs.writeFileSync(filepat,JSON.stringify(tasks))
}
exports. readTasksFromile = ()=>{
   if(!fs.existsSync(filepath)){
        writeTasksTofie([])
    }

const data = fs.readFileSync(filepat);
return JSON.parse(data)
}