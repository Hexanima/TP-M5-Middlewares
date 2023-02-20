const admins = ["Ada", "Greta", "Vim", "Tim"];

function isAdmin (req, res, next) {
    let user = req.query.user;
    admins.forEach(admin => {
        if (user == admin) {
            next();
        }
    })

    res.send("No tienes los privilegios para ingresar");
}

module.exports = isAdmin;