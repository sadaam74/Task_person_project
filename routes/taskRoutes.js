const taskRoutes = (req,res)=>{
    if(req.method == 'get'){
        getTask(req ,res);
    }else if(req.method == 'post'){
        createTask(req , res)
        
    }else if  (req.method == 'PATCH'){
        updateTask(req , res)
    }else if (req.method == 'DELETE'){
        deleteTask(req,res)
    }else {
        res.writeHead(404,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify({
            message: 'unknown method required.'

        }))
    }
}
module.exports = taskRoutes;