"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const default_json_1 = __importDefault(require("../config/default.json"));
const constants_1 = require("../common/helpers/constants");
async function authJwt(req, res, next) {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
        const jwtToken = req.headers.authorization?.split(' ')[1];
        if (!jwtToken) {
            return res
                .status(constants_1.STATUS_CODE.ClientErrorUnauthorized)
                .json({ message: constants_1.NEGATIVE_MESSAGES.noAuthorization });
        }
        const payload = jsonwebtoken_1.default.verify(jwtToken, default_json_1.default.jwtSecretKey);
        req.body.payload = payload;
        next();
    }
    catch (err) {
        return res
            .status(constants_1.STATUS_CODE.ClientErrorUnauthorized)
            .json({ message: constants_1.NEGATIVE_MESSAGES.noAuthorization });
    }
}
exports.default = authJwt;
//# sourceMappingURL=authJwt.middleware.js.map