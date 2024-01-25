const express = require("express");
const app = express();

const { PORT } = require("./config/server-config");

const setUpAndStartServer = () =>{
    app.listen(PORT, ()=>{
        console.log(`Server is up and running on PORT: ${PORT}`);
    });
};
setUpAndStartServer();