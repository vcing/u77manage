const config       = require('./config.js');
const AV           = require('leanengine');

AV.initialize(process.env.LC_APP_ID || config.LC_APP_ID,
			process.env.LC_APP_KEY || config.LC_APP_KEY,
			process.env.LC_APP_MASTER_KEY || config.LC_MASTER_KEY);
AV.Cloud.useMasterKey();

module.exports = AV;