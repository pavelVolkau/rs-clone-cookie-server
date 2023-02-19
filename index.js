"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const default_json_1 = __importDefault(require("./config/default.json"));
const auth_route_1 = __importDefault(require("./route/auth.route"));
const user_route_1 = __importDefault(require("./route/user.route"));
const PORT = process.env.PORT || default_json_1.default.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/auth', auth_route_1.default);
app.use('/api/user', user_route_1.default);
async function start() {
    try {
        mongoose_1.default.set('strictQuery', false);
        await mongoose_1.default.connect(default_json_1.default.mongodbURI);
        app.listen(PORT, () => {
            console.log(`CORS-enabled web server listening on port: ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
//# sourceMappingURL=index.js.map