const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("Talk is cheap. Show me the code. -Linus Torvalds");
});

// router.post(endpoint or user will be using to contact back end. after first input second one will be handler.)  

module.exports = router;

