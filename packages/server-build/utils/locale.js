"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18next = require("../../../node_modules/i18next");
var i18next_express_middleware = require("../../../node_modules/i18next-express-middleware");
var en = require("../../locales/en/translation.json");
var ja = require("../../locales/ja/translation.json");

exports.createI18n = function () {
    i18next.use(i18next_express_middleware.LanguageDetector).init({
        resources: {
            en: { translation: en },
            ja: { translation: ja },
        },
        ns: ['translation'],
        defaultNS: 'translation',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: true,
        },
    });
    return i18next;
};