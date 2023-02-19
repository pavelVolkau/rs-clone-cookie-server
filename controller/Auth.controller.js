"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const User_model_1 = __importDefault(require("../models/User.model"));
const constants_1 = require("../common/helpers/constants");
const getAccessToken_1 = __importDefault(require("../common/helpers/getAccessToken"));
const CONSTANTS = {
    hashLength: 12,
};
class AuthController {
    createUser = async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(constants_1.STATUS_CODE.ClientErrorBadRequest).json({
                    errors: errors.array(),
                    message: constants_1.NEGATIVE_MESSAGES.invalidData,
                });
            }
            const { login, password } = req.body;
            const candidate = await User_model_1.default.findOne({ login });
            if (candidate) {
                return res
                    .status(constants_1.STATUS_CODE.ClientErrorBadRequest)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.hasUser });
            }
            const hashedPassword = await bcryptjs_1.default.hash(password, CONSTANTS.hashLength);
            const user = new User_model_1.default({ login, password: hashedPassword });
            await user.save();
            return res
                .status(constants_1.STATUS_CODE.SuccessCreated)
                .json({ message: constants_1.POSITIVE_MESSAGES.createUser });
        }
        catch (err) {
            return res
                .status(constants_1.STATUS_CODE.ServerErrorInternal)
                .json({ message: constants_1.ERR_MESSAGES.default });
        }
    };
    loginUser = async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(constants_1.STATUS_CODE.ClientErrorBadRequest).json({
                    errors: errors.array(),
                    message: constants_1.NEGATIVE_MESSAGES.invalidData,
                });
            }
            const { login, password } = req.body;
            const candidate = await User_model_1.default.findOne({ login });
            if (!candidate) {
                return res
                    .status(constants_1.STATUS_CODE.ClientErrorBadRequest)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.invalidLogin });
            }
            const validPassword = await bcryptjs_1.default.compare(password, candidate.password);
            if (!validPassword) {
                return res
                    .status(constants_1.STATUS_CODE.ClientErrorBadRequest)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.invalidPassword });
            }
            const token = await (0, getAccessToken_1.default)(candidate.login, candidate.id);
            return res
                .status(constants_1.STATUS_CODE.SuccessOK)
                .json({ message: constants_1.POSITIVE_MESSAGES.loginUser, token });
        }
        catch (e) {
            return res
                .status(constants_1.STATUS_CODE.ServerErrorInternal)
                .json({ message: constants_1.ERR_MESSAGES.default });
        }
    };
}
exports.default = AuthController;
//# sourceMappingURL=Auth.controller.js.map