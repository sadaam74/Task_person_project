const fs = require('fs');
const path = require('path');
const filepat = './dta/tasks.json';
exports. writeTasksTofie = (tasks)=>{
    fs.writeFileSync(filepat,JSON.stringify(tasks))
}
exports. readTasksFromfile = ()=>{
   if(!fs.existsSync(filepath)){
        writeTasksTofie([])
    }

const data = fs.readFileSync(filepat);
return JSON.parse(data)
}