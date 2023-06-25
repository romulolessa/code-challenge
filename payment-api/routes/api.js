var express = require("express");
var { randomUUID } = require("node:crypto");
var router = express.Router();

// A fake database of payments.
//
// Each payment is identified by its `id`. All fields are required.
//
// Modifying `allPayments` is ok for the purposes of the test.
const allPayments = [
  {
    id: randomUUID(),
    name: "Anne Alpaca",
    cardNumber: "1111222233334444",
    currency: "GBP",
    amount: "1.23",
  },
  {
    id: randomUUID(),
    name: "Ben Bear",
    cardNumber: "2222333344445555",
    currency: "EUR",
    amount: "2.34",
  },
  {
    id: randomUUID(),
    name: "Carol Crane",
    cardNumber: "2222333344445555",
    currency: "EUR",
    amount: "2.34",
  },
];

router.get("/payments", function (req, res) {
  res.send({
    payments: allPayments,
  });
});

router.post("/payments", function (req, res) {
  const { name, cardNumber, currency, amount } = req.body
  const Payment = {
    id: randomUUID(),
    name, 
    cardNumber,
    currency,
    amount
  }
  allPayments.push(Payment)
  return res.status(201).send(Payment)
});

module.exports = router;
