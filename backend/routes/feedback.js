const router = require("express").Router();
let Feedback = require("../models/feedback.model.js");

router.route("/").get((req, res) => {
  Feedback.find()
    .then((feedbacks) => res.json(feedbacks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const summary = req.body.summary;
  const description = req.body.description;

  const newFeedback = new Feedback({
    name,
    age,
    summary,
    description,
  });
  newFeedback
    .save()
    .then(() => res.json("Feedback Added!"))
    .catch((err) => res.status(400).json("Error Occured: " + err));
});
module.exports = router;
