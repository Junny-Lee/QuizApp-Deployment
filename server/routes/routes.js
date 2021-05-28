const controller = require('../controllers/controller');

module.exports = app => {
    // READ
    app.get('/api/quiz/', controller.getOneQuiz);
}