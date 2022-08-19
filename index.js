require('dotenv').config()
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
const cors = require('cors');
const helmet = require('helmet');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = router;

var whitelist = [
	'http://localhost:4000',
];

var corsOptions = {
	origin: function(origin, callback){
			var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
			callback(null, originIsWhitelisted);
	},
	credentials: true
};

app.use(cors(corsOptions));
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);
app.use(helmet())

app.listen(PORT, ()=>{console.log(`~~we are listening to port ${PORT} ~~~`)});