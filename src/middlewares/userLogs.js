const fs = require("fs");
const path = require("path")
const logPath = path.join(__dirname, "../logs/userLogs.txt");

function logger (req, res, next) {
    let mensaje = "El usuario ingresó a la ruta: " + req.path + "\n";
    fs.appendFileSync(logPath, mensaje, "utf-8");
    next();
}

module.exports = logger;