const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."
  );
});

// router.post(endpoint or user will be using to contact back end. after first input second one will be handler.)  

module.exports = router;

