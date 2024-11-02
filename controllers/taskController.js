const { readTasksFromile } = require("../utils/fileHandler")

exports.getTasks = (req, res)=>{
    const tasks = readTasksFromfile();
    res.writeHead(200,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify(tasks))

}
