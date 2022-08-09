"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const validation_1 = require("./middleware/validation");
const cities_1 = __importDefault(require("./routes/cities"));
const cors_1 = require("./middleware/cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/cities", cities_1.default);
app.use(cors_1.initCorsMiddleware);
app.use(validation_1.ValidationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map