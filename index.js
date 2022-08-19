require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const app = express();
const router = express.Router();
const PORT = 8000;
const cors = require('cors')

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.CLIENT_REDIRECT_URL)

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})
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
// const apiRoutes = require('./routes');
// app.use('/api', apiRoutes);
app.listen(PORT, ()=>{console.log(`~~we are listening to port ${PORT} ~~~`)});