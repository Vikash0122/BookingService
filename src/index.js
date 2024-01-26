const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/index');
//const db = require("./models/index");

const { PORT } = require("./config/server-config");

const setUpAndStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api", apiRoutes);

    app.listen(PORT, ()=>{
        //db.sequelize.sync({ alter: true });
        console.log(`Server is up and running on PORT: ${PORT}`);
    });
};
setUpAndStartServer();