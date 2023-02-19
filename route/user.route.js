"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controller/User.controller"));
const addDate_middleware_1 = __importDefault(require("../middleware/addDate.middleware"));
const authJwt_middleware_1 = __importDefault(require("../middleware/authJwt.middleware"));
const userRouter = (0, express_1.Router)();
const userController = new User_controller_1.default();
userRouter.get('/get', authJwt_middleware_1.default, userController.getUserData);
userRouter.get('/getAll', userController.getAllUserCookies);
userRouter.post('/post', [authJwt_middleware_1.default, addDate_middleware_1.default], userController.postUserData);
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map