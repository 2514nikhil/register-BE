const jwt = require("jsonwebtoken");
const secretKey = 'nikhil'

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader,"auth");
  

  if (!authHeader) //|| !authHeader.startsWith("Bearer ")) {
    {
    return res.status(401).send({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  console.log(token,"token")

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send({ msg: "Invalid or expired token" });
  }
};

module.exports = auth;