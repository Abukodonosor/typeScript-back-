"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DB_1 = require("./DB");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(email, password, username, id) {
        if (username === void 0) { username = null; }
        if (id === void 0) { id = null; }
        var _this = _super.call(this) || this;
        _this.email = email;
        _this.password = password;
        _this.username = username;
        _this.id = id;
        return _this;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (_this.id == undefined)
                            _this.insertNew();
                        else
                            _this.updateExisting();
                        resolve(true);
                    })];
            });
        });
    };
    User.prototype.insertNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = [this.username, this.password, this.email];
                return [2 /*return*/, new Promise(function (resolve) {
                        DB_1.DB.conn.query("INSERT INTO " + User.tableName + " (username, password, email) VALUES (?,?,?)", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    ;
    User.prototype.updateExisting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = [this.username, this.password, this.email, this.id];
                return [2 /*return*/, new Promise(function (resolve) {
                        DB_1.DB.conn.query("UPDATE " + User.tableName + " username = ?, password = ?, email = ? WHERE id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    ;
    //static functions
    User.exist = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = [email, password];
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.conn.query("SELECT * FROM " + User.tableName + " WHERE email = ? AND password = ? LIMIT 1", params, function (err, rows) {
                            if (err)
                                throw err;
                            if (rows.length)
                                resolve({ email: rows[0].email, password: rows[0].password, username: rows[0].username, id: rows[0].id });
                            else
                                resolve(false);
                        });
                    })];
            });
        });
    };
    User.existEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = [email];
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.conn.query("SELECT * FROM " + User.tableName + " WHERE email = ? LIMIT 1", params, function (err, rows) {
                            if (err)
                                throw err;
                            if (rows.length)
                                resolve({ email: rows[0].email, password: rows[0].password, username: rows[0].username, id: rows[0].id });
                            else
                                resolve(false);
                        });
                    })];
            });
        });
    };
    User.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = [id];
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.conn.query("SELECT * FROM " + User.tableName + " WHERE id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve({ email: rows[0].email, password: rows[0].password, username: rows[0].username, id: rows[0].id });
                        });
                    })];
            });
        });
    };
    //name of table in our DB
    User.tableName = 'user';
    return User;
}(DB_1.DB));
exports.User = User;
