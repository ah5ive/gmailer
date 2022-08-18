const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const google = require('googleapis');
const app = express();
const router = express.Router();
const PORT = 8000;
const cors = require('cors')

const REFRESH_TOKEN = 'ya29.A0AVA9y1sIp5pzQjbvf_hKeCJTVR9Vffk2HukofsNMZFZVYGrlo9lGmSzgicYlfpEyvNFzNMNCmk8hRVQ7gGKsXNIIk3LPJSTNB2yLj4pS_hFj6ocJ5QnLVo76taqaEBQJJr0AtV36cc9dGyMS3djGcFUR0oaUaCgYKATASATASFQE65dr8BDzTBLo0t-KYZwFJw-jlnQ0163'

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