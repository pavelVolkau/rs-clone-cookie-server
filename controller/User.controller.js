"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../common/helpers/constants");
const User_model_1 = __importDefault(require("../models/User.model"));
class AuthController {
    getUserData = async (req, res) => {
        try {
            const payload = req.body.payload;
            const candidate = await User_model_1.default.findOne({ login: payload.login });
            if (!candidate) {
                return res
                    .status(constants_1.STATUS_CODE.ServerErrorInternal)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.noData });
            }
            return res.status(constants_1.STATUS_CODE.SuccessOK).json({
                message: constants_1.POSITIVE_MESSAGES.successGetData,
                data: candidate.data,
                timeHasPassed: Date.parse(new Date().toString()) / 1000 - candidate.date,
            });
        }
        catch (err) {
            return res
                .status(constants_1.STATUS_CODE.ServerErrorInternal)
                .json({ message: constants_1.ERR_MESSAGES.default });
        }
    };
    getAllUserCookies = async (req, res) => {
        try {
            const candidates = await User_model_1.default.find();
            if (!candidates) {
                return res
                    .status(constants_1.STATUS_CODE.ServerErrorInternal)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.noData });
            }
            const dataArr = candidates.map((candidate) => {
                return {
                    login: candidate.login,
                    cookies: candidate.data?.cookiesCount,
                };
            });
            return res.status(constants_1.STATUS_CODE.SuccessOK).json({
                message: constants_1.POSITIVE_MESSAGES.successGetData,
                data: dataArr,
            });
        }
        catch (err) {
            return res
                .status(constants_1.STATUS_CODE.ServerErrorInternal)
                .json({ message: constants_1.ERR_MESSAGES.default });
        }
    };
    postUserData = async (req, res) => {
        try {
            const payload = req.body.payload;
            const newData = req.body.data;
            const dateOffUser = req.body.date;
            const candidate = await User_model_1.default.findOne({ login: payload.login });
            if (!candidate) {
                return res
                    .status(constants_1.STATUS_CODE.ServerErrorInternal)
                    .json({ message: constants_1.NEGATIVE_MESSAGES.noData });
            }
            const updatedUser = await User_model_1.default.updateOne({ login: payload.login }, {
                data: newData,
                date: dateOffUser,
            });
            return res.status(constants_1.STATUS_CODE.SuccessAccepted).json({
                message: constants_1.POSITIVE_MESSAGES.updateData,
                updatedUser,
            });
        }
        catch (err) {
            return res
                .status(constants_1.STATUS_CODE.ServerErrorInternal)
                .json({ message: constants_1.ERR_MESSAGES.default });
        }
    };
}
exports.default = AuthController;
//# sourceMappingURL=User.controller.js.map