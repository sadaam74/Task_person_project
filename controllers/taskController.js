const{IncomingForm} = require('formidable')
const { readTasksFromile } = require("../utils/fileHandler");
const { error } = require('console');

exports.getTasks = (req, res)=>{
    const tasks = readTasksFromfile();
    res.writeHead(200,{'content-type':'appliction/json'})
        res.end(JSON.stringify(tasks))

}
exports.createTask = (re, res)=>{
    const form = new IncomingForm();
    form.parse(req,(err , field,files)=>{
        if(err){
            res.writeHead(404,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify({
            message: 'Error prsing form'
        }))
        return;
    }
    })
}


