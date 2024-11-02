const fs = require('fs');
const path = require('path');
const filepat = './dta/tasks.json';
const writeTasksTofie = (tasks)=>{
    fs.writeFileSync(filepat,JSON.stringify(tasks))
}