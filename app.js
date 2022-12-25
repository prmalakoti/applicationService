const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT
var cors = require('cors')
app.use(cors());
var middleware = require('./middleware/logger')
var userRoutes = require('./routes/userRoutes');
var tokenRoute = require('./routes/jwtToken');
var axiosRoute = require('./routes/axiosRoutes');
app.use(middleware.logger);

app.use(express.json());

//app.use(middleware.authorization)
app.use('/v1', userRoutes);
app.use('/getToken', tokenRoute.getToken);
app.use('/verifyToken', tokenRoute.verifyToken);
app.use('/api', axiosRoute);

app.listen(port, () => {
  console.log(`Good to see app listening on port ${port}`)
})