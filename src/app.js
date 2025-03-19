"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var db_1 = require("./services/db");
var userRoutes_1 = require("./routes/userRoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/users', userRoutes_1.default);
(0, db_1.connectToDatabase)().then(function () {
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
});
