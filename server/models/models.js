const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required."]
    },
    correctAnswer: {
        type: String
    },
    incorrectAnswers : {
        type: Array,
    },
    difficulty : {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
    },
    category : {
        type: String,
        enum: ['General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', "Science: Computers", "Science: Mathematics", "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities", "Animals", "Vehicles"]
    }
}, { timestamps: true });

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;