const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req);
  res.json(req.user);
});

router.post("/signup", (req, res) => {
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json("logout successful");
});

router.get("/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

router.post("/beneFormData", (req, res) => {
  db.Beneficiary.create({
    policyNumber: req.body.policyNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    primaryBeneficiaryFName: req.body.primaryBeneficiaryFName,
    primaryBeneficiaryLName: req.body.primaryBeneficiaryLName,
    PrimaryPercentage: req.body.PrimaryPercentage,
    PAddressOne: req.body.PAddressOne,
    PAddressTwo: req.body.PAddressTwo,
    PCity: req.body.PCity,
    PZip: req.body.PZip,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/OwnerShipFormData", (req, res) => {
  db.Ownership.create({
    policyNumber: req.body.policyNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    newOwnersFName: req.body.newOwnersFName,
    newOwnersLName: req.body.newOwnersLName,
    dateOfBirth: req.body.dateOfBirth,
    relationshipToInsured: req.body.relationshipToInsured,
    newOwnersAddress: req.body.newOwnersAddress,
    newOwnersAddressTwo: req.body.newOwnersAddressTwo,
    newOwnersCity: req.body.newOwnersCity,
    newOwnersZip: req.body.newOwnersZip,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;