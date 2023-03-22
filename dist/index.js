"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening..."));
app.use(express.static('./src'));
app.get('/', function (request, response) {
    response.sendFile('index.html', { root: './src' });
});
console.log("I live!");
//# sourceMappingURL=index.js.map