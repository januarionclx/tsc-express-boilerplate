"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Enviroment
require('dotenv').config();
// Includes
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// config
const PORT = process.env.PORT || 3000;
// Main
app.get('/ping', (_, res) => {
    res.end('pong');
});
app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}...`);
});
