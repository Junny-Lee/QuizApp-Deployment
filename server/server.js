const express = require('express');
const cors = require('cors');
const app = express();
const compass = require('compass')

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(compass({ cwd: __dirname + 'public' }));
app.use(express.static(__dirname + 'public'));

require('./config/mongoose.config');
require('./routes/routes.js')(app);

app.listen(8000, () => console.log("Now listening on port 8000"));