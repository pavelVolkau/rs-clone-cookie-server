"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../common/helpers/constants");
async function addDate(req, res, next) {
    if (req.method !== 'POST') {
        return next();
    }
    try {
        req.body.date = Date.parse(new Date().toString()) / 1000;
        next();
    }
    catch (err) {
        return res
            .status(constants_1.STATUS_CODE.ClientErrorUnauthorized)
            .json({ message: constants_1.NEGATIVE_MESSAGES.noAuthorization });
    }
}
exports.default = addDate;
//# sourceMappingURL=addDate.middleware.js.map