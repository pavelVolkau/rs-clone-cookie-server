"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODE = exports.FIELD_TYPE = exports.POSITIVE_MESSAGES = exports.NEGATIVE_MESSAGES = exports.ERR_MESSAGES = void 0;
exports.ERR_MESSAGES = {
    default: 'Что-то пошло не так, попробуйте заново',
};
exports.NEGATIVE_MESSAGES = {
    hasUser: 'Такой пользователь уже существует',
    invalidData: 'Неверные данные',
    invalidLogin: 'Некорректный логин',
    invalidPassword: 'Некорректный пароль',
    noAuthorization: 'Нет авторизации',
    noData: 'Данные отстутствуют',
};
exports.POSITIVE_MESSAGES = {
    createUser: 'Пользователь создан',
    createData: 'Данные созданы',
    updateData: 'Данные обновлены',
    loginUser: 'Вы успешно вошли в систему',
    successGetData: 'Данные получены',
};
exports.FIELD_TYPE = {
    password: 'password',
    userName: 'userName',
    email: 'email',
};
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SuccessOK"] = 200] = "SuccessOK";
    STATUS_CODE[STATUS_CODE["SuccessCreated"] = 201] = "SuccessCreated";
    STATUS_CODE[STATUS_CODE["SuccessAccepted"] = 202] = "SuccessAccepted";
    STATUS_CODE[STATUS_CODE["ClientErrorBadRequest"] = 400] = "ClientErrorBadRequest";
    STATUS_CODE[STATUS_CODE["ClientErrorUnauthorized"] = 401] = "ClientErrorUnauthorized";
    STATUS_CODE[STATUS_CODE["ClientErrorNotFound"] = 404] = "ClientErrorNotFound";
    STATUS_CODE[STATUS_CODE["ServerErrorInternal"] = 500] = "ServerErrorInternal";
    STATUS_CODE[STATUS_CODE["ServerErrorNotImplemented"] = 501] = "ServerErrorNotImplemented";
    STATUS_CODE[STATUS_CODE["ServerErrorBadGateway"] = 502] = "ServerErrorBadGateway";
})(STATUS_CODE = exports.STATUS_CODE || (exports.STATUS_CODE = {}));
//# sourceMappingURL=constants.js.map