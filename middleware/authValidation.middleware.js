"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const constants_1 = require("../common/helpers/constants");
const default_json_1 = __importDefault(require("../config/default.json"));
const userValidation = [
    (0, express_validator_1.check)(constants_1.FIELD_TYPE.password, constants_1.NEGATIVE_MESSAGES.invalidPassword)
        .exists()
        .isString()
        .isLength({
        min: default_json_1.default.minLengthPassword,
    })
        .isAlphanumeric(),
];
exports.default = userValidation;
//# sourceMappingURL=authValidation.middleware.js.map