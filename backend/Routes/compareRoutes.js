const express = require("express");
const { comparePhones } = require("../services/compareService");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { phone1, phone2 } = req.body;
    const result = await comparePhones(phone1, phone2);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
