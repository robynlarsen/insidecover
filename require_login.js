module.exports = function(req, res, next) {
  if (req.user === null) {
    res.send(401);
  } else {
    next();
  }
}