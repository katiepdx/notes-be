const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

// ROUTES
app.use('/api/v1/notes', require('./controller/notes-routes'))

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
