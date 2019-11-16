exports.list_all_tasks = function(req, res){
    res.send({ content: 'get all task'})
};

exports.create_task = function(req, res){
    res.send({ content: 'create a new task'})
};

exports.read_task = function(req, res){
    res.send({ content: 'read task'})
};

exports.update_task = function(req, res){
    res.send({ content: 'update task '})
};

exports.delete_task = function(req, res){
    res.send({ content: ' delete task'})
}