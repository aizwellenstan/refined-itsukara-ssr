"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("../../../node_modules/path");
var express = require("../../../node_modules/express");
var request = require("../../../node_modules/request");
var render = require('../../client');
var manifest = require('../../client/static/build/manifest.json');
var router = express.Router();
var config_1 = require('../config');

// Bind /api/* to original API server
router.use('/api', function (req, res) {
    // var boundPath = config_1.RESOURCE_PROTOCOL + "://" + config_1.RESOURCE_HOST + req.path;
    var boundPath = "https://api.itsukaralink.jp"+req.path
    req.pipe(request(boundPath)).pipe(res);
});
// Service worker
router.use('/sw.js', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/static/build/sw.js'));
  });
  
  // Progressive web app
  router.use('/manifest.json', ({ i18n }, res) => {
    res.json({
      name: i18n.t('meta.title', { defaultValue: 'Refined itsukara.link' }),
      short_name: i18n.t('meta.title_short', { defaultValue: 'Ril' }),
      display: 'standalone',
      icons: [
        {
          src: '/android-chrome.png',
          size: '250x250',
          type: 'image/png',
        },
      ],
      start_url: '/activities',
      theme_color: '#F80652',
      background_color: '#C70542',
    });
  });
  
  // Server side rendering
  router.use(async (req, res) => {
    const result = await render({
      manifest,
      i18n: req.i18n,
      location: req.url,
    });
  
    res.status(result.statusCode);
    res.send(`<!DOCTYPE html>\n${result.staticMarkup}`);
  });

exports.routes = router;
