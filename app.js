const express = require('express');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const superAdminRouter = require('./routes/superadmin');
const app = express();

app.use('/',indexRouter);
app.use('/admin',adminRouter);
app.use('/superadmin',superAdminRouter);

app.listen(3000,()=>{
    console.log("Tested Scuccessfully!")
});

module.exports = app;