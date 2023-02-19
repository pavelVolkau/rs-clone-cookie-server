"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const default_json_1 = __importDefault(require("../../config/default.json"));
async function getAccessToken(login, userId, lifeTime = default_json_1.default.jwtLifeTime) {
    const payload = {
        login,
        userId,
    };
    return `Bearer ${jsonwebtoken_1.default.sign(payload, default_json_1.default.jwtSecretKey, {
        expiresIn: lifeTime,
    })}`;
}
exports.default = getAccessToken;
//# sourceMappingURL=getAccessToken.js.map