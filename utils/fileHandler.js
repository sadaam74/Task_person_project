const fs = require('fs');
const path = require('path');
const filepat = './dta/tasks.json';
const writeTasksTofie = (tasks)=>{
    fs.writeFileSync(filepat,JSON.stringify(tasks))
}
const readTasksFromile = ()=>{
    i (!fs.existsSync(filepath)){
        writeTasksTofie([])
    }

const data = fs.readFileSync(filepat);
return JSON.parse(data)
}