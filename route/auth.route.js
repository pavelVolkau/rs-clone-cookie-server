"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidation_middleware_1 = __importDefault(require("../middleware/authValidation.middleware"));
const Auth_controller_1 = __importDefault(require("../controller/Auth.controller"));
const authRouter = (0, express_1.Router)();
const userController = new Auth_controller_1.default();
authRouter.post('/register', authValidation_middleware_1.default, userController.createUser);
authRouter.post('/login', userController.loginUser);
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map