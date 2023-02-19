"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    data: {
        cookiesCount: { type: Number, default: 0 },
        boosters: {
            doubleCost: { type: Number, default: 0 },
            changeSpeed: { type: Number, default: 0 },
            blow: { type: Number, default: 0 },
        },
        factories: {
            factoryS: {
                bought: { type: Boolean, default: false },
                level: { type: Number, default: 0 },
            },
            factoryM: {
                bought: { type: Boolean, default: false },
                level: { type: Number, default: 0 },
            },
            factoryL: {
                bought: { type: Boolean, default: false },
                level: { type: Number, default: 0 },
            },
        },
    },
    date: { type: Number, default: Date.parse(new Date().toString()) / 1000 },
});
exports.default = (0, mongoose_1.model)('User', schema);
//# sourceMappingURL=User.model.js.map