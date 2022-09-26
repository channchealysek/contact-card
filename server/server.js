const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// to use the client folder in server/server.js.
app.use(express.static('../client/dist/'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require the HTML route in the server.js file by using
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});