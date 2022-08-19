const express = require('express');
const { remotebuildexecution } = require('googleapis/build/src/apis/remotebuildexecution');
const router = express.Router();
const {sendMail} = require('./sendmail');

router.post('/sendmail', sendMail)

module.exports = router;