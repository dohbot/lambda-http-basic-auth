'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: '<region>' }); //e.g. ap-northeast-2

// Configure authentication
const authUser = '<user>';
const authPass = '<password>';
const authString = 'Basic ' + new Buffer(authUser + ':' + authPass).toString('base64');

exports.handler = (e, ctxt, cb) => {
  // Get request and request headers
  const req = e.Records[0].cf.request;
  const h = req.headers;

  // Require Basic authentication
  if (typeof h.authorization == 'undefined' || h.authorization[0].value != authString) {
    const res = {
      status: '401',
      statusDescription: 'Unauthorized',
      body: 'Unauthorized',
      headers: { 'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }] }
    };

    cb(null, res);
  }

  // Continue request processing if authentication passed
  cb(null, req);
};
