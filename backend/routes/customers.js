const router = require("express").Router();
let Customer = require("../models/customer.model.js");

router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const customername = req.body.customername;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const datefrom = Date.parse(req.body.datefrom);
  const dateto = Date.parse(req.body.dateto);

  const newCustomer = new Customer({
    customername,
    address,
    city,
    country,
    phonenumber,
    email,
    datefrom,
    dateto,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer Added!"))
    .catch((err) => res.status(400).json("Error Occurred: " + err));
});
router.route("/:_id").delete((req, res) => {
  Customer.findByIdAndDelete(req.params._id)
    .then(() => res.json("Customer deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
