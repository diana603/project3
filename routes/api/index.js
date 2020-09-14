const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/secrets", isAuthenticated, (req, res) => {
  res.json("I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."
  );
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
    PZip: req.body.PZip
  }).then((dbResponse) => {
    res.json(dbResponse);
  })
    .catch((err) => {
      res.json(err);
    });
})
router.post("/OwnerFormData", (req, res) => {
  db.Ownership.create({
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
    PZip: req.body.PZip
  }).then((dbResponse) => {
    res.json(dbResponse);
  })
    .catch((err) => {
      res.json(err);
    });
})


module.exports = router;
