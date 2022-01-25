/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

var express = require('express');
var router = express.Router();

/* GET query listing. */
router.get('/', async function(req, res, next) {
    const { FileSystemWallet, Gateway } = require('fabric-network'); //Creates a new gateway and use it to connect to the network
    const path = require('path');
    
    const ccpPath = path.resolve(__dirname, '..', 'config', 'connection-org1.json');
        
    
});

module.exports = router;
