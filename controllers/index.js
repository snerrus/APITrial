function test(req,res){
    res.send("Coming from Controller");
}

function adminTest(req,res){
    res.send("Coming from Admin Controller");
}

function superAdminTest(req,res){
    res.send("Coming from Superadmin Controller");
}

module.exports = {test,adminTest,superAdminTest};