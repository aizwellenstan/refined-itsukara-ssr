"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18next = require("i18next");
const i18next_express_middleware = require("i18next-express-middleware");
const en = require("../../packages/locales/en/translation.json");
const ja = require("../../packages/locales/ja/translation.json");

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