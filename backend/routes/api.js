var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send({ service: "backend:api", ok: true });
});

router.get("/payments", function (req, res) {
  fetch(`http://localhost:${process.env.PAYMENT_API_PORT || 3001}/api/payments`)
    .then((response) => response.json())
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/payments", function (req, res) {
  fetch(`http://localhost:${process.env.PAYMENT_API_PORT || 3001}/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
