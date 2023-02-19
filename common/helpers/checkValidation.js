"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function checkValidation(errors, response) {
    if (!errors.isEmpty()) {
        return response.status(constants_1.STATUS_CODE.ClientErrorBadRequest).json({
            errors: errors.array(),
            message: constants_1.NEGATIVE_MESSAGES.invalidData,
        });
    }
    return;
}
exports.default = checkValidation;
//# sourceMappingURL=checkValidation.js.map