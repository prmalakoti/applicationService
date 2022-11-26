const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT

var userRoutes = require('./routes/userRoutes');
var tokenRoute = require('./routes/jwtToken');
var axiosRoute = require('./routes/axiosRoutes');
app.use('/getUser', userRoutes);
app.use('/getToken', tokenRoute.getToken);
app.use('/verifyToken', tokenRoute.verifyToken);
app.use('/api', axiosRoute);

app.listen(port, () => {
  console.log(`Good to see app listening on port ${port}`)
})