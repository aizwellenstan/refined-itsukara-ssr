"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const request = require("request");
const render = require('../../packages/client');
const manifest = require('../../packages/client/static/build/manifest.json');
const router = express.Router();

// Bind /api/* to original API server
router.use('/api', function (req, res) {
    // const boundPath = config_1.RESOURCE_PROTOCOL + "://" + config_1.RESOURCE_HOST + req.path;
    const boundPath = "https://api.itsukaralink.jp"+req.path
    req.pipe(request(boundPath)).pipe(res);
});
// Service worker
router.use('/sw.js', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../../packages/client/static/build/sw.js'));
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
