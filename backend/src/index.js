const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Routes = require('../routes/DifferentRoutes');

app.use('/', Routes);


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})