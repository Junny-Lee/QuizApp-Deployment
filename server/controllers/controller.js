const Quiz = require('../models/models');
module.exports = {
    // CREATE QUIZ
    // READ
    getOneQuiz: (req, res) => {
        Quiz.findById(req.params._id)
            .then(quiz => res.json({ message: "success", results: quiz }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // UPDATE
    // DELETE
}
