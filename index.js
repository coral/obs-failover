var config = require('./config.json')
var OBSRemote = require('obs-remote');

var primary = new OBSRemote(); obs.connect(config.primary.host, config.primary.password);
var secondary = new OBSRemote(); obs.connect(config.secondary.host, config.secondary.password);