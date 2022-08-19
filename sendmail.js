require('dotenv').config();
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
//gmail credential
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})
const accessToken = oAuth2Client.getAccessToken()

const sendMail = async (req, res) => {
	let transporter =  nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.CLIENT_ADD,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: accessToken
		}
	})

	let mailOptions = {
		from: 'ah5ive@gmail.com',
		to: `"Shiinstudio" <${process.env.CLIENT_ADD}>`,
		subject: 'test nodemailer',
		html:'<h2>hello world!!!!</h2>'
	}

	return transporter.sendMail(mailOptions)
		.then((sendResult) => {
			res.json({
				success: true,
				msg: sendResult
			})
		})
		.catch((sendErr) => {
			res.json({success: false, msg: sendErr})
		})
}

module.exports = {
	sendMail
}