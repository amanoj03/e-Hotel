const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    customername: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true },
    datefrom: { type: Date, required: true },
    dateto: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
