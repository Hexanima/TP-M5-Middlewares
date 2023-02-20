const admins = ["Ada", "Greta", "Vim", "Tim"];

function isAdmin(req, res, next) {
  let user = req.query.user;
  if (admins.includes(user)) {
    next();
  } else {
    res.send("No tienes los privilegios para ingresar");
  }
}

module.exports = isAdmin;
