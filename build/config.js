"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.PUBLIC_URL = process.env.PUBLIC_URL;
exports.BIND_PORT = Number(process.env.BIND_PORT);
exports.APP_PROTOCOL = process.env.APP_PROTOCOL;
exports.APP_HOST = process.env.APP_HOST;

exports.RESOURCE_PROTOCOL = process.env.RESOURCE_PROTOCOL;
exports.RESOURCE_HOST = process.env.RESOURCE_HOST;
exports.RESOURCE_URL = `${process.env.RESOURCE_PROTOCOL}://${process.env.RESOURCE_HOST}`;